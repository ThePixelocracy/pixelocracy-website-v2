"use client";

import { useState, type FormEvent } from "react";
import { contactContent } from "@/content/contact";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string; // honeypot
};

type Status = "idle" | "submitting" | "success" | "error" | "not_configured";

const EMPTY_VALUES: FormValues = { name: "", email: "", phone: "", subject: "", message: "", company: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

/**
 * The enquiry form — real, submittable, with genuine client- and server-
 * side validation, a honeypot (no reCAPTCHA keys exist in this repository,
 * so a zero-config spam trap stands in rather than a fake/broken widget),
 * and real loading/error/success states driven by an actual fetch to
 * `/api/contact`. Labels are always visible (never placeholder-only) —
 * deliberately fixing an accessibility gap flagged against the legacy
 * design in `knowledge/05_design_system.md`.
 */
export function ContactFormV4() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof FormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const body = await response.json().catch(() => null);
      if (body?.error === "not_configured") {
        setStatus("not_configured");
      } else if (body?.error === "validation" && body.fields) {
        setErrors(body.fields);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 border-t border-foreground pt-8">
        <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">Sent</span>
        <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
          {contactContent.form.successHeading}
        </h2>
        <p className="max-w-md text-base text-foreground">{contactContent.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot — hidden from sighted users and skipped in tab order; a
          real bot filling every field will populate this one too. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-primary">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-primary">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={update("subject")}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-primary">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && <p className="text-sm text-primary">{contactContent.form.errorBody}</p>}
      {status === "not_configured" && <p className="text-sm text-primary">{contactContent.form.notConfiguredBody}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-cta group inline-flex w-fit items-center gap-3 bg-primary px-8 py-4 text-base font-medium text-white transition-opacity disabled:opacity-60"
      >
        {status === "submitting" ? contactContent.form.submittingLabel : contactContent.form.submitLabel}
        {status !== "submitting" && (
          <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        )}
      </button>

      <p className="text-sm text-muted-foreground">
        Or drop us a message via{" "}
        <a href="mailto:hello@thepixelocracy.com" className="text-foreground underline hover:text-primary">
          email
        </a>
        .
      </p>
    </form>
  );
}
