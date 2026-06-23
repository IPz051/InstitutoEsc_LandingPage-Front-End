import type { Metadata } from "next";

import { MandadoSegurancaCoursePage } from "@/components/landing/mandado-seguranca-course-page";

export const metadata: Metadata = {
  title: "Pr?tica: Mandado de Seguran?a em Mat?ria Previdenciaria | Instituto ESC",
  description:
    "Curso presencial sobre mandado de seguran?a em mat?ria previdenci?ria, com enfoque pr?tico em cabimento, rito, liminar, recursos e jurisprud?ncia do STF e do STJ.",
};

export default function MandadoDeSegurancaMateriaPrevidenciariaPage() {
  return <MandadoSegurancaCoursePage />;
}
