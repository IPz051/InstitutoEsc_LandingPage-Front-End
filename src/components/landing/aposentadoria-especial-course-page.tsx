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
import { TestimonialsSection } from "@/components/landing/testimonials-section";

const courseData = {
  badge: "Curso Presencial | Direito do Trabalho e Direito Previdenciário",
  title:
    "Aposentadoria Especial na Prática: Domine PPP, LTCAT e a Prova do Tempo Especial",
  description:
    "Imersão prática e integrada sobre a produção da prova técnica do tempo especial, com enfoque em PPP, LTCAT, perícia, EPIs e estratégias trabalhistas e previdenciárias para demandas de aposentadoria especial.",
  category: "Direito do Trabalho e Direito Previdenciário",
  duration: "11 horas",
  location: "Curso presencial",
  audience:
    "Advogados, servidores públicos, peritos, contadores e estudantes de Direito",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteúdo programático",
  urgencyBanner: {
    label: "Ultimas vagas",
    title: "Turma quase fechando. Garanta sua vaga !",
    ctaLabel: "Quero entrar",
  },
  paragraphs: [
    "Grande parte das ações envolvendo aposentadoria especial não depende apenas da existência do direito, mas da qualidade da prova técnica apresentada. Na prática profissional, são recorrentes situações como PPP incompleto, ausência ou inconsistências no LTCAT, divergências sobre o uso e a eficácia dos Equipamentos de Proteção Individual e dificuldades na produção de prova pericial adequada.",
    "Esses cenários exigem do advogado uma atuação estratégica que conecta, ao mesmo tempo, aspectos trabalhistas e previdenciários, além de exigir leitura atualizada da jurisprudência dos Tribunais Superiores e dos tribunais regionais.",
    "O curso foi estruturado para oferecer uma visão integrada e prática sobre a prova do tempo especial, permitindo que o profissional atue com mais segurança na construção da prova, na obtenção e retificação de documentos e na condução de demandas envolvendo aposentadoria especial.",
    "A página segue o mesmo padrão visual das anteriores, mas com uma narrativa orientada para profundidade técnica, aplicação imediata e integração entre estratégia processual e prova previdenciária.",
  ],
  highlights: [
    "Fundamentos jurídicos da comprovação da atividade especial.",
    "Utilização técnica do PPP e do LTCAT na prova previdenciária.",
    "Estratégias para obtenção e retificação do PPP por meio de ação trabalhista.",
    "Modalidades de prova pericial aplicadas ao tempo especial.",
    "Interpretação da jurisprudência atual do STF, STJ e tribunais regionais.",
    "Discussão jurídica sobre eficácia dos EPIs e estratégias processuais.",
  ],
  audienceList: [
    "Advogados previdenciaristas que atuam com aposentadoria especial e prova técnica.",
    "Advogados trabalhistas que precisam integrar a via laboral à estratégia previdenciária.",
    "Servidores públicos, peritos judiciais e contadores envolvidos com documentação técnica e análise probatória.",
    "Estudantes de Direito interessados em atuar com tempo especial e litigância previdenciária.",
  ],
  takeaways: [
    "Construir prova técnica mais robusta para reconhecimento do tempo especial.",
    "Escolher com mais segurança a estratégia de obtenção e retificação do PPP.",
    "Argumentar sobre eficácia do EPI com base em jurisprudência relevante.",
    "Integrar estratégia trabalhista e previdenciária em casos concretos.",
  ],
  professors: [
    {
      name: "Carlos Alberto Pereira de Castro",
      role: "Professor | Módulo 1",
      imageSrc: "/9-professores/carlos-alberto-pereira-de-castro.png",
      description:
        "Diretor de Relacionamento com o Direito do Trabalho do IBDP, Juiz do Trabalho da 12ª Região-SC, doutorando em Ciências Jurídicas pela Universidade Autônoma de Lisboa e coautor de obras de referência em Direito Previdenciário.",
    },
    {
      name: "João Batista Lazzari",
      role: "Professor | Módulo 2 e Oficina Prática",
      imageSrc: "/9-professores/joao-batista-lazzari.png",
      description:
        "Diretor de Processo Judicial Previdenciário do IBDP, pós-doutor em Direito e Justiça Constitucional, Juiz Federal do TRF da 4ª Região (1996-2023) e coautor de obras clássicas em Direito Previdenciário e prática processual.",
    },
  ],
  modules: [
    {
      title: "Módulo 1 | PPP e LTCAT: produção da prova e aspectos trabalhistas",
      subtitle: "Condução por Carlos Alberto Pereira de Castro",
      items: [
        "Fundamentos da comprovação da atividade especial.",
        "Modalidades de prova pericial: direta, indireta e por similaridade.",
        "Ação na Justiça do Trabalho para obtenção ou retificação do PPP.",
        "Fundamentos jurídicos e cabimento da ação.",
        "Estrutura da petição inicial.",
        "Produção de prova pericial.",
        "Efeitos da decisão judicial sobre PPP e LTCAT.",
        "Interferência da aposentadoria especial no contrato de trabalho.",
      ],
    },
    {
      title: "Módulo 2 | Tempo especial: aspectos previdenciários",
      subtitle: "Condução por João Batista Lazzari",
      items: [
        "Reconhecimento do tempo especial e seus efeitos.",
        "Evolução normativa e jurisprudencial.",
        "Atividades perigosas e penosas.",
        "Análise de categorias profissionais, como vigilantes, eletricitários e frentistas.",
        "Equipamentos de Proteção Individual na jurisprudência previdenciária.",
        "Tema 555 do STF.",
        "Tema 1090 do STJ.",
        "IRDR 15 do TRF4 e Tema 213 da TNU.",
        "Estratégias processuais para descaracterização da eficácia do EPI.",
      ],
    },
    {
      title: "Módulo 3 | Oficina prática",
      subtitle: "Atividade conduzida pelos dois professores com situações concretas",
      items: [
        "Casos reais de obtenção e revisão de PPP na Justiça do Trabalho.",
        "Análise de prova técnica em ações previdenciárias.",
        "Orientações práticas para elaboração de petições.",
        "Integração entre estratégias trabalhistas e previdenciárias.",
      ],
    },
  ],
  jurisprudence: [
    "Leitura integrada dos precedentes relevantes do STF, STJ, tribunais regionais e TNU.",
    "Análise prática da jurisprudência sobre eficácia dos EPIs e descaracterização da exposição.",
    "Uso estratégico da prova pericial e dos documentos técnicos na aposentadoria especial.",
    "Conexão entre discussão trabalhista e aproveitamento previdenciário do material probatório.",
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

export function AposentadoriaEspecialCoursePage() {
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

              <h1 className="section-title mt-8 text-[2.7rem] leading-[0.97] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[3.95rem] lg:text-[4.7rem]">
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
              title="Prova técnica, estratégia processual e integração entre as esferas trabalhista e previdenciária"
              description="A última landing segue o mesmo padrão que criamos, preservando hierarquia visual, contraste e estrutura de conversão com mais densidade técnica no conteúdo."
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
              O que você vai aprender
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
                O curso foi desenhado para unir prova técnica, estratégia processual e leitura jurisprudencial em um único percurso de aprendizagem com aplicação imediata na aposentadoria especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Pensado para profissionais que precisam dominar a prova do tempo especial com mais segurança"
            description="A narrativa da página deixa claro o ganho prático para quem atua ou deseja atuar com aposentadoria especial em alto nível técnico."
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
            eyebrow="Professores"
            title="Condução por dois referenciais da prática previdenciária"
            description="A estrutura dos professores acompanha o mesmo desenho das outras landings, reforçando autoridade, consistência visual e leitura clara."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {courseData.professors.map((professor) => (
              <article
                key={professor.name}
                className="overflow-hidden rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] shadow-[0_18px_40px_rgba(17,23,47,0.04)]"
              >
                <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                  <div className="relative min-h-[300px] bg-[linear-gradient(180deg,#eef2ff_0%,#dce5ff_100%)]">
                    <Image
                      src={professor.imageSrc}
                      alt={professor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]">
                      {professor.role}
                    </p>
                    <h3 className="section-title mt-3 text-[1.8rem] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
                      {professor.name}
                    </h3>
                    <p className="mt-5 text-[15px] leading-7 text-[var(--muted-foreground)]">
                      {professor.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className="bg-[#0d1530] py-20 text-white sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Estrutura do Curso"
            title="Três módulos para conectar documento técnico, prova pericial e estratégia processual"
            description="Mantive o mesmo tratamento de cor e contraste das páginas mais recentes para que a leitura continue forte nas seções escuras."
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

      <TestimonialsSection copy={landingContent.pt.testimonials} />

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
              Esta seção sintetiza o valor técnico da imersão e mostra que o curso entrega repertório útil para atuar com aposentadoria especial desde a prova documental até a estratégia judicial.
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
              Uma imersão para transformar prova técnica em segurança de atuação na aposentadoria especial
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              A última landing segue o mesmo padrão que consolidamos nas anteriores, com foco em contraste, clareza, autoridade docente e poder de conversão.
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
                  Hero, prova de valor, professores, módulos e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversão
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botões integrados ao fluxo de cadastro já existente no projeto.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Consistência
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Mesma linguagem visual, contraste e hierarquia das páginas anteriores.
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
