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

const courseData = {
  badge: "Curso Presencial | Direito Previdenciario",
  title: "PRATICA: MANDADO DE SEGURANCA EM MATERIA PREVIDENCIARIA",
  description:
    "Imersao voltada a estrutura, cabimento e uso estrategico do mandado de seguranca em materia previdenciaria, com abordagem pratica, leitura jurisprudencial e resolucao de casos concretos.",
  category: "Direito Previdenciario",
  duration: "8 horas",
  location: "Curso presencial",
  audience:
    "Advogados, estudantes e profissionais que atuam com contencioso previdenciario",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteudo programatico",
  paragraphs: [
    "A landing foi estruturada para apresentar, de forma clara e tecnica, os principais fundamentos do mandado de seguranca aplicado a materia previdenciaria, destacando tanto os requisitos juridicos quanto a estrategia pratica de utilizacao da medida.",
    "O curso passa pelo conceito constitucional do mandado de seguranca, pela ideia de direito liquido e certo, pela identificacao da autoridade coatora e pelas diferencas entre mandado de seguranca individual, coletivo, preventivo e repressivo.",
    "Tambem sao enfrentados os aspectos processuais mais relevantes previstos na Lei 12.016/2009, incluindo competencia, liminar, recursos cabiveis e hipoteses de nao cabimento, com atencao especial ao uso da medida nos Juizados Especiais Federais.",
    "O desenvolvimento do conteudo parte de material de leitura previa e evolui para a exposicao dos temas por meio da solucao de casos concretos, aproximando a teoria da rotina profissional do advogado previdenciarista.",
  ],
  highlights: [
    "Leitura pratica do mandado de seguranca no contencioso previdenciario.",
    "Analise dos requisitos constitucionais e processuais da medida.",
    "Jurisprudencia atual do STF e do STJ aplicada a casos reais.",
    "Discussao estrategica sobre cabimento, liminar e recursos.",
  ],
  audienceList: [
    "Advogados que precisam usar o mandado de seguranca com mais seguranca tecnica em demandas previdenciarias.",
    "Profissionais que atuam com medidas urgentes, ilegalidade administrativa e tutela de direito liquido e certo.",
    "Estudantes e pesquisadores interessados em aprofundar a pratica processual previdenciaria com enfoque constitucional.",
    "Participantes que buscam conectar teoria, jurisprudencia e estrategia a partir de casos concretos.",
  ],
  takeaways: [
    "Identificar quando o mandado de seguranca e a via adequada no caso previdenciario.",
    "Estruturar pedidos, liminares e recursos com mais clareza tecnica.",
    "Reconhecer hipoteses de nao cabimento e reduzir erros estrategicos.",
    "Aplicar precedentes do STF e do STJ com utilidade pratica na atuacao diaria.",
  ],
  professor: {
    name: "Marco Aurelio Serau Junior",
    role: "Professor da imersao",
    imageSrc: "/9-professores/marco-aurilio-serau-junior.png",
    description:
      "Professor da UFPR, doutor e mestre pela USP, advogado e consultor. Ex-assessor na Vice-Presidencia do TRF da 3a Regiao, autor e coordenador de diversas obras juridicas e diretor cientifico do IEPREV.",
  },
  modules: [
    {
      title: "Fundamentos do mandado de seguranca",
      subtitle: "Base conceitual e constitucional para aplicacao em materia previdenciaria",
      items: [
        "Conceito de mandado de seguranca.",
        "Mandado de seguranca na Constituicao Federal.",
        "Direito liquido e certo.",
        "Abuso de direito e ilegalidade.",
        "Autoridade coatora.",
        "Mandado de seguranca individual e coletivo.",
        "Mandado de seguranca preventivo e repressivo.",
      ],
    },
    {
      title: "Rito processual e estrutura de atuacao",
      subtitle: "Lei 12.016/2009, competencia e tecnica processual",
      items: [
        "Rito processual do mandado de seguranca segundo a Lei 12.016/2009.",
        "Competencia para julgamento.",
        "Liminar e seus requisitos praticos.",
        "Hipoteses de nao cabimento do mandado de seguranca.",
        "Recursos cabiveis.",
        "Mandado de seguranca nos Juizados Especiais Federais.",
      ],
    },
    {
      title: "Jurisprudencia e aplicacao em casos concretos",
      subtitle: "Estudo orientado por leitura previa e resolucao pratica",
      items: [
        "Encaminhamento de material de leitura previa aos alunos para compreensao inicial da materia.",
        "Exposicao do conteudo programatico por meio da solucao de casos concretos.",
        "Jurisprudencia do STF sobre mandado de seguranca.",
        "Jurisprudencia do STJ sobre mandado de seguranca.",
        "Leitura estrategica dos precedentes para definicao de cabimento e melhor via processual.",
      ],
    },
  ],
  jurisprudence: [
    "Jurisprudencia do STF sobre direito liquido e certo, limites do writ e controle de ilegalidade.",
    "Jurisprudencia do STJ sobre cabimento, recursos e utilizacao da medida em materia previdenciaria.",
    "Discussao aplicada sobre liminar, competencia e hipoteses de nao cabimento.",
    "Interacao entre fundamento constitucional, lei especial e pratica forense previdenciaria.",
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

export function MandadoSegurancaCoursePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f6f7fb] pt-24 sm:pt-28">
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
          <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[#2845a8]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Voltar para a landing principal
              </Link>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(46,79,190,0.12)] bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-[0_10px_30px_rgba(46,79,190,0.08)] backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
                {courseData.badge}
              </div>

              <h1 className="section-title mt-8 text-[2.8rem] leading-[0.97] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[4rem] lg:text-[4.8rem]">
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
              <StatCard icon={Clock3} label="Duracao" value={courseData.duration} />
              <StatCard icon={Scale} label="Materia" value={courseData.category} />
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
              eyebrow="Visao Geral"
              title="Cabimento, tecnica processual e leitura estrategica do writ previdenciario"
              description="A pagina segue o padrao visual da primeira imersao, com foco em clareza de leitura, destaque para a autoridade do professor e boa hierarquia de informacoes."
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
                Diferencial da imersao
              </p>
              <p className="mt-3 text-base leading-7 text-white/82">
                O conteudo combina base constitucional, leitura da lei especial, analise jurisprudencial e aplicacao em casos concretos para tornar o mandado de seguranca uma ferramenta estrategica de atuacao.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Feita para quem precisa decidir com seguranca quando e como usar o mandado de seguranca"
            description="A imersao favorece profissionais que precisam traduzir urgencia, ilegalidade e direito liquido e certo em estrategia processual consistente."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[rgba(17,23,47,0.08)] bg-white p-7 shadow-[0_16px_34px_rgba(17,23,47,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[var(--primary)]">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <h3 className="section-title text-[1.7rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                  Publico indicado
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
                  Resultado pratico esperado
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
            title="Conteudo conduzido por Marco Aurelio Serau Junior"
            description="A secao reforca autoridade academica e pratica profissional sem perder a mesma linguagem visual adotada no restante da pagina."
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
                      Base tecnica
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Enfoque constitucional, legal e jurisprudencial.
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(17,23,47,0.04)]">
                    <Gavel className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                      Aplicacao
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Conteudo desenvolvido com casos concretos.
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(17,23,47,0.04)]">
                    <BookOpenText className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                      Preparacao
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Leitura previa para nivelar a turma antes da imersao.
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
            eyebrow="Conteudo Programatico"
            title="Da base constitucional a solucao de casos concretos"
            description="As secoes abaixo foram organizadas para manter contraste alto, leitura confortavel e destaque coerente com a identidade visual do projeto."
            dark
          />

          <div className="mt-12 grid gap-6">
            {courseData.modules.map((module) => (
              <article
                key={module.title}
                className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ea4ff]">
                  Modulo tematico
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

      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] p-7 shadow-[0_18px_40px_rgba(17,23,47,0.04)] sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eef2ff] text-[var(--primary)]">
              <Gavel className="h-6 w-6" />
            </div>
            <h3 className="section-title mt-6 text-[1.9rem] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)]">
              Jurisprudencia em destaque
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              A pagina valoriza o recorte jurisprudencial para mostrar que o curso nao fica apenas na teoria do writ, mas trabalha sua aplicacao real em materia previdenciaria.
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
              Uma imersao para transformar cabimento e urgencia em estrategia processual segura
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              A nova landing do segundo card foi pensada para vender a profundidade tecnica do curso sem perder legibilidade, contraste e coerencia com a identidade visual do Instituto ESC.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-[var(--primary)] transition hover:bg-white/8"
              >
                Garantir interesse na imersao
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
                  Hero, prova de valor, professor, conteudo e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversao
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botoes principais integrados ao fluxo de cadastro existente.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Contraste
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Cores de texto ajustadas para manter leitura forte em todas as secoes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d1530] py-10 text-white">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-title text-2xl font-bold tracking-[-0.04em]">
              Instituto ESC
            </p>
            <p className="mt-2 text-sm text-white/62">
              O novo ecossistema do Direito Previdenciario.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/72 sm:items-end">
            <Link href="/" className="transition hover:text-white">
              Voltar para a pagina principal
            </Link>
            <Link href="/cadastro" className="transition hover:text-white">
              Ir para cadastro
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
