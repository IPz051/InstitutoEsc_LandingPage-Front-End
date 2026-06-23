import type { Metadata } from "next";

import { PppLtcatCoursePage } from "@/components/landing/ppp-ltcat-course-page";

export const metadata: Metadata = {
  title:
    "PPP e LTCAT na Aposentadoria Especial | Instituto ESC",
  description:
    "Curso presencial sobre obtencao, retificacao e impugnacao do PPP e do LTCAT, com foco em aposentadoria especial, prova tecnica e jurisprudencia sobre EPIs.",
};

export default function PppLtcatAposentadoriaEspecialPage() {
  return <PppLtcatCoursePage />;
}
