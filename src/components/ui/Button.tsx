import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "purple" | "navy";
  /** "sm" is the compact nav size. */
  size?: "md" | "sm";
};

/** Uppercase pill-corner link button in the two brand colours. */
export function Button({ variant = "purple", size = "md", className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-block rounded-lg font-medium tracking-[0.16em] uppercase transition-[transform,background-color,box-shadow] duration-250 ease-in-out hover:-translate-y-0.5",
        size === "md" ? "px-7.5 py-3.5 text-[11px] sm:px-9.5 sm:py-4 sm:text-xs" : "px-7 py-3.5 text-[11px]",
        variant === "purple"
          ? "bg-brand text-white shadow-[0_10px_24px_rgba(155,76,219,0.22)] hover:bg-brand-hi"
          : "bg-ink text-white hover:bg-[#2a3166]",
        className,
      )}
      {...props}
    />
  );
}
