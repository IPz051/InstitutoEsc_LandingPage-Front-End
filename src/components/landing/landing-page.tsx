"use client";

import { useEffect, useState } from "react";

import {
  LANDING_LANGUAGE_STORAGE_KEY,
  landingContent,
  type LandingLanguage,
} from "@/components/landing/content";
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

const htmlLangByLanguage: Record<LandingLanguage, string> = {
  pt: "pt-BR",
  en: "en",
};

export function LandingPage() {
  const [language, setLanguage] = useState<LandingLanguage>("pt");
  const copy = landingContent[language];

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(
      LANDING_LANGUAGE_STORAGE_KEY,
    );

    if (storedLanguage === "pt" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANDING_LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = htmlLangByLanguage[language];
  }, [language]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar
        items={copy.nav.items}
        language={language}
        onLanguageChange={setLanguage}
        copy={copy.nav}
      />
      <HeroSection copy={copy.hero} />
      <EcosystemSection copy={copy.ecosystem} />
      <LeadershipSection copy={copy.leadership} />
      <ImmersionsSection copy={copy.immersions} />
      <PostgraduateSection copy={copy.postgraduate} />
      <ProfessionalsSection key={`professionals-${language}`} copy={copy.professionals} />
      <TestimonialsSection copy={copy.testimonials} />
      <PricingSection copy={copy.pricing} />
      <FinalCtaSection copy={copy.finalCta} />
      <Footer copy={copy.footer} />
    </main>
  );
}
