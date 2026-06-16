import { ProfessionalCard, type ProfessionalCardData } from "@/components/landing/professional-card";

const professionals: ProfessionalCardData[] = [
  {
    name: "Professor 01",
    role: "Especialista · Estrategia e Operacao",
    description:
      "Conduz os encontros com foco em metodo, clareza e aplicacao real. Traz visao de operacao para estruturar uma rotina escalavel no escritorio previdenciario.",
    highlights: ["Estrategia", "Operacao", "Metodo"],
  },
  {
    name: "Professor 02",
    role: "Especialista · Tecnica e Pratica",
    description:
      "Responsavel por aprofundar o raciocinio juridico e a pratica diaria. Conecta os fundamentos com casos reais e padroes de decisao para elevar a confianca tecnica.",
    highlights: ["Teses", "Processo", "Casos complexos"],
  },
  {
    name: "Professor 03",
    role: "Especialista · Crescimento e Autoridade",
    description:
      "Trabalha posicionamento, comunicacao e experiencia do cliente. Mostra como transformar consistencia em autoridade, sem perder a excelencia tecnica.",
    highlights: ["Posicionamento", "Autoridade", "Conversao"],
  },
];

export function ProfessionalsSection() {
  return (
    <section className="bg-[#f5f6fa] py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            Professores
          </p>

          <h2 className="section-title mt-5 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[4rem]">
            Quem vai conduzir as aulas
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Tres especialistas com atuacao pratica para acelerar sua evolucao,
            aprofundar sua tecnica e fortalecer sua autoridade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.name} professional={professional} />
          ))}
        </div>
      </div>
    </section>
  );
}
