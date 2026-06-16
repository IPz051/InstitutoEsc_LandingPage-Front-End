import {
  BookOpenText,
  LayoutGrid,
  MonitorPlay,
  ShieldCheck,
  Stars,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

import type { LandingCopy } from "@/components/landing/content";

type EcosystemCard = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
  className?: string;
};

const cardIcons = [
  LayoutGrid,
  LayoutGrid,
  UsersRound,
  MonitorPlay,
  Stars,
  ShieldCheck,
  BookOpenText,
] as const;

type EcosystemSectionProps = {
  copy: LandingCopy["ecosystem"];
};

function FeaturedCard({ title, description }: Pick<EcosystemCard, "title" | "description">) {
  return (
    <article className="flex min-h-[220px] rounded-[24px] bg-[linear-gradient(135deg,#3657cc_0%,#4d63df_100%)] p-8 text-white shadow-[0_20px_50px_rgba(46,79,190,0.18)] md:min-h-[336px] md:p-10">
      <div className="flex flex-1 flex-col justify-center">
        <Image
          src="/instituto-esc-logo.png"
          alt="Instituto ESC"
          width={286}
          height={84}
          className="h-auto w-[210px] brightness-0 invert sm:w-[250px]"
        />

        <h3 className="section-title mt-7 text-[1.85rem] font-semibold tracking-[-0.04em] md:text-[2rem]">
          {title}
        </h3>

        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/86 md:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}

function DefaultCard({ title, description, icon: Icon }: EcosystemCard) {
  return (
    <article className="min-h-[160px] rounded-[22px] border border-[rgba(46,79,190,0.10)] bg-white px-6 py-5 shadow-[0_10px_28px_rgba(17,23,47,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(17,23,47,0.08)] md:min-h-[172px] md:px-7 md:py-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(91,110,240,0.09)] text-[var(--primary)]">
        <Icon className="h-[18px] w-[18px]" />
      </div>

      <h3 className="section-title mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-[1.55rem]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)] md:text-[15px]">
        {description}
      </p>
    </article>
  );
}

export function EcosystemSection({ copy }: EcosystemSectionProps) {
  const ecosystemCards: EcosystemCard[] = copy.cards.map((card, index) => ({
    ...card,
    icon: cardIcons[index],
  }));

  return (
    <section id="estrutura" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
            {copy.eyebrow}
          </p>

          <h2 className="section-title mt-4 text-[2.3rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] whitespace-pre-line sm:text-[3.15rem]">
            {copy.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {ecosystemCards.map((card) =>
            card.featured ? (
              <div key={card.title} className={card.className}>
                <FeaturedCard title={card.title} description={card.description} />
              </div>
            ) : (
              <DefaultCard key={card.title} {...card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
