"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import type { LandingCopy } from "@/components/landing/content";
import { StatsGrid } from "@/components/landing/stats-grid";

type HeroSectionProps = {
  copy: LandingCopy["hero"];
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat right-[-10%] scale-90"
          style={{ backgroundImage: "url('/BG.png')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Gradient.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,247,251,0.98)_0%,rgba(246,247,251,0.94)_24%,rgba(246,247,251,0.76)_42%,rgba(246,247,251,0.38)_62%,rgba(246,247,251,0.10)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(246,247,251,0),rgba(246,247,251,0.88)_72%,rgba(246,247,251,1)_100%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0))]" />

      <div className="container-shell relative z-10">
        <div className="pb-18">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[650px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,79,190,0.12)] bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-[0_10px_30px_rgba(46,79,190,0.08)] backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
              {copy.badge}
            </div>

            <h1 className="section-title mt-8 text-[2.9rem] leading-[0.96] font-extrabold tracking-[-0.06em] text-[var(--foreground)] whitespace-pre-line [text-shadow:0_8px_30px_rgba(255,255,255,0.55)] sm:text-[4.2rem] lg:text-[5.7rem]">
              {copy.title}
              <span className="gradient-text block">{copy.highlight}</span>
            </h1>

            <p className="mt-7 max-w-[40rem] text-lg leading-8 text-[rgba(48,59,105,0.92)] [text-shadow:0_4px_20px_rgba(255,255,255,0.55)] sm:text-xl">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-base font-semibold !text-white shadow-[0_22px_48px_rgba(46,79,190,0.28)] transition hover:bg-[#2845a8] hover:!text-white visited:!text-white"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#formacao"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/88 px-7 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[rgba(46,79,190,0.18)] hover:text-[var(--primary)]"
              >
                <Play className="h-4 w-4 fill-current" />
                {copy.secondaryCta}
              </Link>
            </div>

            <div className="mt-12">
              <StatsGrid items={copy.stats} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
