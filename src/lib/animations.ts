/**
 * Centralized animation tokens
 * Use with CSS classes or extend for Framer Motion later
 */

export const animationTokens = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeOut: "cubic-bezier(0.33, 1, 0.68, 1)",
    easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
} as const;

/** CSS custom properties for animations */
export const animationCssVars = {
  "--animate-duration-fast": `${animationTokens.duration.fast}ms`,
  "--animate-duration-normal": `${animationTokens.duration.normal}ms`,
  "--animate-duration-slow": `${animationTokens.duration.slow}ms`,
  "--animate-ease-out": animationTokens.easing.easeOut,
  "--animate-ease-in-out": animationTokens.easing.easeInOut,
} as const;
