import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type SectionProps = ComponentProps<"section"> & {
  /** Alternate lavender background. */
  alt?: boolean;
};

/** Page section with the standard vertical rhythm. */
export function Section({ alt, className, ...props }: SectionProps) {
  return <section className={cn("py-10 sm:py-12 nav:py-16", alt && "bg-canvas-2", className)} {...props} />;
}
