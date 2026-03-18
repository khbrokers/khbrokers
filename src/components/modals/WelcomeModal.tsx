"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRedo, FaStar, FaCheckCircle } from "react-icons/fa";
import { welcomeModalConfig } from "@/config/welcome-modal.config";

const WELCOME_CHOICE_KEY = "welcomeChoice";

const BUYERS_THEME = {
  modalBg: "linear-gradient(to bottom, #E2DDFF 0%, #FFFFFF 100%)",
  pillBg: "#a36af6",
  pillBorder: "#f7efff80",
  iconColor: "#A363F4",
  iconBg: "#EBE3FF",
  logoBorder: "#e8e0f0",
};

const SELLERS_THEME = {
  modalBg: "linear-gradient(to bottom, #D1F0E0 0%, #FFFFFF 100%)",
  pillBg: "#00965F",
  pillBorder: "rgba(0,150,95,0.5)",
  iconColor: "#00965F",
  iconBg: "#C8F0DC",
  logoBorder: "#b8e6d0",
};

const ICONS = {
  refresh: FaRedo,
  star: FaStar,
  check: FaCheckCircle,
};

const MODAL_PATHS = ["/", "/buyers", "/sellers"];

export function WelcomeModal() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    // Already chose this session
    const choice = sessionStorage.getItem(WELCOME_CHOICE_KEY);
    if (choice) return;

    // Check if logged-in user already has a saved type
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.user_type) {
          // User already chose before — persist in session and skip modal
          sessionStorage.setItem(WELCOME_CHOICE_KEY, data.user.user_type);
          return;
        }
        // Show modal on allowed paths
        const showOnPath =
          !pathname ||
          MODAL_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
        if (showOnPath) setIsOpen(true);
      })
      .catch(() => {
        // Not logged in — show modal for non-logged-in users on allowed paths
        const showOnPath =
          !pathname ||
          MODAL_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
        if (showOnPath) setIsOpen(true);
      });
  }, [mounted, pathname]);

  const [activeOption, setActiveOption] = useState<"buyers" | "sellers">("buyers");
  const [isNavigating, setIsNavigating] = useState(false);

  const handleChoice = (path: "/buyers" | "/sellers") => {
    if (isNavigating) return;
    const option = path === "/buyers" ? "buyers" : "sellers";
    const userType = path === "/buyers" ? "buyer" : "seller";
    setActiveOption(option);
    setIsNavigating(true);
    sessionStorage.setItem(WELCOME_CHOICE_KEY, option);

    // Save to profile if logged in (fire and forget)
    fetch("/api/auth/user-type", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_type: userType }),
    }).catch(() => {});

    setTimeout(() => {
      setIsOpen(false);
      router.push(path);
    }, 350);
  };

  if (!mounted || !isOpen) return null;

  const theme = activeOption === "sellers" ? SELLERS_THEME : BUYERS_THEME;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/80 p-4">
      <div
        className="relative w-[80%] overflow-hidden rounded-2xl p-6 shadow-xl transition-colors duration-300 sm:p-8 md:w-[50%] md:p-10 lg:w-[50%]"
        style={{ background: theme.modalBg }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-heading"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border transition-colors duration-300"
            style={{ borderColor: theme.logoBorder }}
          >
            <Image
              src={activeOption === "sellers" ? "/assets/brand_assets/logo_icon_sellers.png" : "/assets/brand_assets/logo_icon.png"}
              alt=""
              width={60}
              height={60}
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        <h1
          id="welcome-heading"
          className="mt-4 text-center text-[24px] font-semibold tracking-tight text-zinc-900 sm:text-[28px]"
        >
          {welcomeModalConfig.heading}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-[14px] leading-relaxed text-zinc-700 sm:text-[15px]">
          {welcomeModalConfig.description}
        </p>

        {/* Value props */}
        <div className="mt-6 flex items-stretch justify-center gap-6 py-6 sm:gap-8">
          {welcomeModalConfig.valueProps.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div
                key={item.label}
                className="flex flex-1 flex-col items-center gap-2 text-center border-r border-zinc-200/80 last:border-r-0"
              >
                {Icon && (
                  <Icon
                    className="h-3 w-3 shrink-0 rounded-[10px] p-2 sm:h-4 sm:w-4 md:h-10 md:w-10 md:p-3"
                    style={{ color: theme.iconColor, backgroundColor: theme.iconBg }}
                  />
                )}
                <span className="text-[13px] font-medium text-zinc-900/60 sm:text-[14px] md:text-[16px]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTAs - switch with sliding pill */}
        <div className="relative mt-6 flex rounded-full border border-zinc-200/80 bg-white p-2 md:p-3">
          {/* Sliding pill indicator - buyers: purple, sellers: green */}
          <div
            className="absolute top-2 bottom-2 w-[calc(50%-12px)] rounded-full border-2 shadow-[inset_0_4px_14px_white] transition-all duration-300 ease-out md:top-3 md:bottom-3"
            style={{
              left: activeOption === "buyers" ? 12 : "calc(50% + 2px)",
              backgroundColor: theme.pillBg,
              borderColor: theme.pillBorder,
            }}
          />
          <button
            type="button"
            onClick={() => handleChoice("/buyers")}
            disabled={isNavigating}
            className="relative z-10 flex flex-1 cursor-pointer items-center justify-center rounded-full px-6 py-4 text-[15px] font-semibold transition-colors disabled:cursor-wait"
            style={{
              color: activeOption === "buyers" ? "white" : "rgb(39,39,42)",
              textShadow: activeOption === "buyers" ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {welcomeModalConfig.buyerCta}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("/sellers")}
            disabled={isNavigating}
            className="relative z-10 flex flex-1 cursor-pointer items-center justify-center rounded-full px-6 py-4 text-[15px] font-semibold transition-colors disabled:cursor-wait"
            style={{
              color: activeOption === "sellers" ? "white" : "rgb(39,39,42)",
              textShadow: activeOption === "sellers" ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {welcomeModalConfig.sellerCta}
          </button>
        </div>
      </div>
    </div>
  );
}
