import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[#f5f6fa] px-3 pb-20 pt-6 sm:px-5 sm:pb-24 lg:pb-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[1160px] rounded-[32px] bg-[linear-gradient(135deg,#2f4fbe_0%,#4460d5_52%,#6175ef_100%)] px-6 py-16 text-center shadow-[0_26px_70px_rgba(46,79,190,0.22)] sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[760px]">
            <Image
              src="/final-cta-logo-white.png"
              alt="Instituto ESC"
              width={540}
              height={540}
              className="mx-auto h-16 w-auto sm:h-20"
            />

            <h2 className="section-title mx-auto mt-8 max-w-[760px] text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.7rem] lg:text-[4.8rem]">
              Pronto para construir sua autoridade?
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-white/88 sm:text-[1.65rem] sm:leading-10">
              Junte-se aos advogados que estão à frente do novo Direito
              Previdenciário.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href="/cadastro"
                className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[var(--primary)] transition hover:bg-[#f4f7ff]"
              >
                Quero Participar
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#planos"
                className="inline-flex min-w-[240px] items-center justify-center rounded-full border border-white/45 bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/8"
              >
                Conhecer os planos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
