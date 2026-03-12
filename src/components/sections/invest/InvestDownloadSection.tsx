"use client";

import { useState } from "react";
import Link from "next/link";
import { investDownloadConfig } from "@/config/invest.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";

const PRIMARY = "#a36af6";

const FIELD_ICONS: Record<string, React.ReactNode> = {
  person: <FaUser className="h-4 w-4 shrink-0" />,
  phone: <FaPhone className="h-4 w-4 shrink-0" />,
  email: <FaEnvelope className="h-4 w-4 shrink-0" />,
  budget: <FaBriefcase className="h-4 w-4 shrink-0" />,
};

export function InvestDownloadSection() {
  const { headline, downloadButton, form } = investDownloadConfig;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
  });
  const [budgetOpen, setBudgetOpen] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #E8DFF8 0%, #F5EEFD 50%, #F5EEFD 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="stagger-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
          className="overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 238, 253, 0.95) 0%, rgba(232, 223, 248, 0.9) 100%)",
            border: "1px solid rgba(163, 106, 246, 0.2)",
            boxShadow: "0 4px 24px rgba(163, 106, 246, 0.08)",
          }}
        >
          <div className="flex flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-center md:gap-12 md:p-10 lg:gap-16 lg:p-12">
            {/* Left - Download CTA */}
            <div className="stagger-child flex flex-1 flex-col justify-center">
              <h2 className="text-[22px] font-medium leading-[1.2] tracking-[-2px] text-zinc-900 sm:text-[26px] md:text-[32px] lg:text-[36px]">
                {headline.before}
                <span
                  className="font-serif font-medium italic"
                  style={{ color: PRIMARY }}
                >
                  {headline.highlight}
                </span>
                {headline.after}
              </h2>
              <Link
                href={downloadButton.href}
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:opacity-95 sm:mt-8 sm:px-8 sm:py-4 sm:text-[16px] md:text-[17px]"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY} 0%, #8B5CF6 100%)`,
                  boxShadow: "0 4px 14px rgba(163, 106, 246, 0.4)",
                }}
              >
                {downloadButton.label}
              </Link>
            </div>

            {/* Right - Lead form */}
            <div className="stagger-child w-full md:max-w-[400px] lg:max-w-[420px]">
              <div
                className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                style={{
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div className="space-y-4">
                  {form.fields.map((field) => (
                    <div key={field.name} className="relative">
                      <div
                        className="flex items-center gap-3 rounded-xl border border-zinc-200/90 bg-white px-4 py-3 transition-colors focus-within:border-[#a36af6]/50 focus-within:ring-2 focus-within:ring-[#a36af6]/20"
                        style={{ color: PRIMARY }}
                      >
                        {FIELD_ICONS[field.icon]}
                        {field.type === "select" ? (
                          <div className="relative flex-1">
                            <button
                              type="button"
                              onClick={() =>
                                setBudgetOpen((o) => !o)
                              }
                              className="w-full text-left text-[14px] text-zinc-500 outline-none placeholder:text-zinc-400"
                            >
                              {formData.budget || field.placeholder}
                            </button>
                            <FaChevronDown
                              className={`absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-transform ${
                                budgetOpen ? "rotate-180" : ""
                              }`}
                            />
                            {budgetOpen && (
                              <>
                                <div
                                  className="fixed inset-0 z-[100]"
                                  onClick={() => setBudgetOpen(false)}
                                  aria-hidden
                                />
                                <div
                                  className="absolute left-0 right-0 top-full z-[101] mt-1 max-h-48 overflow-auto rounded-xl border border-zinc-200 bg-white py-2 shadow-lg"
                                  style={{ color: "inherit" }}
                                >
                                  {form.budgetOptions.map((opt) => (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => {
                                        handleChange("budget", opt);
                                        setBudgetOpen(false);
                                      }}
                                      className="w-full px-4 py-2.5 text-left text-[14px] text-zinc-700 transition-colors hover:bg-zinc-50"
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ) : (
                          <input
                            type={field.name === "email" ? "email" : "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={
                              formData[field.name as keyof typeof formData] || ""
                            }
                            onChange={(e) =>
                              handleChange(field.name, e.target.value)
                            }
                            className="flex-1 bg-transparent text-[14px] text-zinc-900 outline-none placeholder:text-zinc-400"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
