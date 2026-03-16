"use client";

import { useState, useEffect } from "react";
import type { Deal } from "@/config/deals.config";
import { ListingDetailPage } from "@/components/sections/deals/ListingDetailPage";
import { ListingLockedScreen } from "@/components/sections/deals/ListingLockedScreen";

interface ListingPageClientProps {
  deal: Deal;
}

export function ListingPageClient({ deal }: ListingPageClientProps) {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setAuthed(!!data?.user))
      .catch(() => setAuthed(false));
  }, []);

  if (authed === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5EEFD]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#a36af6]/30 border-t-[#a36af6]" />
      </main>
    );
  }

  if (!authed) {
    return <ListingLockedScreen />;
  }

  return <ListingDetailPage deal={deal} />;
}
