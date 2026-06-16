"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import { HeroVisual } from "@/components/landing/hero-visual";
import { StatsGrid } from "@/components/landing/stats-grid";

const stats = [
  { value: "+1.000", label: "processos conduzidos com metodo e escala." },
  { value: "+10", label: "especialistas compartilhando experiencia real." },
  { value: "100%", label: "foco previdenciario em toda a formacao." },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0))]" />
      <div className="absolute -left-16 top-24 h-52 w-52 rounded-full bg-[rgba(91,110,240,0.10)] blur-3xl" />
      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-[rgba(46,79,190,0.10)] blur-3xl" />

      <div className="container-shell relative">
        <div className="grid items-center gap-14 pb-18 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[650px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,79,190,0.12)] bg-white/85 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-[0_10px_30px_rgba(46,79,190,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
              Formacao premium para advogados previdenciaristas
            </div>

            <h1 className="section-title mt-8 text-[2.9rem] leading-[0.96] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[4.2rem] lg:text-[5.7rem]">
              Lideranca,
              <br />
              autoridade
              <br />
              e resultados.
              <br />
              <span className="gradient-text">Sempre juntos.</span>
            </h1>

            <p className="mt-7 max-w-[40rem] text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              O Instituto ESC reune formacao, comunidade e metodo para
              advogados que querem construir uma operacao previdenciaria
              escalavel, lucrativa e posicionada como referencia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-base font-semibold text-white shadow-[0_22px_48px_rgba(46,79,190,0.28)] transition hover:bg-[#2845a8]"
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#formacao"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/88 px-7 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[rgba(46,79,190,0.18)] hover:text-[var(--primary)]"
              >
                <Play className="h-4 w-4 fill-current" />
                Ver a formacao completa
              </Link>
            </div>

            <div className="mt-12">
              <StatsGrid items={stats} />
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
