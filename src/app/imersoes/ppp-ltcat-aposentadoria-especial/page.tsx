import type { Metadata } from "next";

import { PppLtcatCoursePage } from "@/components/landing/ppp-ltcat-course-page";

export const metadata: Metadata = {
  title:
    "PPP e LTCAT na Aposentadoria Especial | Instituto ESC",
  description:
    "Curso presencial sobre obten??o, retifica??o e impugna??o do PPP e do LTCAT, com foco em ap?sentadoria especial, prova t?cnica e jurisprud?ncia sobre EPIs.",
};

export default function PppLtcatAposentadoriaEspecialPage() {
  return <PppLtcatCoursePage />;
}
