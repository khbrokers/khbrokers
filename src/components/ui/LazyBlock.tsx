"use client";

import { AnimateOnView } from "./AnimateOnView";

interface LazyBlockProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade" | "stagger";
  rootMargin?: string;
}

/**
 * Wraps a block that animates when it enters viewport during scroll.
 * Use for header, content blocks, cards - each loads independently for smooth scroll UX.
 */
export function LazyBlock({
  children,
  className = "",
  animation = "fade-up",
  rootMargin = "0px 0px 0px 0px",
}: LazyBlockProps) {
  return (
    <AnimateOnView animation={animation} className={className} rootMargin={rootMargin}>
      {children}
    </AnimateOnView>
  );
}
