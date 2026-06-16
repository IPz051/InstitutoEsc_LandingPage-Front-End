"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useMemo, useState } from "react";

type Testimonial = {
  author: string;
  role: string;
  quote: string;
  result: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Dra. Mariana Costa",
    role: "Advogada Previdenciarista · São Paulo",
    quote:
      "O Instituto ESC me ajudou a transformar uma rotina desorganizada em um escritório com processo, posicionamento e previsibilidade de crescimento.",
    result: "Mais clareza comercial e operação mais enxuta em 90 dias.",
  },
  {
    author: "Dr. Rafael Nogueira",
    role: "Sócio de escritório · Belo Horizonte",
    quote:
      "Passei a enxergar a prática previdenciária como negócio. Os módulos de tecnologia e comercial mudaram completamente minha forma de atender e escalar.",
    result: "Melhor conversão de leads e mais segurança nas decisões.",
  },
  {
    author: "Dra. Juliana Mota",
    role: "Especialista em benefícios · Recife",
    quote:
      "A combinação entre comunidade, conteúdo e método trouxe aplicação imediata. Não é teoria solta, é repertório para usar no dia seguinte.",
    result: "Mais autoridade digital e atendimento mais consistente.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = useMemo(
    () => testimonials[activeIndex] ?? testimonials[0],
    [activeIndex],
  );

  function handlePrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function handleNext() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            Depoimentos
          </p>

          <h2 className="section-title mt-4 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[3.95rem]">
            Quem vive a experiência ESC
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Resultados percebidos por advogados que escolheram evoluir com
            método, comunidade e aplicação prática.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[980px] rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] p-5 shadow-[0_18px_48px_rgba(17,23,47,0.08)] sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
            <div className="rounded-[24px] bg-white p-4 sm:p-5">
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={testimonial.author}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`w-full rounded-[18px] border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-[rgba(46,79,190,0.22)] bg-[#eef2ff] shadow-[0_12px_28px_rgba(46,79,190,0.08)]"
                          : "border-transparent bg-[#fbfbfe] hover:border-[rgba(17,23,47,0.08)] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[var(--foreground)]">
                            {testimonial.author}
                          </p>
                          <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5 text-[var(--primary)]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-3.5 w-3.5 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <article className="rounded-[24px] bg-white px-6 py-6 shadow-[0_14px_34px_rgba(17,23,47,0.06)] sm:px-7 sm:py-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[var(--primary)]">
                  <Quote className="h-5 w-5" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Depoimento anterior"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1 text-[var(--primary)]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-6 max-w-[680px] text-[1.25rem] leading-8 text-[var(--foreground)] sm:text-[1.45rem] sm:leading-9">
                {activeTestimonial.quote}
              </blockquote>

              <div className="mt-8 rounded-[20px] bg-[#f7f8fc] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Resultado percebido
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)] sm:text-[15px]">
                  {activeTestimonial.result}
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(17,23,47,0.08)] pt-5">
                <p className="text-base font-semibold text-[var(--foreground)]">
                  {activeTestimonial.author}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {activeTestimonial.role}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
