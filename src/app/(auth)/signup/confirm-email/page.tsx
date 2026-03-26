import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";
import { OtpVerifyForm } from "@/components/auth/OtpVerifyForm";

export const metadata = {
  title: "Verify Your Email | KH Brokers",
  description: "Enter the verification code sent to your email",
};

export default async function ConfirmEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; redirect?: string }>;
}) {
  const { email, redirect } = await searchParams;
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <OtpVerifyForm email={email || ""} redirectTo={redirect || "/"} />
    </main>
  );
}
