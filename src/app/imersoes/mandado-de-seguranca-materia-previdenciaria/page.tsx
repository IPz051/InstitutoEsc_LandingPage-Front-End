import type { Metadata } from "next";

import { MandadoSegurancaCoursePage } from "@/components/landing/mandado-seguranca-course-page";

export const metadata: Metadata = {
  title: "Pratica: Mandado de Seguranca em Materia Previdenciaria | Instituto ESC",
  description:
    "Curso presencial sobre mandado de seguranca em materia previdenciaria, com enfoque pratico em cabimento, rito, liminar, recursos e jurisprudencia do STF e do STJ.",
};

export default function MandadoDeSegurancaMateriaPrevidenciariaPage() {
  return <MandadoSegurancaCoursePage />;
}
