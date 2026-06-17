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
    <article className="flex h-full min-h-[220px] rounded-[24px] bg-[linear-gradient(145deg,#3150c4_0%,#3d58c8_55%,#4764db_100%)] p-8 text-white shadow-[0_24px_56px_rgba(46,79,190,0.16)] md:min-h-[318px] md:p-10">
      <div className="flex flex-1 flex-col">
        <Image
          src="/instituto-esc-logo.png"
          alt="Instituto ESC"
          width={286}
          height={84}
          className="h-auto w-[190px] brightness-0 invert sm:w-[220px]"
        />

        <div className="mt-8">
          <h3 className="section-title text-[1.85rem] font-semibold tracking-[-0.04em] md:text-[2rem]">
            {title}
          </h3>

          <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/86 md:text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function DefaultCard({ title, description, icon: Icon }: EcosystemCard) {
  const isPronoiaCard = title === "Metis / Pronoia";
  const isAmsCard = title === "AMS Advocacia" || title === "AMS Law Firm";

  return (
    <article className="min-h-[146px] rounded-[20px] border border-[rgba(46,79,190,0.08)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(17,23,47,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(17,23,47,0.08)] md:min-h-[152px]">
      <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(91,110,240,0.08)] text-[var(--primary)]">
        {isPronoiaCard ? (
          <Image
            src="/pronoia-logo.png"
            alt="Pronoia"
            width={22}
            height={22}
            className="h-auto w-[22px]"
          />
        ) : isAmsCard ? (
          <Image
            src="/ams-logo.png"
            alt="AMS Advocacia"
            width={26}
            height={26}
            className="h-auto w-[26px]"
          />
        ) : (
          <Icon className="h-[16px] w-[16px]" />
        )}
      </div>

      <h3 className="section-title mt-5 text-[1.45rem] font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-[1.52rem]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)] md:text-[14px]">
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

        <div className="mx-auto mt-14 grid max-w-[1060px] gap-4 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.45fr)] lg:items-stretch lg:gap-5">
          <div className="h-full">
            {ecosystemCards
              .filter((card) => card.featured)
              .map((card) => (
                <FeaturedCard key={card.title} title={card.title} description={card.description} />
              ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {ecosystemCards
              .filter((card) => !card.featured)
              .map((card) => (
                <DefaultCard key={card.title} {...card} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
