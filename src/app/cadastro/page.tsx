import type { Metadata } from "next";

import { CadastroPageClient } from "@/components/cadastro/cadastro-page-client";

export const metadata: Metadata = {
  title: "Cadastro | Instituto ESC",
  description:
    "Página de cadastro do Instituto ESC para profissionais que desejam iniciar sua jornada no ecossistema previdenciário.",
};

export default function CadastroPage() {
  return <CadastroPageClient />;
}
