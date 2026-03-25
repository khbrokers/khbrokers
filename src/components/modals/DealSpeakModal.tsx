"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { CalInlineEmbed } from "@/components/ui/CalInlineEmbed";

const DEFAULT_HEADLINE = "Speak with us";
 
export function DealSpeakModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [headline, setHeadline] = useState(DEFAULT_HEADLINE);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ headline?: string }>) => {
      setHeadline(e.detail?.headline ?? DEFAULT_HEADLINE);
      setIsOpen(true);
    };
    window.addEventListener("open-deal-speak-modal", handleOpen as EventListener);
    return () => window.removeEventListener("open-deal-speak-modal", handleOpen as EventListener);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-zinc-900/60 p-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deal-speak-heading"
    >
      <div
        className="relative flex max-h-[90vh] w-[90%] flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:w-[70%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-200/80 px-6 py-4">
       
        <h1 id="deal-speak-heading" className="stagger-child text-center text-[16px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[16px] sm:tracking-[-1px] md:text-[18px] md:tracking-[-1px] lg:text-[18px]">
          {headline}<br/>
        
          </h1>
           <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            aria-label="Close"
          >
            <FaTimes className="h-3 w-3 cursor-pointer" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto p-6">
          <CalInlineEmbed
            calLink="khbrokers/brand-reveal"
            namespace="brand-reveal"
            primaryColor="#ebdefc"
            height={580}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
