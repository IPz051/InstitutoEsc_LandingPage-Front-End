"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import type { LandingCopy } from "@/components/landing/content";
import {
  ProfessionalCard,
  type ProfessionalCardData,
} from "@/components/landing/professional-card";

type ProfessionalsSectionProps = {
  copy: LandingCopy["professionals"];
};

export function ProfessionalsSection({ copy }: ProfessionalsSectionProps) {
  const itemsPerPage = 2;
  const professionals: ReadonlyArray<ProfessionalCardData> = copy.items;
  const totalPages = Math.ceil(professionals.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * itemsPerPage;
  const visibleProfessionals = professionals.slice(start, start + itemsPerPage);

  function handlePrevious() {
    setCurrentPage((current) =>
      current === 0 ? totalPages - 1 : current - 1,
    );
  }

  function handleNext() {
    setCurrentPage((current) =>
      current === totalPages - 1 ? 0 : current + 1,
    );
  }

  return (
    <section id="professores" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            {copy.eyebrow}
          </p>

          <h2 className="section-title mt-5 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[4rem]">
            {copy.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label={copy.previousAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`${copy.paginationAriaPrefix} ${index + 1} ${copy.paginationAriaSuffix}`.trim()}
                className={`h-2.5 rounded-full transition ${
                  index === currentPage
                    ? "w-8 bg-[var(--primary)]"
                    : "w-2.5 bg-[rgba(17,23,47,0.16)] hover:bg-[rgba(17,23,47,0.28)]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label={copy.nextAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-7">
          {visibleProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.name}
              professional={professional}
              imageFallbackLabel={copy.imageFallbackLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
