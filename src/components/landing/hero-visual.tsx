"use client";

import { motion } from "framer-motion";
import { ImageIcon, Layers3, UsersRound } from "lucide-react";

const floatTransition = {
  duration: 4.8,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

type FloatingCardProps = {
  title: string;
  subtitle: string;
  className: string;
  delay?: number;
  icon: React.ReactNode;
};

function FloatingCard({
  title,
  subtitle,
  className,
  delay = 0,
  icon,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      animate={{ y: [-4, 10, -4] }}
      transition={{ ...floatTransition, delay }}
      className={`glass-panel absolute rounded-[24px] px-5 py-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--muted)] text-[var(--primary)]">
          {icon}
        </div>
        <div>
          <p className="text-base font-semibold text-[var(--foreground)]">{title}</p>
          <p className="text-sm text-[var(--muted-foreground)]">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto flex min-h-[320px] w-full max-w-[520px] items-center justify-center lg:min-h-[460px]"
    >
      <div className="absolute inset-x-10 top-10 h-64 rounded-full bg-[radial-gradient(circle,_rgba(91,110,240,0.18),_rgba(91,110,240,0)_70%)] blur-3xl" />

      <div className="relative w-full max-w-[460px] rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,rgba(246,248,255,0.96),rgba(238,242,251,0.82))] p-4 shadow-[0_24px_70px_rgba(46,79,190,0.16)] sm:p-6">
        <div className="rounded-[30px] border border-dashed border-[rgba(46,79,190,0.18)] bg-white/80 px-6 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-10 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--muted)] text-[var(--secondary)]">
            <ImageIcon className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-medium text-[var(--muted-foreground)] sm:text-base">
            Solte uma foto
          </p>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]/80">
            imersao presencial
          </p>
        </div>
      </div>

      <FloatingCard
        title="6 modulos"
        subtitle="Formacao completa"
        delay={0.2}
        icon={<Layers3 className="h-5 w-5" />}
        className="right-0 top-2 w-[170px] sm:w-[190px]"
      />

      <FloatingCard
        title="Comunidade ESC"
        subtitle="advogados ativos"
        delay={0.4}
        icon={
          <div className="flex items-center gap-1 text-[var(--primary)]">
            <span className="h-4 w-4 rounded-full bg-current opacity-70" />
            <span className="h-4 w-4 rounded-full bg-current opacity-85" />
            <span className="h-4 w-4 rounded-full bg-current" />
          </div>
        }
        className="bottom-5 left-0 w-[210px] sm:w-[230px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        className="absolute bottom-0 right-10 flex items-center gap-3 rounded-full border border-white/80 bg-white/88 px-4 py-3 shadow-[0_18px_40px_rgba(46,79,190,0.12)]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--secondary)]">
          <UsersRound className="h-5 w-5" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-[var(--foreground)]">+1.000 alunos</p>
          <p className="text-xs text-[var(--muted-foreground)]">na comunidade premium</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
