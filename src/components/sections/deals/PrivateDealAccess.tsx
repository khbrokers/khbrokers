"use client";

import { useState } from "react";

const PRIMARY = "#a36af6";

export function PrivateDealAccess() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to newsletter/private list API
  };

  return (
    <section className="px-4 pb-12 pt-4 sm:pb-16 sm:pt-6 md:pb-20 md:pt-8 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="overflow-hidden rounded-2xl sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px]"
          style={{
            border: "4px solid transparent",
            background:
              "linear-gradient(transparent, transparent) padding-box, linear-gradient(180deg, rgba(163, 99, 244, 0.6) 0%, transparent 100%) border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div
            className="relative overflow-hidden rounded-xl px-4 py-8 sm:rounded-[22px] sm:px-6 sm:py-10 md:rounded-[26px] md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16"
            style={{
              background: "linear-gradient(30deg, #A363F4CC 0%, #A363F44D 50%, #A363F4CC 100%)",
              boxShadow:
                "inset 0 0 30px rgba(255, 255, 255, 0.7), 0 20px 60px rgba(163, 106, 246, 0.35)",
            }}
          >
            <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
              {/* Left: Text content */}
              <div className="min-w-0 flex-1">
                <h2 className="text-[24px] font-bold leading-tight text-white sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px]">
                Private Deal Access.
              </h2>
              <p className="mt-1.5 font-serif text-[18px] font-medium italic text-white/95 sm:mt-2 sm:text-[22px] md:text-[26px] lg:text-[28px]">
                Before Anyone Else.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/90 sm:mt-4 sm:text-[15px] md:text-[16px] lg:text-[17px] lg:mx-0">
                Most deals are sold quickly and never reach public marketplaces. Subscribers receive
                first access when new opportunities go live, along with updates on recent exits and
                buyer activity.
                </p>
              </div>

              {/* Right: Email + CTA - pill shape, input left + button right */}
              <div className="w-full shrink-0 lg:w-auto lg:min-w-0 lg:max-w-md">
                <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg sm:flex-row sm:rounded-full sm:p-1"
                >
                  <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 border-0 bg-white px-4 py-3 text-center text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 sm:px-5 sm:py-3.5 sm:text-[15px] md:px-6 md:py-4 md:text-[16px]"
                />
                <button
                  type="submit"
                  className="w-full shrink-0 rounded-xl border-2 font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:!bg-[#6d28d9] px-4 py-3 text-[14px] sm:w-auto sm:rounded-full sm:px-6 sm:py-2.5 sm:text-[15px] md:px-8 md:py-3"
                  style={{
                    borderColor: "rgba(247, 239, 255, 0.5)",
                    backgroundColor: "#a36af6",
                  }}
                >
                  Join the Private List
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
