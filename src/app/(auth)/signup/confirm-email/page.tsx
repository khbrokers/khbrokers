import Image from "next/image";
import Link from "next/link";
import { SignInLeftPanel } from "@/components/auth/SignInLeftPanel";

export const metadata = {
  title: "Confirm Your Email | KH Brokers",
  description: "Check your email to confirm your KH Brokers account",
};

export default async function ConfirmEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden">
      <SignInLeftPanel />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:w-1/2 lg:px-16 max-lg:bg-[url('/assets/signin/signin.png')] max-lg:bg-cover max-lg:bg-center">
        <div className="w-full max-w-[480px] rounded-2xl bg-white/20 p-6 backdrop-blur-[5px] lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/assets/brand_assets/logo.png"
              alt=""
              width={96}
              height={96}
              unoptimized
              className="object-contain h-10 w-auto sm:h-12"
            />
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8C52FF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#8C52FF"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-center text-[24px] font-semibold tracking-tight text-zinc-900 sm:text-[28px]">
            Check your email
          </h1>
          <p className="mx-auto mt-3 max-w-[360px] text-center text-[14px] leading-relaxed text-zinc-500 sm:text-[15px]">
            We&apos;ve sent a confirmation link to
            {email ? (
              <>
                {" "}
                <span className="font-medium text-zinc-900">{email}</span>
              </>
            ) : (
              " your email address"
            )}
            . Please click the link to verify your account before signing in.
          </p>

          <div className="mt-8 rounded-xl bg-zinc-50 px-5 py-4 text-[13px] leading-relaxed text-zinc-500 sm:text-[14px]">
            <p className="font-medium text-zinc-700 mb-1">Didn&apos;t receive the email?</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email</li>
              <li>Try signing up again if the issue persists</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/signin"
              className="inline-block w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-5 md:text-[18px]"
            >
              Go to Sign In
            </Link>
          </div>

          <p className="mt-5 text-center text-[13px] text-zinc-500 sm:mt-6 sm:text-[14px]">
            Need help?{" "}
            <Link
              href="/contact"
              className="cursor-pointer font-medium underline"
              style={{ color: "#8C52FF" }}
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
