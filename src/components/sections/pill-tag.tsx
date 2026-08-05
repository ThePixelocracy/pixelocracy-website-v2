import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pillTagVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      active: {
        true: "border-transparent bg-primary text-primary-foreground",
        false: "border-primary bg-transparent text-primary hover:bg-primary/5",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

type PillTagProps = VariantProps<typeof pillTagVariants> & {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export function PillTag({ children, href, active, className }: PillTagProps) {
  const classes = cn(pillTagVariants({ active }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}
