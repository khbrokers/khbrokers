import { notFound } from "next/navigation";
import { mockDeals } from "@/config/deals.config";
import { ListingPageClient } from "./ListingPageClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mockDeals.map((deal) => ({ id: deal.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const deal = mockDeals.find((d) => d.id === id);
  if (!deal) return { title: "Listing Not Found" };
  return {
    title: `${deal.niche} | ${deal.platform} Business | KH Brokers`,
    description: deal.description,
  };
}

export default async function ListingPage({ params }: PageProps) {
  const { id } = await params;
  const deal = mockDeals.find((d) => d.id === id);
  if (!deal) notFound();

  return <ListingPageClient deal={deal} />;
}
