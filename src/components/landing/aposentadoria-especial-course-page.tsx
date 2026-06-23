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
    "Aposentadoria Especial na Pratica: Domine PPP, LTCAT e a Prova do Tempo Especial",
  description:
    "Imersao pratica e integrada sobre a producao da prova tecnica do tempo especial, com enfoque em PPP, LTCAT, pericia, EPIs e estrategias trabalhistas e previdenciarias para demandas de aposentadoria especial.",
  category: "Direito do Trabalho e Direito Previdenciario",
  duration: "11 horas",
  location: "Curso presencial",
  audience:
    "Advogados, servidores publicos, peritos, contadores e estudantes de Direito",
  ctaLabel: "Quero reservar minha vaga",
  secondaryCta: "Ver conteudo programatico",
  paragraphs: [
    "Grande parte das acoes envolvendo aposentadoria especial nao depende apenas da existencia do direito, mas da qualidade da prova tecnica apresentada. Na pratica profissional, sao recorrentes situacoes como PPP incompleto, ausencia ou inconsistencias no LTCAT, divergencias sobre o uso e a eficacia dos Equipamentos de Protecao Individual e dificuldades na producao de prova pericial adequada.",
    "Esses cenarios exigem do advogado uma atuacao estrategica que conecta, ao mesmo tempo, aspectos trabalhistas e previdenciarios, alem de exigir leitura atualizada da jurisprudencia dos Tribunais Superiores e dos tribunais regionais.",
    "O curso foi estruturado para oferecer uma visao integrada e pratica sobre a prova do tempo especial, permitindo que o profissional atue com mais seguranca na construcao da prova, na obtencao e retificacao de documentos e na conducao de demandas envolvendo aposentadoria especial.",
    "A pagina segue o mesmo padrao visual das anteriores, mas com uma narrativa orientada para profundidade tecnica, aplicacao imediata e integracao entre estrategia processual e prova previdenciaria.",
  ],
  highlights: [
    "Fundamentos juridicos da comprovacao da atividade especial.",
    "Utilizacao tecnica do PPP e do LTCAT na prova previdenciaria.",
    "Estrategias para obtencao e retificacao do PPP por meio de acao trabalhista.",
    "Modalidades de prova pericial aplicadas ao tempo especial.",
    "Interpretacao da jurisprudencia atual do STF, STJ e tribunais regionais.",
    "Discussao juridica sobre eficacia dos EPIs e estrategias processuais.",
  ],
  audienceList: [
    "Advogados previdenciaristas que atuam com aposentadoria especial e prova tecnica.",
    "Advogados trabalhistas que precisam integrar a via laboral a estrategia previdenciaria.",
    "Servidores publicos, peritos judiciais e contadores envolvidos com documentacao tecnica e analise probatoria.",
    "Estudantes de Direito interessados em atuar com tempo especial e litigancia previdenciaria.",
  ],
  takeaways: [
    "Construir prova tecnica mais robusta para reconhecimento do tempo especial.",
    "Escolher com mais seguranca a estrategia de obtencao e retificacao do PPP.",
    "Argumentar sobre eficacia do EPI com base em jurisprudencia relevante.",
    "Integrar estrategia trabalhista e previdenciaria em casos concretos.",
  ],
  professors: [
    {
      name: "Carlos Alberto Pereira de Castro",
      role: "Professor | Modulo 1",
      imageSrc: "/9-professores/carlos-alberto-pereira-de-castro.png",
      description:
        "Diretor de Relacionamento com o Direito do Trabalho do IBDP, Juiz do Trabalho da 12a Regiao-SC, doutorando em Ciencias Juridicas pela Universidade Autonoma de Lisboa e coautor de obras de referencia em Direito Previdenciario.",
    },
    {
      name: "Joao Batista Lazzari",
      role: "Professor | Modulo 2 e Oficina Pratica",
      imageSrc: "/9-professores/joao-batista-lazzari.png",
      description:
        "Diretor de Processo Judicial Previdenciario do IBDP, pos-doutor em Direito e Justica Constitucional, Juiz Federal do TRF da 4a Regiao (1996-2023) e coautor de obras classicas em Direito Previdenciario e pratica processual.",
    },
  ],
  modules: [
    {
      title: "Modulo 1 | PPP e LTCAT: producao da prova e aspectos trabalhistas",
      subtitle: "Conducao por Carlos Alberto Pereira de Castro",
      items: [
        "Fundamentos da comprovacao da atividade especial.",
        "Modalidades de prova pericial: direta, indireta e por similaridade.",
        "Acao na Justica do Trabalho para obtencao ou retificacao do PPP.",
        "Fundamentos juridicos e cabimento da acao.",
        "Estrutura da peticao inicial.",
        "Producao de prova pericial.",
        "Efeitos da decisao judicial sobre PPP e LTCAT.",
        "Interferencia da aposentadoria especial no contrato de trabalho.",
      ],
    },
    {
      title: "Modulo 2 | Tempo especial: aspectos previdenciarios",
      subtitle: "Conducao por Joao Batista Lazzari",
      items: [
        "Reconhecimento do tempo especial e seus efeitos.",
        "Evolucao normativa e jurisprudencial.",
        "Atividades perigosas e penosas.",
        "Analise de categorias profissionais, como vigilantes, eletricitarios e frentistas.",
        "Equipamentos de Protecao Individual na jurisprudencia previdenciaria.",
        "Tema 555 do STF.",
        "Tema 1090 do STJ.",
        "IRDR 15 do TRF4 e Tema 213 da TNU.",
        "Estrategias processuais para descaracterizacao da eficacia do EPI.",
      ],
    },
    {
      title: "Modulo 3 | Oficina pratica",
      subtitle: "Atividade conduzida pelos dois professores com situacoes concretas",
      items: [
        "Casos reais de obtencao e revisao de PPP na Justica do Trabalho.",
        "Analise de prova tecnica em acoes previdenciarias.",
        "Orientacoes praticas para elaboracao de peticoes.",
        "Integracao entre estrategias trabalhistas e previdenciarias.",
      ],
    },
  ],
  jurisprudence: [
    "Leitura integrada dos precedentes relevantes do STF, STJ, tribunais regionais e TNU.",
    "Analise pratica da jurisprudencia sobre eficacia dos EPIs e descaracterizacao da exposicao.",
    "Uso estrategico da prova pericial e dos documentos tecnicos na aposentadoria especial.",
    "Conexao entre discussao trabalhista e aproveitamento previdenciario do material probatorio.",
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
              title="Prova tecnica, estrategia processual e integracao entre as esferas trabalhista e previdenciaria"
              description="A ultima landing segue o mesmo padrao que criamos, preservando hierarquia visual, contraste e estrutura de conversao com mais densidade tecnica no conteudo."
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
              O que voce vai aprender
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
                O curso foi desenhado para unir prova tecnica, estrategia processual e leitura jurisprudencial em um unico percurso de aprendizagem com aplicacao imediata na aposentadoria especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fa] py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Para Quem"
            title="Pensado para profissionais que precisam dominar a prova do tempo especial com mais seguranca"
            description="A narrativa da pagina deixa claro o ganho pratico para quem atua ou deseja atuar com aposentadoria especial em alto nivel tecnico."
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
            title="Conducao por dois referenciais da pratica previdenciaria"
            description="A estrutura dos professores acompanha o mesmo desenho das outras landings, reforcando autoridade, consistencia visual e leitura clara."
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
            title="Tres modulos para conectar documento tecnico, prova pericial e estrategia processual"
            description="Mantive o mesmo tratamento de cor e contraste das paginas mais recentes para que a leitura continue forte nas secoes escuras."
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
              Aplicacao pratica em destaque
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              Esta secao sintetiza o valor tecnico da imersao e mostra que o curso entrega repertorio util para atuar com aposentadoria especial desde a prova documental ate a estrategia judicial.
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
              Uma imersao para transformar prova tecnica em seguranca de atuacao na aposentadoria especial
            </h3>
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-white/82 sm:text-lg">
              A ultima landing segue o mesmo padrao que consolidamos nas anteriores, com foco em contraste, clareza, autoridade docente e poder de conversao.
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
                  Hero, prova de valor, professores, modulos e CTA final.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <Users className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Conversao
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Botoes integrados ao fluxo de cadastro ja existente no projeto.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                <BookOpenText className="h-5 w-5 text-white/78" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/56">
                  Consistencia
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Mesma linguagem visual, contraste e hierarquia das paginas anteriores.
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
