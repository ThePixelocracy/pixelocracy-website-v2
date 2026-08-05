import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SecondaryCTAProps = React.ComponentProps<typeof Button> & {
  href?: string;
};

export function SecondaryCTA({
  href,
  size = "lg",
  className,
  children,
  ...props
}: SecondaryCTAProps) {
  return (
    <Button
      variant="outline"
      size={size}
      className={cn(
        "border-primary bg-transparent text-primary hover:bg-primary/5 dark:border-primary dark:bg-transparent",
        className
      )}
      render={href ? <Link href={href} /> : undefined}
      {...props}
    >
      {children}
    </Button>
  );
}
