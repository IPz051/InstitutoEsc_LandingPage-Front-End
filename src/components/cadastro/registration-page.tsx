import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function RegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f6f7fb] px-3 pb-16 pt-32 sm:px-5 sm:pb-20 sm:pt-36">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0))]" />
        <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-[rgba(91,110,240,0.12)] blur-3xl" />
        <div className="absolute right-0 top-36 h-72 w-72 rounded-full bg-[rgba(46,79,190,0.10)] blur-3xl" />

        <div className="container-shell relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(420px,0.95fr)] lg:items-start">
            <div className="max-w-[560px] self-start justify-self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,79,190,0.12)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-[0_10px_30px_rgba(46,79,190,0.08)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
                Cadastro Instituto ESC
              </div>

              <h1 className="section-title mt-8 text-[1rem] leading-[0.96] font-extrabold tracking-[-0.06em] text-[var(--foreground)] sm:text-[4rem] lg:text-[4.7rem]">
                Faça seu
                <br />
                cadastro
                <br />
                <span className="gradient-text">em poucos passos.</span>
              </h1>

            </div>

            <div
              id="formulario"
              className="glass-panel rounded-[32px] border border-white/75 p-6 sm:p-8"
            >
              <h2 className="section-title text-[2.1rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-[2.7rem]">
                Preencha seu cadastro
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
                Informe seus dados e entraremos em contato.
              </p>

              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="field-label">
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    className="field-input"
                    placeholder="Como voce deseja ser chamado"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="field-label">
                      E-mail profissional
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field-input"
                      placeholder="voce@escritorio.com.br"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefone" className="field-label">
                      WhatsApp
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      className="field-input"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="senha" className="field-label">
                      Senha
                    </label>
                    <input
                      id="senha"
                      name="senha"
                      type="password"
                      className="field-input"
                      placeholder="Crie uma senha"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirmar-senha" className="field-label">
                      Confirmar senha
                    </label>
                    <input
                      id="confirmar-senha"
                      name="confirmarSenha"
                      type="password"
                      className="field-input"
                      placeholder="Confirme sua senha"
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-[rgba(17,23,47,0.08)] bg-white/70 p-4 sm:p-5">
                  <label className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-foreground)]">
                    <input
                      type="checkbox"
                      name="termos"
                      className="mt-1 h-4 w-4 rounded border-[rgba(17,23,47,0.16)] text-[var(--primary)]"
                    />
                    <span>
                      Autorizo o contato da equipe do Instituto ESC para
                      retorno sobre meu cadastro.
                    </span>
                  </label>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-base font-semibold text-white shadow-[0_22px_48px_rgba(46,79,190,0.22)] transition hover:bg-[#2845a8] sm:min-w-[220px]"
                  >
                    Concluir cadastro
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <Link
                    href="/"
                    className="text-center text-sm font-semibold text-[var(--primary)] transition hover:text-[#2845a8] sm:text-left"
                  >
                    Voltar para a pagina inicial
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
