"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { launchvectorCtaConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { FiUser, FiPhone, FiMail, FiDollarSign, FiChevronDown } from "react-icons/fi";

const BUDGET_OPTIONS = [
  "Select Budget",
  "$25K – $50K",
  "$50K – $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K+",
];

export function LaunchvectorCtaSection() {
  const { heading, description, cta } = launchvectorCtaConfig;
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) {
      setStatus("error");
      setMessage("Email is required");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          phone: phone || undefined,
          budget: budget !== BUDGET_OPTIONS[0] ? budget : undefined,
          signup_page: "LaunchVector CTA - KH Brokers",
          utm_source: params.get("utm_source") || "direct",
          utm_medium: params.get("utm_medium") || "none",
          utm_campaign: params.get("utm_campaign") || "",
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
          ? "You're already on our list! Redirecting..."
          : "You're in! Redirecting..."
      );
      setName("");
      setPhone("");
      setEmail("");
      setBudget(BUDGET_OPTIONS[0]);

      setTimeout(() => router.push("/signup"), 1500);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    user: <FiUser className="h-5 w-5 text-[#a363f4]" />,
    phone: <FiPhone className="h-5 w-5 text-[#a363f4]" />,
    email: <FiMail className="h-5 w-5 text-[#a363f4]" />,
    budget: <FiDollarSign className="h-5 w-5 text-[#a363f4]" />,
  };

  const fieldValues: Record<string, string> = {
    user: name,
    phone: phone,
    email: email,
  };

  const fieldSetters: Record<string, (v: string) => void> = {
    user: setName,
    phone: setPhone,
    email: setEmail,
  };

  return (
    <section id="cta-form" className="relative bg-white px-4 py-12 sm:py-16 md:py-24">
      {/* Top gradient — fades from purple page bg into white */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[377px]"
        style={{
          background:
            "linear-gradient(178deg, rgba(245,238,253,0) 6.4%, rgb(245,238,253) 45.7%)",
          transform: "scaleY(-1)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          {/* Main card */}
          <div className="overflow-hidden rounded-[30px] border-2 border-[#cda6ff] bg-white px-6 py-8 shadow-[0_6px_20px_rgba(0,0,0,0.1)] sm:rounded-[40px] sm:px-[50px] sm:py-[40px]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-[50px]">
              {/* Left — heading + description */}
              <div className="flex flex-col md:max-w-[551px]">
                <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-black sm:text-[40px] sm:tracking-[-3px] md:text-[56px] md:tracking-[-4.08px] lg:text-[68px]">
                  {heading.before}
                  <br className="hidden sm:block" />
                  <span className="font-serif italic text-[#a363f4]">
                    {heading.highlight}
                  </span>
                </h2>
                <p className="mt-6 text-[16px] font-normal leading-[1.1] tracking-[-1.32px] text-black/80 sm:text-[18px] md:mt-auto md:text-[22px]">
                  Everyday you wait is another day someone else acquire
                  the brand you should own - at{" "}
                  <span className="font-medium text-black/50">
                    100% equity, lower multiples and with a team ready on
                    day one
                  </span>
                </p>
              </div>

              {/* Right — form fields */}
              <AnimateOnView
                animation="stagger-slower"
                rootMargin="100px 0px -40px 0px"
                threshold={0.05}
                className="flex w-full flex-col gap-[20px] md:max-w-[488px]"
              >
                {launchvectorCtaConfig.fields.map((field, i) => (
                  <div
                    key={i}
                    className="stagger-child flex items-center gap-[10px] rounded-[50px] border border-[#efe2ff] bg-white p-[10px] shadow-[0_2px_0_0_#e6d2ff]"
                  >
                    <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[35px] border border-[rgba(163,99,244,0.15)] bg-[#f5e6ff] sm:h-[49px] sm:w-[49px]">
                      {iconMap[field.icon]}
                    </div>
                    <div className="relative flex-1">
                      {field.type === "select" ? (
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setBudgetOpen((o) => !o)}
                            className="flex w-full items-center justify-between rounded-[50px] border border-[rgba(163,99,244,0.15)] bg-[#f9f0fd] p-[12px] shadow-[inset_0_0_10px_0_#ebe1fd] sm:p-[15px]"
                          >
                            <span
                              className={`text-[16px] font-medium tracking-[-0.72px] sm:text-[18px] ${
                                budget === BUDGET_OPTIONS[0]
                                  ? "text-black/20"
                                  : "text-black"
                              }`}
                            >
                              {budget}
                            </span>
                            <FiChevronDown
                              className={`h-5 w-5 text-black/30 transition-transform ${budgetOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          {budgetOpen && (
                            <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-[#efe2ff] bg-white shadow-xl">
                              {BUDGET_OPTIONS.slice(1).map((opt) => (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => {
                                    setBudget(opt);
                                    setBudgetOpen(false);
                                  }}
                                  className={`w-full px-4 py-3 text-left text-[15px] font-medium transition-colors hover:bg-[#f5e6ff] sm:text-[16px] ${
                                    budget === opt
                                      ? "bg-[#a363f4] text-white hover:bg-[#a363f4]"
                                      : "text-black/70"
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <input
                          type={field.icon === "email" ? "email" : "text"}
                          placeholder={field.placeholder}
                          value={fieldValues[field.icon] || ""}
                          onChange={(e) =>
                            fieldSetters[field.icon]?.(e.target.value)
                          }
                          className="w-full rounded-[50px] border border-[rgba(163,99,244,0.15)] bg-[#f9f0fd] p-[12px] text-[16px] font-medium tracking-[-0.72px] text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#a363f4]/30 sm:p-[15px] sm:text-[18px]"
                          style={{
                            boxShadow: "inset 0 0 10px 0 #ebe1fd",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}

                {/* Status message */}
                {message && (
                  <p
                    className={`stagger-child text-center text-[14px] font-medium sm:text-[16px] ${
                      status === "error"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="stagger-child relative flex w-full items-center justify-center overflow-hidden rounded-full border-2 border-[#a363f4] px-[30px] py-[20px] text-[16px] font-medium text-white transition-colors hover:brightness-110 disabled:opacity-60 sm:text-[18px]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-[#a363f4]" aria-hidden />
                  <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.5)]" aria-hidden />
                  <span className="relative">
                    {status === "loading" ? "Submitting..." : cta.label}
                  </span>
                </button>
              </AnimateOnView>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
