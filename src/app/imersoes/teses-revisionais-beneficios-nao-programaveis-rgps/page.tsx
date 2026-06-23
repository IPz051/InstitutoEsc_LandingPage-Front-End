import type { Metadata } from "next";

import { TesesRevisionaisCoursePage } from "@/components/landing/teses-revisionais-course-page";

export const metadata: Metadata = {
  title:
    "Pratica: Teses Revisionais Aplicaveis aos Beneficios Nao Programaveis do RGPS | Instituto ESC",
  description:
    "Curso presencial sobre teses revisionais aplicaveis a beneficios por incapacidade e pensao por morte no RGPS apos a EC n. 103/2019, com casos concretos e modelos praticos.",
};

export default function TesesRevisionaisBeneficiosNaoProgramaveisRgspPage() {
  return <TesesRevisionaisCoursePage />;
}
