"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade" | "stagger" | "slide-up-from-bottom";
  rootMargin?: string;
  threshold?: number;
  /** Disconnect observer after first intersection for performance */
  once?: boolean;
  /** Stagger delay in ms - each card animates in sequence when multiple in view */
  delayMs?: number;
}

/**
 * Lazy-loads animations when element enters viewport during scroll.
 * Triggers when 15% of element is visible for smooth UX.
 * Uses Intersection Observer - disconnects after trigger for performance.
 */
export function AnimateOnView({
  children,
  className = "",
  animation = "fade-up",
  rootMargin = "0px 0px 0px 0px",
  threshold = 0.15,
  once = true,
  delayMs = 0,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  const animationClass =
    animation === "fade"
      ? "animate-on-view-fade"
      : animation === "stagger"
        ? "animate-stagger animate-on-view"
        : animation === "slide-up-from-bottom"
          ? "animate-slide-up-from-bottom"
          : "animate-on-view";
  const intersectingClass = "animate-on-view-intersecting";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isIntersecting ? intersectingClass : ""} ${className}`.trim()}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
