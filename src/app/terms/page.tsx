import { Suspense } from "react";
import { TermsOfServicePage } from "@/components/sections/terms/TermsOfServicePage";

export const metadata = {
  title: "Terms of Service | KH Brokers",
  description:
    "Terms of Service governing your use of the KH Brokers website and services.",
};

export default function TermsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5EEFD]" />}>
      <TermsOfServicePage />
    </Suspense>
  );
}
