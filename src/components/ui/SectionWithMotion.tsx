"use client";

import { AnimateOnView } from "./AnimateOnView";

interface SectionWithMotionProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade";
  rootMargin?: string;
}

/**
 * Wraps section content with lazy-loaded entrance animation.
 * Animations trigger only when section enters viewport for performance.
 */
export function SectionWithMotion({
  children,
  animation = "fade-up",
  rootMargin = "0px 0px 120px 0px",
}: SectionWithMotionProps) {
  return (
    <AnimateOnView animation={animation} rootMargin={rootMargin}>
      {children}
    </AnimateOnView>
  );
}
