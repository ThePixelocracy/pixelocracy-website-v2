import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryCTAProps = React.ComponentProps<typeof Button> & {
  href?: string;
};

export function PrimaryCTA({
  href,
  size = "lg",
  className,
  children,
  ...props
}: PrimaryCTAProps) {
  return (
    <Button
      size={size}
      variant="ghost"
      className={cn(
        "h-auto rounded-none bg-background px-8 py-5 text-base leading-6 font-normal text-foreground shadow-[6px_6px_0_0_#4467f6]",
        className
      )}
      render={href ? <Link href={href} /> : undefined}
      nativeButton={!href}
      {...props}
    >
      {children}
    </Button>
  );
}
