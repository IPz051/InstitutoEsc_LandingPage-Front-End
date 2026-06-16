import { EcosystemSection } from "@/components/landing/ecosystem-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { ImmersionsSection } from "@/components/landing/immersions-section";
import { LeadershipSection } from "@/components/landing/leadership-section";
import { Navbar } from "@/components/landing/navbar";
import { PostgraduateSection } from "@/components/landing/postgraduate-section";
import { ProfessionalsSection } from "@/components/landing/professionals-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

const navigationItems = [
  { label: "O Instituto", href: "#instituto" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Cursos", href: "#cursos" },
  { label: "Formação", href: "#formacao" },
  { label: "Professores", href: "#professores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar items={navigationItems} />
      <HeroSection />
      <EcosystemSection />
      <LeadershipSection />
      <ImmersionsSection />
      <PostgraduateSection />
      <ProfessionalsSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
