import type { Metadata } from "next";

import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { RegistrationPage } from "@/components/cadastro/registration-page";

const navigationItems: Array<{ label: string; href: string }> = [];

export const metadata: Metadata = {
  title: "Cadastro | Instituto ESC",
  description:
    "Pagina de cadastro do Instituto ESC para profissionais que desejam iniciar sua jornada no ecossistema previdenciario.",
};

export default function CadastroPage() {
  return (
    <>
      <Navbar items={navigationItems} />
      <RegistrationPage />
      <Footer />
    </>
  );
}
