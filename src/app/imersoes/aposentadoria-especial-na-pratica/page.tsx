import type { Metadata } from "next";

import { AposentadoriaEspecialCoursePage } from "@/components/landing/aposentadoria-especial-course-page";

export const metadata: Metadata = {
  title: "Aposentadoria Especial na Pratica | Instituto ESC",
  description:
    "Curso presencial sobre PPP, LTCAT e prova do tempo especial, com abordagem pratica integrada entre estrategia trabalhista e previdenciaria.",
};

export default function AposentadoriaEspecialNaPraticaPage() {
  return <AposentadoriaEspecialCoursePage />;
}
