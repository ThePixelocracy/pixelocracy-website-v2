import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryCTAProps = React.ComponentProps<typeof Button> & {
  href?: string;
  accentTab?: boolean;
};

export function PrimaryCTA({
  href,
  size = "lg",
  accentTab,
  className,
  children,
  ...props
}: PrimaryCTAProps) {
  return (
    <Button
      size={size}
      className={cn(accentTab && "relative ml-1", className)}
      render={href ? <Link href={href} /> : undefined}
      {...props}
    >
      {accentTab ? (
        <span
          aria-hidden="true"
          className="absolute top-0.5 bottom-0.5 -left-1 w-1 rounded-full bg-primary"
        />
      ) : null}
      {children}
    </Button>
  );
}
