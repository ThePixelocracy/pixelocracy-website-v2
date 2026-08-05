import Link from "next/link";
import { Button } from "@/components/ui/button";

type PrimaryCTAProps = React.ComponentProps<typeof Button> & {
  href?: string;
};

export function PrimaryCTA({ href, size = "lg", children, ...props }: PrimaryCTAProps) {
  return (
    <Button size={size} render={href ? <Link href={href} /> : undefined} {...props}>
      {children}
    </Button>
  );
}
