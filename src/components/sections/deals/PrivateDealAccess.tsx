"use client";

import { useState } from "react";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function PrivateDealAccess() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const params = new URLSearchParams(window.location.search);
      const referrer = document.referrer || "";
      let source = "direct";
      let medium = "none";
      try {
        const refUrl = new URL(referrer);
        if (/google\./i.test(refUrl.hostname) && !params.get("gclid")) {
          source = "google";
          medium = "organic";
        } else if (refUrl.hostname && !refUrl.hostname.includes("khbrokers")) {
          source = refUrl.hostname;
          medium = "referral";
        }
      } catch {}

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          signup_page: "Deals Private Access - Khbrokers",
          utm_source: params.get("utm_source") || source,
          utm_medium: params.get("utm_medium") || medium,
          utm_campaign: params.get("utm_campaign") || "none",
          utm_content: params.get("utm_content") || "none",
          utm_term: params.get("utm_term") || "none",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        data.alreadyExists
          ? "You're already on the private list!"
          : "You're in! We'll notify you when new deals drop."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="px-4 pb-12 pt-4 sm:pb-16 sm:pt-6 md:pb-20 md:pt-8 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="stagger"
          rootMargin="0px 0px -60px 0px"
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
                <h2 className="stagger-child text-[24px] font-bold leading-tight text-white sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px]">
                  Private Deal Access.
                </h2>
                <p className="stagger-child mt-1.5 font-serif text-[18px] font-medium italic text-white/95 sm:mt-2 sm:text-[22px] md:text-[26px] lg:text-[28px]">
                  Before Anyone Else.
                </p>
                <p className="stagger-child mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/90 sm:mt-4 sm:text-[15px] md:text-[16px] lg:text-[17px] lg:mx-0">
                  Most deals are sold quickly and never reach public marketplaces. Subscribers receive
                  first access when new opportunities go live, along with updates on recent exits and
                  buyer activity.
                </p>
              </div>

              {/* Right: Email + CTA */}
              <div className="stagger-child w-full shrink-0 lg:w-auto lg:min-w-0 lg:max-w-md">
                {status === "success" ? (
                  <div className="rounded-2xl bg-white/20 px-6 py-4 text-center backdrop-blur-sm sm:rounded-full">
                    <p className="text-[15px] font-medium text-white sm:text-[16px]">{message}</p>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={handleSubmit}
                      className="flex w-full flex-col overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg sm:flex-row sm:rounded-full sm:p-1"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        className="min-w-0 flex-1 border-0 bg-white px-4 py-3 text-center text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 disabled:opacity-50 sm:px-5 sm:py-3.5 sm:text-[15px] md:px-6 md:py-4 md:text-[16px]"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full shrink-0 rounded-xl border-2 font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:!bg-[#6d28d9] disabled:opacity-70 px-4 py-3 text-[14px] sm:w-auto sm:rounded-full sm:px-6 sm:py-2.5 sm:text-[15px] md:px-8 md:py-3"
                        style={{
                          borderColor: "rgba(247, 239, 255, 0.5)",
                          backgroundColor: "#a36af6",
                        }}
                      >
                        {status === "loading" ? "Joining..." : "Join the Private List"}
                      </button>
                    </form>
                    {status === "error" && (
                      <p className="mt-2 text-center text-[13px] text-white/90">{message}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
