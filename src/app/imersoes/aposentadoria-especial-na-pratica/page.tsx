import type { Metadata } from "next";

import { AposentadoriaEspecialCoursePage } from "@/components/landing/aposentadoria-especial-course-page";

export const metadata: Metadata = {
  title: "Aposentadoria Especial na Prática | Instituto ESC",
  description:
    "Curso presencial sobre PPP, LTCAT e prova do tempo especial, com abordagem prática integrada entre estratégia trabalhista e previdenciária.",
};

export default function AposentadoriaEspecialNaPraticaPage() {
  return <AposentadoriaEspecialCoursePage />;
}
