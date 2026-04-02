"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: "fade-up" | "fade" | "fade-up-slow" | "stagger" | "stagger-slow" | "stagger-slower" | "slide-up-from-bottom" | "slide-in-from-left" | "slide-in-from-right";
  rootMargin?: string;
  threshold?: number;
  /** Disconnect observer after first intersection for performance */
  once?: boolean;
  /** Stagger delay in ms - each card animates in sequence when multiple in view */
  delayMs?: number;
  /** Skip intersection wait — content visible immediately (for above-the-fold hero) */
  visibleImmediately?: boolean;
}

/**
 * Lazy-loads animations when element enters viewport during scroll.
 * Triggers when 15% of element is visible for smooth UX.
 * Uses Intersection Observer - disconnects after trigger for performance.
 */
export function AnimateOnView({
  children,
  className = "",
  style: styleProp,
  animation = "fade-up",
  rootMargin = "0px 0px 0px 0px",
  threshold = 0.15,
  once = true,
  delayMs = 0,
  visibleImmediately = false,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(visibleImmediately);

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
      : animation === "fade-up-slow"
        ? "animate-on-view-slow"
        : animation === "stagger"
          ? "animate-stagger animate-on-view"
          : animation === "stagger-slow"
            ? "animate-stagger-slow"
            : animation === "stagger-slower"
              ? "animate-stagger-slower"
              : animation === "slide-up-from-bottom"
                ? "animate-slide-up-from-bottom"
                : animation === "slide-in-from-left"
                ? "animate-slide-in-from-left"
                : animation === "slide-in-from-right"
                ? "animate-slide-in-from-right"
                : "animate-on-view";
  const intersectingClass = "animate-on-view-intersecting";

  const combinedStyle = {
    ...styleProp,
    ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
  };

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isIntersecting ? intersectingClass : ""} ${className}`.trim()}
      style={Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined}
    >
      {children}
    </div>
  );
}
