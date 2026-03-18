import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";

export const metadata = {
  title: "Reset Password | KH Brokers",
  description: "Reset your KH Brokers account password",
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <ResetPasswordForm />
    </main>
  );
}
