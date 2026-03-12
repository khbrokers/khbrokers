"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { investHeroConfig, investDownloadConfig, investStatsConfig } from "@/config/invest.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { BuyersVideoSection } from "@/components/sections/buyers/BuyersVideoSection";
import {
  FaDollarSign,
  FaChartLine,
  FaPercent,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaChevronDown,
  FaHandshake,
  FaTag,
} from "react-icons/fa";

const PRIMARY = "#A363F4";
const VIDEO_PLAYBACK_RATE = 0.5;

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  equity: <FaPercent className="h-5 w-5 sm:h-6 sm:w-6" />,
  price: <FaDollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
  growth: <FaChartLine className="h-5 w-5 sm:h-6 sm:w-6" />,
};

const FIELD_ICONS: Record<string, React.ReactNode> = {
  person: <FaUser className="h-4 w-4 shrink-0" />,
  phone: <FaPhone className="h-4 w-4 shrink-0" />,
  email: <FaEnvelope className="h-4 w-4 shrink-0" />,
  budget: <FaBriefcase className="h-4 w-4 shrink-0" />,
};

const STATS_ICONS: Record<string, React.ReactNode> = {
  dollar: <FaDollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
  handshake: <FaHandshake className="h-5 w-5 sm:h-6 sm:w-6" />,
  tag: <FaTag className="h-5 w-5 sm:h-6 sm:w-6" />,
  chart: <FaChartLine className="h-5 w-5 sm:h-6 sm:w-6" />,
};

export function InvestHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { profitBadge, headline, benefits, socialProof, trustBadgeAvatars } =
    investHeroConfig;
  const { headline: downloadHeadline, downloadButton, form } = investDownloadConfig;
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", budget: "" });
  const [budgetOpen, setBudgetOpen] = useState(false);
  const budgetTriggerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (!budgetOpen || !budgetTriggerRef.current) return;
    const updatePosition = () => {
      if (budgetTriggerRef.current) {
        const rect = budgetTriggerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4,
          left: rect.left,
          width: rect.width,
        });
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [budgetOpen]);

  const handleFormChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = VIDEO_PLAYBACK_RATE;
    }
  }, []);

  return (
    <section className="relative min-h-[110vh] overflow-hidden sm:min-h-[125vh]">
      <video
        ref={videoRef}
        src="/assets/hero/hero_animatedb.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />

      <AnimateOnView
        animation="stagger-slow"
        rootMargin="0px 0px 0px 0px"
        threshold={0.15}
        className="relative mx-auto max-w-6xl px-4 pb-12 pt-[100px] sm:px-6 sm:pb-16 sm:pt-24 md:px-8 md:pb-24 md:pt-[150px]"
      >
        {/* Profit badge */}
        <div className="stagger-child flex justify-center">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#A364F4]/10 bg-[linear-gradient(to_bottom,#d6b6ff_10%,transparent_100%)] px-2 py-1.5 backdrop-blur-sm sm:mb-8 sm:gap-2 sm:px-3 sm:py-2">
            <FaDollarSign className="h-4 w-4 shrink-0 bg-[#A364F4]/70 p-1 md:p-1 rounded-full text-[#D3CAFD] sm:h-4 sm:w-4 md:w-5 md:h-5" />
            <span className="text-[10px] font-medium text-zinc-600 sm:text-[12px] md:text-[15px]">
              {profitBadge}
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="stagger-child mx-auto mt-6 max-w-4xl text-center text-[28px] font-medium leading-[1.15] tracking-[-2px] text-zinc-900 sm:mt-8 sm:text-[36px] sm:tracking-[-3px] md:text-[44px] md:leading-[1.12] lg:text-[52px]">
          {headline.before}
          <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
            {headline.highlight}
          </span>
          {headline.after}
        </h1>

        {/* Three benefits: flex on mobile (icon left, copy right); grid on md+ */}
        <div className="stagger-child mx-auto mt-10 flex max-w-4xl flex-row flex-wrap justify-center gap-4 sm:mt-12 md:mt-14 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.icon}
              className="flex flex-row items-center gap-3 text-left md:flex-col md:items-center md:text-center"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                style={{
                  background: "linear-gradient(to bottom, rgba(234, 217, 255, 0.2), rgba(163, 99, 244, 0.2))",
                  border: "1px solid rgba(163, 99, 244, 0.5)",
                  color: PRIMARY,
                }}
              >
                {BENEFIT_ICONS[benefit.icon]}
              </div>
              <p className="min-w-0 max-w-[120px] shrink text-[12px] font-ragular leading-snug text-zinc-900/60 sm:max-w-none sm:text-[15px] md:text-[16px]">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="stagger-child mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
          <div className="flex -space-x-2 sm:-space-x-2.5">
            {trustBadgeAvatars.map((src, i) => (
              <div
                key={src}
                className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white sm:h-10 sm:w-10 md:h-11 md:w-11"
              >
                <Image
                  src={src}
                  alt={`Investor ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[15px] text-zinc-700 sm:text-left sm:text-[16px] md:text-[17px]">
            {socialProof.text}{" "}
            <span className="font-semibold text-zinc-900">
              {socialProof.highlight}
            </span>
            {socialProof.suffix}
          </p>
        </div>

        {/* Download section - inside hero */}
        <div
          className="stagger-child mt-6 overflow-hidden rounded-xl sm:mt-10 sm:rounded-2xl md:mt-12 md:rounded-3xl mx-auto max-w-5xl"
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(#DFC5FF, #DFC5FF) padding-box, linear-gradient(to bottom, #DFC5FF 0%, transparent 100%) border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div className="bg-white flex flex-col gap-6 p-4 sm:gap-8 sm:p-6 md:flex-row md:items-center md:gap-10 md:p-8 lg:gap-12 lg:p-10">
            <div className="flex flex-col items-center justify-center text-center md:flex-[0_0_40%] md:items-start md:text-left md:min-w-0">
              <h2 className="w-[80%] text-[20px] font-medium leading-[1.2] tracking-[-2px] text-zinc-900 sm:w-auto sm:text-[24px] md:text-[32px] lg:text-[36px]">
                {downloadHeadline.before}
                <span
                  className="font-serif font-medium italic"
                  style={{ color: PRIMARY }}
                >
                  {downloadHeadline.highlight}
                </span>
                {downloadHeadline.after}
              </h2>
              <Link
                href={downloadButton.href}
                className="mt-6 hidden w-fit items-center justify-center rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:mt-8 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:inline-flex md:px-[30px] md:py-[20px] md:text-[18px]"
              >
                {downloadButton.label}
              </Link>
            </div>
            <div className="relative flex flex-col items-center w-full md:flex-[0_0_60%] md:min-w-0">
              <div
                className="rounded-xl bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-6 lg:p-8 w-full max-w-[420px] md:max-w-none"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {form.fields.map((field) => (
                    <div key={field.name} className="relative flex items-center gap-2 p-1 sm:gap-3 sm:p-2 md:gap-3 md:p-2 border border-[#D3B1FF]/50 rounded-full">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors sm:h-10 sm:w-10"
                        style={{
                          backgroundColor: "#F5E6FF",
                          border: "1px solid rgba(163, 99, 244, 0.15)",
                          color: PRIMARY,
                        }}
                      >
                        {FIELD_ICONS[field.icon]}
                      </div>
                      <div
                        className="flex flex-1 items-center rounded-full px-3 py-2 transition-colors focus-within:ring-2 focus-within:ring-[#a36af6]/20 sm:px-4 sm:py-3 md:px-4 md:py-3"
                        style={{
                          backgroundColor: "#F9F0FD",
                          border: "1px solid rgba(163, 99, 244, 0.15)",
                        }}
                      >
                        {field.type === "select" ? (
                          <div ref={budgetTriggerRef} className="relative flex-1 min-w-0">
                            <button
                              type="button"
                              onClick={() => setBudgetOpen((o) => !o)}
                              className="w-full text-left text-[13px] text-zinc-500 outline-none placeholder:text-zinc-400 sm:text-[14px]"
                            >
                              {formData.budget || field.placeholder}
                            </button>
                            <FaChevronDown
                              className={`absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-transform ${
                                budgetOpen ? "rotate-180" : ""
                              }`}
                            />
                            {typeof document !== "undefined" &&
                              budgetOpen &&
                              createPortal(
                                <>
                                  <div
                                    className="fixed inset-0 z-[9998]"
                                    onClick={() => setBudgetOpen(false)}
                                    aria-hidden
                                  />
                                  <div
                                    className="fixed z-[9999] max-h-48 overflow-auto rounded-xl border border-zinc-200 bg-white py-2 shadow-lg"
                                    style={{
                                      top: dropdownPosition.top,
                                      left: dropdownPosition.left,
                                      width: dropdownPosition.width,
                                    }}
                                  >
                                    {form.budgetOptions.map((opt) => (
                                      <button
                                        key={opt}
                                        type="button"
                                        onClick={() => {
                                          handleFormChange("budget", opt);
                                          setBudgetOpen(false);
                                        }}
                                        className="w-full px-4 py-2.5 text-left text-[14px] text-zinc-700 transition-colors hover:bg-zinc-50"
                                      >
                                        {opt}
                                      </button>
                                    ))}
                                  </div>
                                </>,
                                document.body
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
                              handleFormChange(field.name, e.target.value)
                            }
                            className="flex-1 min-w-0 bg-transparent text-[13px] text-zinc-900 outline-none placeholder:text-zinc-400 sm:text-[14px]"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={downloadButton.href}
                className="mt-4 flex w-fit items-center justify-center rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:mt-6 sm:px-5 sm:py-2.5 sm:text-[16px] md:hidden"
              >
                {downloadButton.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats cards - above video */}
        <div className="stagger-child mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
          {investStatsConfig.map((item) => (
            <div
                key={item.icon}
                className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5 md:rounded-[25px] md:p-6"
                style={{
                  boxShadow: "0 2px 12px rgba(163, 106, 246, 0.08)",
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(white, white) padding-box, linear-gradient(to bottom, #DFC5FF, #F1E7FD) border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:h-11 sm:w-11 md:h-12 md:w-12"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(234, 217, 255, 0.7), rgba(163, 99, 244, 0.7))",
                }}
              >
                {STATS_ICONS[item.icon]}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div
                  className="text-[22px] font-semibold leading-none sm:text-[28px] md:text-[32px] lg:text-[36px]"
                  style={{
                    background: "linear-gradient(135deg, #a36af6 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.stat}
                </div>
                <p className="text-[12px] font-medium leading-snug text-zinc-600 sm:text-[14px] md:text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px 0px 0px"
          threshold={0.15}
        >
          <BuyersVideoSection playLabel="Know more" />
        </AnimateOnView>
      </AnimateOnView>
    </section>
  );
}
