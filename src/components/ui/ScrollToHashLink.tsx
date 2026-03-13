"use client";

import { useEffect } from "react";

/**
 * Global handler that makes hash links always scroll to the target when clicked,
 * even if the hash is already in the URL (e.g. user scrolled away and clicks again).
 */
export function ScrollToHashHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href*='#']");
      if (!target || !(target instanceof HTMLAnchorElement)) return;

      const href = target.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const hashIndex = href.indexOf("#");
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;

      const path = hashIndex > 0 ? href.slice(0, hashIndex) : "";
      const currentPath = window.location.pathname;
      const isSamePage = !path || currentPath === path || currentPath === path + "/";

      if (isSamePage) {
        e.preventDefault();
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
