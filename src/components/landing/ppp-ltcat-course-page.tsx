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
  badge: "Curso Presencial | Direito do Trabalho e Direito Previdenciário",
  title:
    "PPP e LTCAT na Aposentadoria Especial: Obtenção, Retificação e Impactos dos EPIs na Comprovação do Tempo Especial",
  description:
    "Curso prático e atualizado sobre a produção, obtenção, retificação e impugnação do PPP e do LTCAT, com foco na comprovação do tempo especial perante o INSS e no processo judicial previdenciário.",
  category: "Direito do Trabalho e Direito Previdenciário",
  duration: "11 horas",
  location: "Curso presencial",
  audience:
    "Advogados, servidores públicos, peritos, contadores e estudantes",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteúdo programático",
  urgencyBanner: {
    label: "Ultimas vagas",
    title: "Esse aqui esta saindo rapido. Bora garantir a sua?",
    ctaLabel: "Quero minha vaga",
  },
  paragraphs: [
    "O curso examina, de forma prática e atualizada, o papel do PPP e do LTCAT na comprovação do tempo especial para fins de aposentadoria especial, abordando tanto os aspectos trabalhistas quanto previdenciários envolvidos na produção e utilização dessa prova técnica.",
    "Serão analisados os caminhos jurídicos para obtenção, retificação e impugnação do PPP, inclusive por meio de ação na Justiça do Trabalho, bem como os reflexos desses documentos no reconhecimento do tempo especial perante o INSS e no processo judicial previdenciário.",
    "O curso também examina a jurisprudência recente dos Tribunais Superiores sobre a eficácia dos Equipamentos de Proteção Individual (EPIs), com destaque para os precedentes vinculantes do STF e do STJ.",
    "A partir da experiência dos professores e da análise de casos concretos e estratégias processuais, os participantes terão contato com técnicas de atuação profissional voltadas à construção da prova do tempo especial e à condução de demandas previdenciárias envolvendo aposentadoria especial.",
  ],
  highlights: [
    "Obtenção, retificação e impugnação do PPP e do LTCAT",
    "Atuação na Justiça do Trabalho e no contencioso previdenciário",
    "Jurisprudência atual sobre EPI nos Tribunais Superiores",
    "Casos concretos e estratégias processuais aplicáveis à prática",
  ],
  audienceList: [
    "Advogados previdenciaristas e trabalhistas que desejam aprofundar a prova do tempo especial.",
    "Servidores públicos e peritos que atuam com documentação técnica e análise de condições especiais de trabalho.",
    "Contadores e profissionais que auxiliam na organização da prova técnica para demandas previdenciárias.",
    "Estudantes e profissionais em formação que buscam repertório prático e atualizado sobre aposentadoria especial.",
  ],
  takeaways: [
    "Estruturar a prova técnica do tempo especial com mais segurança.",
    "Escolher a via adequada para obtenção ou retificação do PPP.",
    "Usar precedentes do STF e do STJ de forma estratégica.",
    "Conduzir demandas previdenciárias com foco em prova e resultado.",
  ],
  professors: [
    {
      name: "Carlos Alberto Pereira de Castro",
      role: "Prof. Parte I",
      imageSrc: "/9-professores/carlos-alberto-pereira-de-castro.png",
      description:
        "Diretor de Relacionamento com o Direito do Trabalho do IBDP. Juiz do Trabalho da 12ª Região-SC. Doutorando em Ciências Jurídicas pela Universidade Autônoma de Lisboa. Coautor de obras de referência em Direito Previdenciário.",
    },
    {
      name: "João Batista Lazzari",
      role: "Prof. Parte II e Parte III",
      imageSrc: "/9-professores/joao-batista-lazzari.png",
      description:
        "Diretor de Processo Judicial Previdenciário do IBDP. Pós-doutor em Direito e Justiça Constitucional. Juiz Federal do TRF da 4ª Região (1996-2023). Coautor de obras clássicas em Direito Previdenciário e prática processual.",
    },
  ],
  modules: [
    {
      title: "Parte I | Prof. Carlos Alberto Pereira de Castro",
      subtitle: "PPP/LTCAT: produção da prova e aspectos trabalhistas",
      items: [
        "Comprovação da atividade especial: conceitos e fundamentos normativos.",
        "Prova pericial: modalidades indireta, por similaridade e banco de laudos.",
        "Ação na Justiça do Trabalho para obtenção e retificação do PPP e do LTCAT.",
        "Cabimento, fundamentos jurídicos, prazos e procedimento.",
        "Estrutura da petição inicial e produção de provas com ênfase na perícia.",
        "Efeitos da decisão judicial sobre o PPP e o LTCAT.",
        "Interferência da aposentadoria especial no contrato de trabalho.",
      ],
    },
    {
      title: "Parte II | Prof. João Batista Lazzari",
      subtitle: "Tempo especial: aspectos previdenciários",
      items: [
        "Reconhecimento do tempo especial e seus efeitos práticos.",
        "Jurisprudência e evolução normativa sobre o tema.",
        "Questões controvertidas envolvendo atividades perigosas, eletricitários, frentistas e atividades penosas.",
        "EPI na jurisprudência previdenciária: STF Tema 555.",
        "EPI na jurisprudência previdenciária: STJ Tema 1090.",
        "IRDR Tema 15 do TRF4 e Tema 213 da TNU.",
        "Estratégias processuais para descaracterizar os efeitos do EPI à luz das teses fixadas pelo STJ.",
      ],
    },
    {
      title: "Parte III | Professores Carlos Alberto Pereira de Castro e João Batista Lazzari",
      subtitle: "Casos concretos e estratégia aplicada",
      items: [
        "Casos concretos de obtenção e revisão de PPP na Justiça do Trabalho.",
        "Casos concretos com análise de provas em ações previdenciárias.",
        "Dicas de elaboração de petições na Justiça do Trabalho e na Justiça Federal.",
      ],
    },
  ],
  jurisprudence: [
    "STF Tema 1209 sobre atividades perigosas, com destaque para vigilantes.",
    "STF Tema 555 sobre eficácia dos Equipamentos de Proteção Individual.",
    "STJ Tema 1090 e seus reflexos na prova do tempo especial.",
    "TRF4 IRDR Tema 15 e TNU Tema 213 na interpretação da matéria.",
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
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-[760px]">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="section-title mt-4 text-[2.35rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PppLtcatCoursePage() {
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

              <h1 className="section-title mt-8 text-[2.9rem] leading-[0.97] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[4.1rem] lg:text-[5rem]">
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
              title="Prova técnica, estratégia processual e leitura jurisprudencial em uma mesma imersão"
              description="A estrutura da página segue uma narrativa de conversão, mas o conteúdo foi construído para valorizar profundidade técnica, aplicação prática e posicionamento do Instituto ESC."
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
                O curso conecta a produção da prova na esfera trabalhista com o aproveitamento do material probatório no contencioso previdenciário, incluindo a discussão atual sobre EPI nos precedentes vinculantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Pensado para quem precisa atuar com profundidade técnica e segurança estratégica"
            description="A imersão foi desenhada para profissionais que lidam com prova técnica, aposentadoria especial e litigância previdenciária de forma prática."
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
            title="Docentes com repertório prático e autoridade no tema"
            description="A condução da imersão reúne experiência judicial, produção acadêmica e vivência direta com o contencioso previdenciário e trabalhista."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {courseData.professors.map((professor) => (
              <article
                key={professor.name}
                className="overflow-hidden rounded-[30px] border border-[rgba(17,23,47,0.08)] bg-[#f7f8fc] shadow-[0_18px_40px_rgba(17,23,47,0.04)]"
              >
                <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                  <div className="relative min-h-[280px] bg-[linear-gradient(180deg,#eef2ff_0%,#dce5ff_100%)]">
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

      <section id="conteudo" className="bg-[#dde0e7] py-20 text-white sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Conteúdo Programático"
            title="Um percurso estruturado da prova técnica à estratégia processual"
            description="O curso foi dividido em três partes para conectar base normativa, técnica de prova, jurisprudência e aplicação prática em casos concretos."
          />

          <div className="mt-12 grid gap-6">
            {courseData.modules.map((module) => (
              <article
                key={module.title}
                className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#121d42]">
                      Módulo temático
                    </p>
                    <h3 className="section-title mt-3 text-[1.8rem] font-bold leading-[1.04] tracking-[-0.04em] text-[#121d42]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#121d42]">{module.subtitle}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {module.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/8 bg-[#121d42] p-5 text-[15px] leading-7 text-white/78"
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
              Jurisprudência em destaque
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              A página reforça o valor técnico do curso ao destacar os precedentes que impactam diretamente a construção e a contestação da prova do tempo especial.
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
              Uma imersão para transformar prova técnica em estratégia de resultado
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              Se a sua atuação exige domínio de PPP, LTCAT, perícia, EPI e aposentadoria especial, esta página agora conta com uma rota própria para apresentar o curso com profundidade e mais poder de conversão.
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
                  Hero, prova de valor, professores, conteúdo e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversão
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botões claros direcionando para o fluxo de cadastro já existente.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Consistência
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Mesma paleta, tipografia e linguagem visual do restante do site.
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
