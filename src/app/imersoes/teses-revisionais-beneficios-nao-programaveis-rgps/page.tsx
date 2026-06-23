import type { Metadata } from "next";

import { TesesRevisionaisCoursePage } from "@/components/landing/teses-revisionais-course-page";

export const metadata: Metadata = {
  title:
    "Pr?tica: Teses Revisionais Aplic?veis aos Benef?cios N?o Programaveis do RGPS | Instituto ESC",
  description:
    "Curso presencial sobre teses revisionais aplicaveis a benef?cios por incapacidade e pens?o por morte no RGPS ap?s a EC n. 103/2019, com casos concretos e modelos pr?ticos.",
};

export default function TesesRevisionaisBeneficiosNaoProgramaveisRgspPage() {
  return <TesesRevisionaisCoursePage />;
}
