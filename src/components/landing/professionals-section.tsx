"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import {
  ProfessionalCard,
  type ProfessionalCardData,
} from "@/components/landing/professional-card";

const professionals: ProfessionalCardData[] = [
  {
    name: "Professor 01",
    role: "Especialista · Estratégia e Operação",
    description:
      "Conduz os encontros com foco em método, clareza e aplicação real. Traz visão de operação para estruturar uma rotina escalável no escritório previdenciário.",
    highlights: ["Estratégia", "Operação", "Método"],
  },
  {
    name: "Professor 02",
    role: "Especialista · Técnica e Prática",
    description:
      "Responsável por aprofundar o raciocínio jurídico e a prática diária. Conecta os fundamentos com casos reais e padrões de decisão para elevar a confiança técnica.",
    highlights: ["Teses", "Processo", "Casos complexos"],
  },
  {
    name: "Professor 03",
    role: "Especialista · Crescimento e Autoridade",
    description:
      "Trabalha posicionamento, comunicação e experiência do cliente. Mostra como transformar consistência em autoridade, sem perder a excelência técnica.",
    highlights: ["Posicionamento", "Autoridade", "Conversao"],
  },
  {
    name: "Professor 04",
    role: "Especialista · Benefícios por Incapacidade",
    description:
      "Atua com foco em estratégia técnico-probatória para casos de incapacidade, articulando documentação médica, perícia e narrativa processual com mais segurança.",
    highlights: ["Perícia", "Incapacidade", "Prova"],
  },
  {
    name: "Professor 05",
    role: "Especialista · Revisões e Cálculos",
    description:
      "Aprofunda o olhar sobre oportunidades revisionais, leitura de cartas de concessão e uso prático de cálculos para embasar teses com maior consistência.",
    highlights: ["Revisões", "Cálculos", "Análise"],
  },
  {
    name: "Professor 06",
    role: "Especialista · Gestão e Processos",
    description:
      "Ajuda a estruturar fluxos internos, organização da equipe e padrões operacionais para ganhar produtividade sem comprometer a experiência do cliente.",
    highlights: ["Gestão", "Fluxos", "Produtividade"],
  },
  {
    name: "Professor 07",
    role: "Especialista · Conteúdo e Marca",
    description:
      "Mostra como construir autoridade com comunicação clara, conteúdo estratégico e posicionamento coerente para gerar lembrança e aumentar a percepção de valor.",
    highlights: ["Marca", "Conteúdo", "Autoridade"],
  },
  {
    name: "Professor 08",
    role: "Especialista · Tecnologia e IA",
    description:
      "Explora ferramentas digitais, automações e IA aplicada ao escritório para acelerar análises, reduzir retrabalho e ampliar capacidade operacional.",
    highlights: ["IA", "Automação", "Tecnologia"],
  },
];

export function ProfessionalsSection() {
  const itemsPerPage = 2;
  const totalPages = Math.ceil(professionals.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const visibleProfessionals = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return professionals.slice(start, start + itemsPerPage);
  }, [currentPage]);

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
            Professores
          </p>

          <h2 className="section-title mt-5 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[4rem]">
            Quem vai conduzir as aulas
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Oito professores com experiência prática para acelerar sua
            evolução, aprofundar sua técnica e fortalecer sua autoridade.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Professores anteriores"
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
                aria-label={`Ir para grupo ${index + 1} de professores`}
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
            aria-label="Próximos professores"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-7">
          {visibleProfessionals.map((professional) => (
            <ProfessionalCard key={professional.name} professional={professional} />
          ))}
        </div>
      </div>
    </section>
  );
}
