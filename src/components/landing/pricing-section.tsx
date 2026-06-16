import { Check, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";

import type { LandingCopy } from "@/components/landing/content";

type Plan = {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  badge?: string;
  features: ReadonlyArray<string>;
};

type PricingSectionProps = {
  copy: LandingCopy["pricing"];
};

function PlanCard({
  plan,
  copy,
}: {
  plan: Plan;
  copy: LandingCopy["pricing"];
}) {
  return (
    <article
      className={`relative rounded-[24px] border bg-white px-5 py-5 shadow-[0_12px_30px_rgba(17,23,47,0.04)] sm:px-6 sm:py-6 ${
        plan.highlighted
          ? "border-[var(--primary)] shadow-[0_18px_44px_rgba(46,79,190,0.12)]"
          : "border-[rgba(17,23,47,0.08)]"
      }`}
    >
      {plan.badge ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(46,79,190,0.18)]">
          {plan.badge}
        </div>
      ) : null}

      <h3 className="section-title text-[1.55rem] font-bold tracking-[-0.05em] text-[var(--foreground)]">
        {plan.name}
      </h3>

      <p className="mt-2 min-h-10 text-[13px] leading-5 text-[var(--muted-foreground)]">
        {plan.description}
      </p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className="text-base font-semibold text-[var(--muted-foreground)]">
          {copy.currencySymbol}
        </span>
        <span className="section-title text-[3rem] font-extrabold leading-none tracking-[-0.06em] text-[var(--foreground)]">
          {plan.price}
        </span>
        <span className="mb-1 text-sm font-semibold text-[var(--muted-foreground)]">
          {copy.priceSuffix}
        </span>
      </div>

      <div className="mt-5 border-t border-[rgba(17,23,47,0.08)] pt-5">
        <Link
          href="/cadastro"
          className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
            plan.highlighted
              ? "bg-[var(--primary)] text-white shadow-[0_14px_30px_rgba(46,79,190,0.18)] hover:bg-[#2845a8]"
              : "border border-[rgba(17,23,47,0.10)] bg-[#fafbfe] text-[var(--foreground)]/85 hover:bg-[#f2f4fb]"
          }`}
        >
          {copy.subscribeCta}
        </Link>
      </div>

      <ul className="mt-5 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-[12px] leading-5 text-[var(--muted-foreground)]"
          >
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--primary)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingSection({ copy }: PricingSectionProps) {
  return (
    <section id="planos" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            {copy.eyebrow}
          </p>

          <h2 className="section-title mt-4 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] whitespace-pre-line sm:text-[3.2rem] lg:text-[3.95rem]">
            {copy.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-4 md:grid-cols-3 md:gap-5">
          {copy.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} copy={copy} />
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-[430px] rounded-[18px] bg-[#edf1fb] px-5 py-4 text-left shadow-[0_10px_26px_rgba(17,23,47,0.04)]">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[var(--primary)]">
              <Lock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {copy.lifetimePriceLockTitle}
              </p>
              <p className="mt-1 text-[12px] leading-5 text-[var(--muted-foreground)]">
                {copy.lifetimePriceLockDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[rgba(46,79,190,0.05)]"
          >
            {copy.compareBenefitsCta}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
