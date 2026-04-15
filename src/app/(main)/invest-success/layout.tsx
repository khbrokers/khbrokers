import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're In | KH Brokers",
  description:
    "Your list of available brands will arrive in your inbox within 1 hour. Book a call to discuss limited-availability deals.",
};

export default function InvestSuccessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
