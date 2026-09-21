"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const tags = { div: motion.div, span: motion.span, p: motion.p, h1: motion.h1, h2: motion.h2 };

type RevealProps = HTMLMotionProps<"div"> & {
  as?: keyof typeof tags;
  /** Extra delay in seconds, used to stagger siblings. */
  delay?: number;
};

/** Fades and rises into place the first time it scrolls into view. */
export function Reveal({ as = "div", delay = 0, ...rest }: RevealProps) {
  const Tag = tags[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      {...rest}
    />
  );
}
