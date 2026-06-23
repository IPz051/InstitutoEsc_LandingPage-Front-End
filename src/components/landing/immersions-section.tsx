 "use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Info,
  MapPin,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { LandingCopy } from "@/components/landing/content";

type Immersion = {
  number: string;
  title: string;
  description: string;
  details: string;
  city: string;
  date: string;
  duration: string;
  seats: string;
  status: "open" | "soon";
  infoHref?: string;
};

type ImmersionsSectionProps = {
  copy: LandingCopy["immersions"];
};

function StatusBadge({
  status,
  copy,
}: {
  status: Immersion["status"];
  copy: LandingCopy["immersions"];
}) {
  if (status === "open") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f6ef] px-3 py-1.5 text-[11px] font-bold text-[#1e9d6f]">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {copy.openStatus}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eceef4] px-3 py-1.5 text-[11px] font-bold text-[#7c879f]">
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {copy.soonStatus}
    </span>
  );
}

function MetaItem({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-[var(--muted-foreground)]">
      <Icon className="h-3.5 w-3.5 text-[var(--primary)]" />
      <span>{text}</span>
    </div>
  );
}

function ImmersionCard({
  immersion,
  onOpenInfo,
  copy,
}: {
  immersion: Immersion;
  onOpenInfo: (immersion: Immersion) => void;
  copy: LandingCopy["immersions"];
}) {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[rgba(17,23,47,0.08)] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(17,23,47,0.04)] sm:px-6 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <p className="section-title text-[2rem] font-extrabold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.3px_rgba(91,110,240,0.9)]">
          {immersion.number}
        </p>
        <StatusBadge status={immersion.status} copy={copy} />
      </div>

      <h3 className="section-title mt-4 max-w-[17rem] text-[1.8rem] font-bold leading-[1] tracking-[-0.05em] text-[var(--foreground)]">
        {immersion.title}
      </h3>

      <p className="mt-4 min-h-16 text-[15px] leading-6 text-[var(--muted-foreground)]">
        {immersion.description}
      </p>

      <div className="mt-4 border-t border-[rgba(17,23,47,0.08)] pt-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <MetaItem icon={MapPin} text={immersion.city} />
          <MetaItem icon={CalendarDays} text={immersion.date} />
          <MetaItem icon={Clock3} text={immersion.duration} />
          <MetaItem icon={Users} text={immersion.seats} />
        </div>
      </div>

      <div className="mt-auto border-t border-[rgba(17,23,47,0.08)] pt-5">
        <div className="flex flex-col gap-3">
          {immersion.infoHref ? (
            <Link
              href={immersion.infoHref}
              aria-label={`${copy.infoAriaPrefix} ${immersion.title}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2E4FBE33] px-5 py-3.5 text-sm font-semibold text-[var(--primary)] shadow-none transition hover:bg-[#2E4FBE40]"
            >
              <Info className="h-4 w-4" />
              {copy.infoButtonLabel}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onOpenInfo(immersion)}
              aria-label={`${copy.infoAriaPrefix} ${immersion.title}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2E4FBE33] px-5 py-3.5 text-sm font-semibold text-[var(--primary)] shadow-none transition hover:bg-[#2E4FBE40]"
            >
              <Info className="h-4 w-4" />
              {copy.infoButtonLabel}
            </button>
          )}

          <Link
            href="/cadastro"
            className="inline-flex min-w-0 w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold !text-white shadow-[0_16px_34px_rgba(46,79,190,0.20)] transition hover:bg-[#2845a8] hover:!text-white visited:!text-white"
          >
            {copy.participateCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ImmersionsSection({ copy }: ImmersionsSectionProps) {
  const [selectedImmersion, setSelectedImmersion] = useState<Immersion | null>(
    null,
  );

  return (
    <>
      <section id="cursos" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              {copy.eyebrow}
            </p>

            <h2 className="section-title mt-4 text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.15rem] lg:text-[3.75rem]">
              {copy.title}
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              {copy.description}
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {copy.items.map((immersion) => (
              <ImmersionCard
                key={immersion.number}
                immersion={immersion}
                onOpenInfo={setSelectedImmersion}
                copy={copy}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImmersion ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(11,16,32,0.62)] p-4">
          <div className="relative w-full max-w-[640px] rounded-[28px] bg-white p-6 shadow-[0_28px_80px_rgba(11,16,32,0.28)] sm:p-7">
            <button
              type="button"
              onClick={() => setSelectedImmersion(null)}
              aria-label={copy.closeModalAria}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,23,47,0.08)] text-[var(--muted-foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-12">
              <div className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1.5 text-xs font-bold text-[var(--primary)]">
                {copy.modalPrefix} {selectedImmersion.number}
              </div>

              <h3 className="section-title mt-4 text-[2rem] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-[2.4rem]">
                {selectedImmersion.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[var(--muted-foreground)] sm:text-base">
                {selectedImmersion.details}
              </p>

              <div className="mt-6 grid gap-3 rounded-[22px] bg-[#f7f8fc] p-4 sm:grid-cols-2">
                <MetaItem icon={MapPin} text={selectedImmersion.city} />
                <MetaItem icon={CalendarDays} text={selectedImmersion.date} />
                <MetaItem icon={Clock3} text={selectedImmersion.duration} />
                <MetaItem icon={Users} text={selectedImmersion.seats} />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setSelectedImmersion(null)}
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[#f7f8fc]"
                >
                  {copy.closeButton}
                </button>

                <Link
                  href="/cadastro"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(46,79,190,0.20)] transition hover:bg-[#2845a8]"
                >
                  {copy.participateCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
