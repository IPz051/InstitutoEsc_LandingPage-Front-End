import { ImageIcon } from "lucide-react";

import type { LandingCopy } from "@/components/landing/content";

type Leader = {
  name: string;
  role: string;
  description: string;
  placeholder: string;
  badges: ReadonlyArray<string>;
};

type LeadershipSectionProps = {
  copy: LandingCopy["leadership"];
};

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-white shadow-[0_14px_40px_rgba(17,23,47,0.05)]">
      <div className="grid md:grid-cols-[0.9fr_1.2fr]">
        <div className="flex min-h-[190px] items-center justify-center border-b border-dashed border-[rgba(17,23,47,0.18)] bg-[linear-gradient(180deg,rgba(250,250,252,0.96),rgba(245,246,250,0.96))] px-8 py-12 text-center md:min-h-[296px] md:border-r md:border-b-0">
          <div className="space-y-4 text-[var(--muted-foreground)]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(17,23,47,0.12)] bg-white/85">
              <ImageIcon className="h-5 w-5" />
            </div>
            <p className="text-base">{leader.placeholder}</p>
          </div>
        </div>

        <div className="px-6 py-7 sm:px-7 md:px-6 md:py-8 lg:px-7">
          <h3 className="section-title text-[2rem] font-bold tracking-[-0.05em] text-[var(--foreground)]">
            {leader.name}
          </h3>

          <p className="mt-2 text-base font-semibold text-[var(--primary)]">
            {leader.role}
          </p>

          <p className="mt-5 max-w-[31rem] text-[1.05rem] leading-8 text-[var(--muted-foreground)]">
            {leader.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {leader.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-[rgba(91,110,240,0.10)] px-4 py-2 text-sm font-semibold text-[var(--primary)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function LeadershipSection({ copy }: LeadershipSectionProps) {
  return (
    <section id="instituto" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            {copy.eyebrow}
          </p>

          <h2 className="section-title mt-5 text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[4rem]">
            {copy.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {copy.leaders.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
