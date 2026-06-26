"use client";

import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Gavel,
  GraduationCap,
  MapPin,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

import { landingContent } from "@/components/landing/content";
import { CourseUrgencyBanner } from "@/components/landing/course-urgency-banner";
import { Footer } from "@/components/landing/footer";

const courseData = {
  badge: "Curso Presencial | Direito Previdenciário",
  title:
    "PRÁTICA: TESES REVISIONAIS APLICÁVEIS AOS BENEFÍCIOS NÃO PROGRAMÁVEIS DO RGPS APÓS A REFORMA DA PREVIDÊNCIA",
  description:
    "Imersão focada nas principais teses revisionais aplicáveis aos benefícios por incapacidade e à pensão por morte no RGPS, com abordagem prática, resolução de casos concretos e modelos para uso profissional.",
  category: "Direito Previdenciário",
  duration: "4 horas",
  location: "Curso presencial",
  audience:
    "Advogados e profissionais que atuam com revisões previdenciárias no RGPS",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteúdo programático",
  urgencyBanner: {
    label: "Ultimas vagas",
    title: "Vagas se esgotando! Garanta já a sua !",
    ctaLabel: "Entrar na turma",
  },
  paragraphs: [
    "A proposta desta landing é apresentar com clareza uma imersão objetiva e altamente aplicável para quem atua com benefícios não programáveis do RGPS no cenário pós-Reforma da Previdência.",
    "O curso concentra a discussão em duas frentes revisionais de grande relevância prática: o recálculo da aposentadoria por incapacidade permanente e da pensão por morte pela técnica de descarte de contribuições, e a análise do tempo de convivência do casal como requisito para manutenção da pensão por morte.",
    "A condução do conteúdo parte da solução de casos concretos, permitindo que a exposição teórica seja convertida em estratégia de atuação com utilidade imediata no contencioso previdenciário.",
    "Como complemento, os participantes recebem modelos das teses para aplicação na prática previdenciária, fortalecendo a transferência do conteúdo para a rotina profissional.",
  ],
  highlights: [
    "Teses revisionais aplicáveis a benefícios por incapacidade e pensão por morte.",
    "Técnica de descarte de contribuições no recálculo de benefícios.",
    "Análise do tempo de convivência como requisito para manutenção da pensão por morte.",
    "Modelos prontos para aplicação prática e estudo com casos concretos.",
  ],
  audienceList: [
    "Advogados previdenciaristas que atuam com revisão de benefícios não programáveis do RGPS.",
    "Profissionais que buscam ampliar repertório técnico sobre pensão por morte e incapacidade permanente após a EC n. 103/2019.",
    "Participantes que desejam transformar teses revisionais em peças e estratégias de atuação concretas.",
    "Quem procura modelos prontos e leitura aplicada para acelerar a prática previdenciária.",
  ],
  takeaways: [
    "Identificar oportunidades revisionais com maior potencial prático.",
    "Aplicar a técnica de descarte de contribuições com mais segurança.",
    "Analisar corretamente o requisito de convivência para pensão por morte.",
    "Levar para a rotina modelos e caminhos argumentativos prontos para uso.",
  ],
  professor: {
    name: "Lucas Alberton",
    role: "Professor da imersão",
    imageSrc: "/9-professores/lucas-alberton.png",
    description:
      "Advogado previdenciarista, mestre em Direito, especialista em Direito Previdenciário e professor de Direito Processual Civil, Direito Previdenciário e Ética Profissional em graduação e pós-graduação.",
  },
  modules: [
    {
      title: "Teses revisionais em benefícios por incapacidade e pensão por morte",
      subtitle: "Aplicação prática dos principais pontos após a EC n. 103/2019",
      items: [
        "Recálculo da aposentadoria por incapacidade permanente pela técnica de descarte de contribuições.",
        "Recálculo da pensão por morte pela técnica de descarte de contribuições.",
        "Análise do tempo de convivência do casal como requisito para manutenção da pensão por morte no RGPS.",
        "Exame de casamento e união estável com ou sem solução de continuidade na relação.",
      ],
    },
    {
      title: "Metodologia aplicada à prática previdenciária",
      subtitle: "Conteúdo concentrado em resultado e transferência prática",
      items: [
        "Exposição do conteúdo programático por meio da solução de casos concretos.",
        "Encaminhamento de modelos das teses para aplicação na prática previdenciária.",
        "Leitura estratégica das teses para uso em análise de casos e construção argumentativa.",
      ],
    },
  ],
  jurisprudence: [
    "Leitura das teses revisionais com foco na utilidade prática para benefícios não programáveis do RGPS.",
    "Análise de fundamentos relevantes para recálculo de incapacidade permanente e pensão por morte.",
    "Discussão sobre convivência, continuidade da relação e seus efeitos previdenciários.",
    "Aplicação de modelos argumentativos orientados para atuação profissional.",
  ],
};

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-[rgba(17,23,47,0.08)] bg-white/92 p-5 shadow-[0_18px_40px_rgba(17,23,47,0.05)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[var(--primary)]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-[var(--foreground)]">{value}</p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[760px]">
      <p
        className={`text-xs font-bold uppercase tracking-[0.3em] ${
          dark ? "text-[#8ea4ff]" : "text-[var(--primary)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`section-title mt-4 text-[2.35rem] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-[3rem] ${
          dark ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            dark ? "text-white/72" : "text-[var(--muted-foreground)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function TesesRevisionaisCoursePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f6f7fb] pt-0">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat"
            style={{ backgroundImage: "url('/BG.png')" }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Gradient.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(246,247,251,0.98)_0%,rgba(246,247,251,0.94)_28%,rgba(246,247,251,0.82)_48%,rgba(246,247,251,0.38)_72%,rgba(246,247,251,0.12)_100%)]" />
        </div>

        <div className="container-shell relative z-10 pb-18">
          <CourseUrgencyBanner {...courseData.urgencyBanner} />

          <div className="flex flex-col gap-14 pt-10 sm:pt-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,79,190,0.12)] bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-[0_10px_30px_rgba(46,79,190,0.08)] backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
                {courseData.badge}
              </div>

              <h1 className="section-title mt-8 text-[2.65rem] leading-[0.97] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.8rem] lg:text-[4.35rem]">
                {courseData.title}
              </h1>

              <p className="mt-6 max-w-[46rem] text-lg leading-8 text-[rgba(48,59,105,0.92)] sm:text-xl">
                {courseData.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/cadastro"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-base font-semibold !text-white shadow-[0_22px_48px_rgba(46,79,190,0.28)] transition hover:bg-[#2845a8] hover:!text-white visited:!text-white"
                >
                  {courseData.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#conteudo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/88 px-7 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[rgba(46,79,190,0.18)] hover:text-[var(--primary)]"
                >
                  <BookOpenText className="h-4 w-4" />
                  {courseData.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="grid w-full max-w-[420px] gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <StatCard icon={Clock3} label="Duração" value={courseData.duration} />
              <StatCard icon={Scale} label="Matéria" value={courseData.category} />
              <StatCard icon={MapPin} label="Formato" value={courseData.location} />
              <StatCard icon={Users} label="Indicado para" value={courseData.audience} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Visão Geral"
              title="Teses revisionais com foco direto em aplicação prática no RGPS"
              description="A estrutura replica a landing anterior, mantendo hierarquia visual, contraste e uma narrativa clara de valor para o profissional previdenciarista."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              {courseData.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] p-7 shadow-[0_18px_40px_rgba(17,23,47,0.04)] sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eef2ff] text-[var(--primary)]">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h3 className="section-title mt-6 text-[1.8rem] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
              O que o participante aprofunda
            </h3>

            <ul className="mt-6 space-y-4">
              {courseData.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-7 text-[var(--muted-foreground)]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[24px] bg-[var(--foreground)] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                Diferencial da imersão
              </p>
              <p className="mt-3 text-base leading-7 text-white/82">
                O curso entrega conteúdo concentrado, estudo por casos concretos e modelos prontos, o que aumenta a velocidade de aplicação das teses na prática previdenciária.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Pensada para quem precisa transformar tese revisional em atuação concreta"
            description="A página foi desenhada para comunicar utilidade imediata, especialmente para quem lida com incapacidade permanente e pensão por morte após a Reforma da Previdência."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[rgba(17,23,47,0.08)] bg-white p-7 shadow-[0_16px_34px_rgba(17,23,47,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[var(--primary)]">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <h3 className="section-title text-[1.7rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                  Público indicado
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {courseData.audienceList.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-[var(--muted-foreground)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[rgba(17,23,47,0.08)] bg-white p-7 shadow-[0_16px_34px_rgba(17,23,47,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[var(--primary)]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="section-title text-[1.7rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                  Resultado prático esperado
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {courseData.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-[var(--muted-foreground)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Professor"
            title="Conteúdo conduzido por Lucas Alberton"
            description="A seção do professor segue o mesmo desenho usado nas páginas anteriores para reforçar unidade visual e autoridade técnica."
          />

          <article className="mt-12 overflow-hidden rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] shadow-[0_18px_40px_rgba(17,23,47,0.04)]">
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              <div className="relative min-h-[320px] bg-[linear-gradient(180deg,#eef2ff_0%,#dce5ff_100%)]">
                <Image
                  src={courseData.professor.imageSrc}
                  alt={courseData.professor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-7 sm:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]">
                  {courseData.professor.role}
                </p>
                <h3 className="section-title mt-3 text-[2rem] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
                  {courseData.professor.name}
                </h3>
                <p className="mt-5 text-[15px] leading-7 text-[var(--muted-foreground)] sm:text-base">
                  {courseData.professor.description}
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(17,23,47,0.04)]">
                    <Scale className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                      Revisão
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Foco em teses revisionais de alta aplicabilidade.
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(17,23,47,0.04)]">
                    <Gavel className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                      Casos
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Desenvolvimento por meio da solução de casos concretos.
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(17,23,47,0.04)]">
                    <BookOpenText className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                      Modelos
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Materiais prontos para acelerar a aplicação prática.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="conteudo" className="bg-[#0d1530] py-20 text-white sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Conteúdo Programático"
            title="Teses, metodologia aplicada e modelos para a prática previdenciária"
            description="Mantive o mesmo tratamento de contraste e cores da página anterior para que a leitura continue forte nas seções escuras."
            dark
          />

          <div className="mt-12 grid gap-6">
            {courseData.modules.map((module) => (
              <article
                key={module.title}
                className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ea4ff]">
                  Módulo temático
                </p>
                <h3 className="section-title mt-3 text-[1.8rem] font-bold leading-[1.04] tracking-[-0.04em] text-white">
                  {module.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/70">{module.subtitle}</p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {module.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/8 bg-[#121d42] p-5 text-[15px] leading-7 text-white/82"
                    >
                      <div className="flex gap-3">
                        <FileText className="mt-1 h-5 w-5 shrink-0 text-[#8ea4ff]" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] px-3 pb-20 pt-6 sm:px-5 sm:pb-24 lg:pb-28">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr] mx-auto max-w-[1160px]">
          <div className="rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] p-7 shadow-[0_18px_40px_rgba(17,23,47,0.04)] sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eef2ff] text-[var(--primary)]">
              <Gavel className="h-6 w-6" />
            </div>
            <h3 className="section-title mt-6 text-[1.9rem] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)]">
              Aplicação prática em destaque
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              Esta seção reforça que a imersão não entrega apenas conteúdo teórico, mas caminhos concretos para identificar, estruturar e aplicar teses revisionais no RGPS.
            </p>

            <ul className="mt-6 space-y-4">
              {courseData.jurisprudence.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-7 text-[var(--muted-foreground)]">
                  <Scale className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] bg-[linear-gradient(135deg,#2e4fbe_0%,#5b6ef0_100%)] p-8 text-white shadow-[0_22px_55px_rgba(46,79,190,0.24)] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/62">
              Chamada final
            </p>
            <h3 className="section-title mt-4 text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.8rem]">
              Uma imersão para transformar tese revisional em estratégia de atuação imediata
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              A nova landing do terceiro card segue o mesmo padrão criado nas anteriores e replica exatamente o estilo dos botões finais que você ajustou.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-[var(--primary)] transition hover:bg-white/8"
              >
                Garantir interesse na imersão
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/8"
              >
                Voltar ao Instituto ESC
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <CalendarDays className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Estrutura
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Hero, prova de valor, professor, conteúdo e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversão
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botões principais integrados ao fluxo de cadastro existente.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Consistência
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Mesma hierarquia visual, contraste e padrão das páginas anteriores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer copy={landingContent.pt.footer} />
    </main>
  );
}
