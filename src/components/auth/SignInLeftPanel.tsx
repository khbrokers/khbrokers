"use client";

import Image from "next/image";

const PURPLE = "#8C52FF";

/** Left panel: background image + headline. */
export function SignInLeftPanel() {
  return (
    <div className="relative hidden min-h-screen w-1/2 overflow-hidden lg:block">
      <Image
        src="/assets/signin/signin.png"
        alt=""
        fill
        className="object-cover object-left-top"
        priority
        sizes="50vw"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col p-12 md:p-16">
        <div className="relative z-10 shrink-0">
          <Image
            src="/assets/signin/logo.png"
            alt=""
            width={48}
            height={48}
            className="opacity-90"
          />
        </div>
        <div className="relative z-10 mt-auto max-w-3xl">
          <h2 className="text-[56px] font-medium leading-tight tracking-tight text-zinc-900 sm:text-[56px] md:text-[60px]">
            Access Approved{" "}
            <span className="font-serif italic" style={{ color: PURPLE }}>
              Acquisition Opportunities
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
            Confidential Shopify brands priced based on real seller intent and
            verified performance.
          </p>
        </div>
      </div>
    </div>
  );
}
