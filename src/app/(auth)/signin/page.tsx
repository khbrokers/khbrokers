import { SignInForm } from "@/components/auth/SignInForm";
import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";

export const metadata = {
  title: "Sign In | KH Brokers",
  description: "Sign in to your KH Brokers account",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <SignInForm />
    </main>
  );
}
