/**
 * Shared types for brokerage SaaS
 * Extend as features (auth, API, CMS) are added
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage?: string;
}

export interface SectionConfig {
  id: string;
  title: string;
  subtitle?: string;
  /** Section-specific data - extend per section type */
  data?: Record<string, unknown>;
}

/** Placeholder for future auth */
export interface User {
  id: string;
  email: string;
  name?: string;
}

/** Placeholder for future API responses */
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
