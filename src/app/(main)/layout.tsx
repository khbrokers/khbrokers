import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { WelcomeModal } from "@/components/modals/WelcomeModal";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <ConditionalFooter />
      <Suspense fallback={null}>
        <WelcomeModal />
      </Suspense>
    </>
  );
}
