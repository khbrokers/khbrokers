/** Merge class names - add tailwind-merge later for conflicting Tailwind classes */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
