import Image from "next/image";
import Link from "next/link";

const ecosystemLinks = [
  { label: "Plataforma", href: "#estrutura" },
  { label: "Cursos presenciais", href: "#cursos" },
  { label: "PrevExperience", href: "#cursos" },
  { label: "Prev Summit", href: "#cursos" },
  { label: "Metis", href: "#estrutura" },
  { label: "AMS Advocacia", href: "#instituto" },
];

const courseLinks = [
  { label: "Cursos presenciais", href: "#cursos" },
  { label: "Formação", href: "#formacao" },
  { label: "Planos", href: "#planos" },
  { label: "Área do Aluno", href: "#area-do-aluno" },
];

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/45">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[1.05rem] text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d1530] text-white">
      <div className="container-shell py-14 sm:py-16 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-16">
          <div className="max-w-[340px]">
            <Image
              src="/instituto-esc-logo.png"
              alt="Instituto ESC"
              width={220}
              height={70}
              className="h-10 w-auto brightness-0 invert"
            />

            <p className="mt-8 text-xl leading-9 text-white/68">
              O Novo Ecossistema do Direito Previdenciário
            </p>
          </div>

          <FooterColumn title="Ecossistema" links={ecosystemLinks} />
          <FooterColumn title="Cursos" links={courseLinks} />
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-[1.05rem] text-white/58 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Instituto ESC. Todos os direitos reservados.</p>
            <p>Florianópolis - SC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
