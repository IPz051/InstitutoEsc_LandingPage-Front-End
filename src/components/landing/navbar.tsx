"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Globe, Lock, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { LandingCopy, LandingLanguage } from "@/components/landing/content";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: ReadonlyArray<NavItem>;
  language: LandingLanguage;
  onLanguageChange: (language: LandingLanguage) => void;
  copy: LandingCopy["nav"];
};

export function Navbar({
  items,
  language,
  onLanguageChange,
  copy,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const platformLoginHref =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="container-shell">
        <div className="glass-panel rounded-full border border-white/70 px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/instituto-esc-logo.png"
                alt="Instituto ESC"
                width={256}
                height={76}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[var(--foreground)]/80 transition hover:text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div
                className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-white/75 p-1 text-sm shadow-sm"
                aria-label={copy.languageSwitcherLabel}
              >
                <button
                  type="button"
                  onClick={() => onLanguageChange("pt")}
                  className={`rounded-full px-3 py-1.5 font-semibold transition ${
                    language === "pt"
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange("en")}
                  className={`rounded-full px-3 py-1.5 font-semibold transition ${
                    language === "en"
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  EN
                </button>
              </div>

              <Link
                href={platformLoginHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--muted)] px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-[rgba(91,110,240,0.12)]"
              >
                <Lock className="h-4 w-4" />
                {copy.studentArea}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--foreground)] lg:hidden"
              aria-label={isOpen ? copy.closeMenuAria : copy.openMenuAria}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 space-y-3 border-t border-[var(--border)] pt-4">
                  <div className="rounded-[22px] bg-[var(--muted)] p-3">
                    <div className="mb-3 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                      <Globe className="h-4 w-4 text-[var(--primary)]" />
                      {copy.languageSwitcherLabel}
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 p-1 text-sm shadow-sm">
                      <button
                        type="button"
                        onClick={() => onLanguageChange("pt")}
                        className={`flex-1 rounded-full px-3 py-2 font-semibold transition ${
                          language === "pt"
                            ? "bg-[var(--primary)] text-white"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        }`}
                      >
                        PT
                      </button>
                      <button
                        type="button"
                        onClick={() => onLanguageChange("en")}
                        className={`flex-1 rounded-full px-3 py-2 font-semibold transition ${
                          language === "en"
                            ? "bg-[var(--primary)] text-white"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-[var(--muted)] px-3 py-2 text-sm text-[var(--muted-foreground)]">
                    <Globe className="h-4 w-4 text-[var(--primary)]" />
                    {language === "pt" ? "Português" : "English"}
                  </div>

                  <nav className="space-y-2">
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm font-medium text-[var(--foreground)]/85"
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 text-[var(--primary)]" />
                      </Link>
                    ))}
                  </nav>

                  <Link
                    href={platformLoginHref}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(46,79,190,0.24)]"
                  >
                    <Lock className="h-4 w-4" />
                    {copy.enterStudentArea}
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
