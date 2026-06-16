"use client";

import { ArrowRight, CircleDot } from "lucide-react";
import { useMemo, useState } from "react";

import type { LandingCopy } from "@/components/landing/content";

type PostgraduateSectionProps = {
  copy: LandingCopy["postgraduate"];
};

export function PostgraduateSection({ copy }: PostgraduateSectionProps) {
  const [activeModuleId, setActiveModuleId] = useState<string>(copy.modules[0].id);

  const activeModule = useMemo(
    () => copy.modules.find((item) => item.id === activeModuleId) ?? copy.modules[0],
    [activeModuleId, copy.modules],
  );

  return (
    <section id="formacao" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[670px]">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              {copy.eyebrow}
            </p>

            <h2 className="section-title mt-4 text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4rem]">
              {copy.title}
            </h2>

            <p className="mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              {copy.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {copy.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[92px] min-w-[92px] flex-col items-center justify-center rounded-[18px] border border-[rgba(17,23,47,0.08)] bg-white px-4 py-4 text-center shadow-[0_10px_24px_rgba(17,23,47,0.04)] sm:min-h-[104px] sm:min-w-[108px]"
              >
                <span className="section-title text-[2rem] font-bold leading-none text-[var(--primary)]">
                  {stat.value}
                </span>
                <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-[rgba(17,23,47,0.08)] bg-white p-3 shadow-[0_18px_48px_rgba(17,23,47,0.08)] sm:p-4 lg:p-5">
          <div className="grid gap-4 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="rounded-[24px] bg-[#fbfbfd] p-3 sm:p-4">
              <div className="space-y-2">
                {copy.modules.map((module) => {
                  const isActive = module.id === activeModule.id;

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setActiveModuleId(module.id)}
                      className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-[#eef2ff] shadow-[inset_0_0_0_1px_rgba(91,110,240,0.10)]"
                          : "bg-transparent hover:bg-[#f4f6fb]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--primary)] text-sm font-bold text-white">
                          {module.id}
                        </span>
                        <span className="section-title text-base font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                          {module.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {isActive ? (
                          <ArrowRight className="h-4 w-4 text-[var(--primary)]" />
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[24px] bg-[#fcfcfe] px-5 py-5 sm:px-6 sm:py-6 lg:px-7">
              <div className="inline-flex rounded-full bg-[var(--primary)] px-3 py-1.5 text-xs font-bold text-white">
                {copy.modulePrefix} {activeModule.id}
              </div>

              <h3 className="section-title mt-4 text-[2.2rem] font-bold tracking-[-0.05em] text-[var(--foreground)]">
                {activeModule.name}
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[var(--muted-foreground)]">
                {activeModule.description}
              </p>

              <div className="mt-6 border-t border-[rgba(17,23,47,0.08)]">
                {activeModule.lessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="flex items-center justify-between gap-4 border-b border-[rgba(17,23,47,0.08)] py-4"
                  >
                    <div className="flex items-center gap-3">
                      <CircleDot className="h-4 w-4 text-[var(--primary)]" />
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(46,79,190,0.20)] transition hover:bg-[#2845a8]"
              >
                {copy.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
