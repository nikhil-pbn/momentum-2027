import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Centered content container, 1260px max with side gutters. */
export function Wrap({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto max-w-315 px-5.5 sm:px-10", className)} {...props} />;
}
