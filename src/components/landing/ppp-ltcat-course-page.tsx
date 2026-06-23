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
  badge: "Curso Presencial | Direito do Trabalho e Direito Previdenciario",
  title:
    "PPP e LTCAT na Aposentadoria Especial: Obtencao, Retificacao e Impactos dos EPIs na Comprovacao do Tempo Especial",
  description:
    "Curso pratico e atualizado sobre a producao, obtencao, retificacao e impugnacao do PPP e do LTCAT, com foco na comprovacao do tempo especial perante o INSS e no processo judicial previdenciario.",
  category: "Direito do Trabalho e Direito Previdenciario",
  duration: "11 horas",
  location: "Curso presencial",
  audience:
    "Advogados, servidores publicos, peritos, contadores e estudantes",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteudo programatico",
  paragraphs: [
    "O curso examina, de forma pratica e atualizada, o papel do PPP e do LTCAT na comprovacao do tempo especial para fins de aposentadoria especial, abordando tanto os aspectos trabalhistas quanto previdenciarios envolvidos na producao e utilizacao dessa prova tecnica.",
    "Serao analisados os caminhos juridicos para obtencao, retificacao e impugnacao do PPP, inclusive por meio de acao na Justica do Trabalho, bem como os reflexos desses documentos no reconhecimento do tempo especial perante o INSS e no processo judicial previdenciario.",
    "O curso tambem examina a jurisprudencia recente dos Tribunais Superiores sobre a eficacia dos Equipamentos de Protecao Individual (EPIs), com destaque para os precedentes vinculantes do STF e do STJ.",
    "A partir da experiencia dos professores e da analise de casos concretos e estrategias processuais, os participantes terao contato com tecnicas de atuacao profissional voltadas a construcao da prova do tempo especial e a conducao de demandas previdenciarias envolvendo aposentadoria especial.",
  ],
  highlights: [
    "Obtencao, retificacao e impugnacao do PPP e do LTCAT",
    "Atuacao na Justica do Trabalho e no contencioso previdenciario",
    "Jurisprudencia atual sobre EPI nos Tribunais Superiores",
    "Casos concretos e estrategias processuais aplicaveis a pratica",
  ],
  audienceList: [
    "Advogados previdenciaristas e trabalhistas que desejam aprofundar a prova do tempo especial.",
    "Servidores publicos e peritos que atuam com documentacao tecnica e analise de condicoes especiais de trabalho.",
    "Contadores e profissionais que auxiliam na organizacao da prova tecnica para demandas previdenciarias.",
    "Estudantes e profissionais em formacao que buscam repertorio pratico e atualizado sobre aposentadoria especial.",
  ],
  takeaways: [
    "Estruturar a prova tecnica do tempo especial com mais seguranca.",
    "Escolher a via adequada para obtencao ou retificacao do PPP.",
    "Usar precedentes do STF e do STJ de forma estrategica.",
    "Conduzir demandas previdenciarias com foco em prova e resultado.",
  ],
  professors: [
    {
      name: "Carlos Alberto Pereira de Castro",
      role: "Prof. Parte I",
      imageSrc: "/9-professores/carlos-alberto-pereira-de-castro.png",
      description:
        "Diretor de Relacionamento com o Direito do Trabalho do IBDP. Juiz do Trabalho da 12a Regiao-SC. Doutorando em Ciencias Juridicas pela Universidade Autonoma de Lisboa. Coautor de obras de referencia em Direito Previdenciario.",
    },
    {
      name: "Joao Batista Lazzari",
      role: "Prof. Parte II e Parte III",
      imageSrc: "/9-professores/joao-batista-lazzari.png",
      description:
        "Diretor de Processo Judicial Previdenciario do IBDP. Pos-doutor em Direito e Justica Constitucional. Juiz Federal do TRF da 4a Regiao (1996-2023). Coautor de obras classicas em Direito Previdenciario e pratica processual.",
    },
  ],
  modules: [
    {
      title: "Parte I | Prof. Carlos Alberto Pereira de Castro",
      subtitle: "PPP/LTCAT: producao da prova e aspectos trabalhistas",
      items: [
        "Comprovacao da atividade especial: conceitos e fundamentos normativos.",
        "Prova pericial: modalidades indireta, por similaridade e banco de laudos.",
        "Acao na Justica do Trabalho para obtencao e retificacao do PPP e do LTCAT.",
        "Cabimento, fundamentos juridicos, prazos e procedimento.",
        "Estrutura da peticao inicial e producao de provas com enfase na pericia.",
        "Efeitos da decisao judicial sobre o PPP e o LTCAT.",
        "Interferencia da aposentadoria especial no contrato de trabalho.",
      ],
    },
    {
      title: "Parte II | Prof. Joao Batista Lazzari",
      subtitle: "Tempo especial: aspectos previdenciarios",
      items: [
        "Reconhecimento do tempo especial e seus efeitos praticos.",
        "Jurisprudencia e evolucao normativa sobre o tema.",
        "Questoes controvertidas envolvendo atividades perigosas, eletricitarios, frentistas e atividades penosas.",
        "EPI na jurisprudencia previdenciaria: STF Tema 555.",
        "EPI na jurisprudencia previdenciaria: STJ Tema 1090.",
        "IRDR Tema 15 do TRF4 e Tema 213 da TNU.",
        "Estrategias processuais para descaracterizar os efeitos do EPI a luz das teses fixadas pelo STJ.",
      ],
    },
    {
      title: "Parte III | Professores Carlos Alberto Pereira de Castro e Joao Batista Lazzari",
      subtitle: "Casos concretos e estrategia aplicada",
      items: [
        "Casos concretos de obtencao e revisao de PPP na Justica do Trabalho.",
        "Casos concretos com analise de provas em acoes previdenciarias.",
        "Dicas de elaboracao de peticoes na Justica do Trabalho e na Justica Federal.",
      ],
    },
  ],
  jurisprudence: [
    "STF Tema 1209 sobre atividades perigosas, com destaque para vigilantes.",
    "STF Tema 555 sobre eficacia dos Equipamentos de Protecao Individual.",
    "STJ Tema 1090 e seus reflexos na prova do tempo especial.",
    "TRF4 IRDR Tema 15 e TNU Tema 213 na interpretacao da materia.",
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
              title="Prova tecnica, estrategia processual e leitura jurisprudencial em uma mesma imersao"
              description="A estrutura da pagina segue uma narrativa de conversao, mas o conteudo foi construido para valorizar profundidade tecnica, aplicacao pratica e posicionamento do Instituto ESC."
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
                O curso conecta a producao da prova na esfera trabalhista com o aproveitamento do material probatorio no contencioso previdenciario, incluindo a discussao atual sobre EPI nos precedentes vinculantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Pensado para quem precisa atuar com profundidade tecnica e seguranca estrategica"
            description="A imersao foi desenhada para profissionais que lidam com prova tecnica, aposentadoria especial e litigancia previdenciaria de forma pratica."
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
            eyebrow="Professores"
            title="Docentes com repertorio pratico e autoridade no tema"
            description="A conducao da imersao reune experiencia judicial, producao academica e vivencia direta com o contencioso previdenciario e trabalhista."
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
            eyebrow="Conteudo Programatico"
            title="Um percurso estruturado da prova tecnica a estrategia processual"
            description="O curso foi dividido em tres partes para conectar base normativa, tecnica de prova, jurisprudencia e aplicacao pratica em casos concretos."
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
                      Modulo tematico
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
              A pagina reforca o valor tecnico do curso ao destacar os precedentes que impactam diretamente a construcao e a contestacao da prova do tempo especial.
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
              Uma imersao para transformar prova tecnica em estrategia de resultado
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              Se a sua atuacao exige dominio de PPP, LTCAT, pericia, EPI e aposentadoria especial, esta pagina agora conta com uma rota propria para apresentar o curso com profundidade e mais poder de conversao.
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
                  Hero, prova de valor, professores, conteudo e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversao
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botoes claros direcionando para o fluxo de cadastro ja existente.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Consistencia
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Mesma paleta, tipografia e linguagem visual do restante do site.
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
