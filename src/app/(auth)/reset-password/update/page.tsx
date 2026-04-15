import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm";
import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";

export const metadata = {
  title: "Set New Password | KH Brokers",
  description: "Set a new password for your KH Brokers account",
};

export default function UpdatePasswordPage() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <UpdatePasswordForm />
    </main>
  );
}
