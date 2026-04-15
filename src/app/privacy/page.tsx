import { Suspense } from "react";
import { PrivacyPage } from "@/components/sections/privacy/PrivacyPage";

export const metadata = {
  title: "Privacy Policy | KH Brokers",
  description:
    "Privacy Policy explaining how KH Brokers Limited collects, uses, and protects your personal data.",
};

export default function PrivacyPageRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5EEFD]" />}>
      <PrivacyPage />
    </Suspense>
  );
}
