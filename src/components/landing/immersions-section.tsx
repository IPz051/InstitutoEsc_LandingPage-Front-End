import { ArrowRight, CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import Link from "next/link";

type Immersion = {
  number: string;
  title: string;
  description: string;
  city: string;
  date: string;
  duration: string;
  seats: string;
  status: "open" | "soon";
};

const immersions: Immersion[] = [
  {
    number: "01",
    title: "Acidente de Trabalho",
    description:
      "Reconhecimento, nexo causal e teses de beneficios acidentarios na pratica.",
    city: "Florianopolis - SC",
    date: "Mar 2026",
    duration: "12 horas",
    seats: "40 vagas",
    status: "open",
  },
  {
    number: "02",
    title: "Imersao em Teses Revisionais",
    description:
      "Mapeamento e construcao das teses revisionais mais relevantes do momento.",
    city: "Florianopolis - SC",
    date: "Mai 2026",
    duration: "16 horas",
    seats: "35 vagas",
    status: "open",
  },
  {
    number: "03",
    title: "Imersao em Processo Judicial Previdenciario",
    description:
      "Da peticao inicial a sentenca: estrategia processual do inicio ao fim.",
    city: "Curitiba - PR",
    date: "Jul 2026",
    duration: "16 horas",
    seats: "35 vagas",
    status: "soon",
  },
  {
    number: "04",
    title: "Imersao Pratica em Recurso Extraordinario",
    description:
      "Repercussao geral, prequestionamento e a tecnica recursal no STF.",
    city: "Sao Paulo - SP",
    date: "Set 2026",
    duration: "12 horas",
    seats: "30 vagas",
    status: "soon",
  },
  {
    number: "05",
    title: "Imersao em Mandado de Seguranca",
    description:
      "Cabimento, liminar e uso estrategico do MS na seara previdenciaria.",
    city: "Florianopolis - SC",
    date: "Nov 2026",
    duration: "12 horas",
    seats: "30 vagas",
    status: "soon",
  },
];

function StatusBadge({ status }: { status: Immersion["status"] }) {
  if (status === "open") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f6ef] px-3 py-1.5 text-[11px] font-bold text-[#1e9d6f]">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        Inscricoes abertas
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eceef4] px-3 py-1.5 text-[11px] font-bold text-[#7c879f]">
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      Em breve
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

function ImmersionCard({ immersion }: { immersion: Immersion }) {
  return (
    <article className="rounded-[22px] border border-[rgba(17,23,47,0.08)] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(17,23,47,0.04)] sm:px-6 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <p className="section-title text-[2rem] font-extrabold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.3px_rgba(91,110,240,0.9)]">
          {immersion.number}
        </p>
        <StatusBadge status={immersion.status} />
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

      <div className="mt-5 border-t border-[rgba(17,23,47,0.08)] pt-5">
        <Link
          href="/cadastro"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(46,79,190,0.20)] transition hover:bg-[#2845a8]"
        >
          Quero participar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function ImmersionsSection() {
  return (
    <section id="cursos" className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            Cursos Presenciais
          </p>

          <h2 className="section-title mt-4 text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.15rem] lg:text-[3.75rem]">
            Imersoes tecnicas, ao vivo
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Encontros presenciais conduzidos pelos especialistas do Instituto.
            Vagas limitadas, networking real e estudo de casos complexos.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {immersions.map((immersion) => (
            <ImmersionCard key={immersion.number} immersion={immersion} />
          ))}
        </div>
      </div>
    </section>
  );
}
