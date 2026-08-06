import { NotchButton } from "@/components/v3/notch-button";

export function CTAV3() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary px-6 py-24 sm:px-8 sm:py-32"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 22px 100%, 0 calc(100% - 22px))" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-white/70 uppercase">
          <span className="size-2 bg-white" aria-hidden="true" />
          Contact / Grid.06
        </div>

        <h2 className="font-display mt-8 max-w-3xl break-words text-[clamp(2.5rem,1.2rem+6vw,6.5rem)] leading-[0.95] font-medium text-white">
          Get in touch.
        </h2>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-lg flex-col gap-4 text-lg text-white/90">
            <p>
              Looking for a reliable partner to design, build, or support your next project?
              We&apos;d be happy to hear more!
            </p>
            <p>
              Share a few details with us, and someone from our team will get back to you
              promptly and professionally. We treat every inquiry with care - and every project
              with clarity.
            </p>
          </div>
          <NotchButton href="/contact" variant="invert" className="w-fit">
            Talk to our team
          </NotchButton>
        </div>
      </div>
    </section>
  );
}
