import { SignUpForm } from "@/components/auth/SignUpForm";
import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";

export const metadata = {
  title: "Sign Up | KH Brokers",
  description: "Create your KH Brokers account",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <SignUpForm />
    </main>
  );
}
