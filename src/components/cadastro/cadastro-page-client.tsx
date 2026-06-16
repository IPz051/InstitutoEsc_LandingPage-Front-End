"use client";

import { useEffect, useState } from "react";

import { registrationContent } from "@/components/cadastro/content";
import { RegistrationPage } from "@/components/cadastro/registration-page";
import {
  LANDING_LANGUAGE_STORAGE_KEY,
  landingContent,
  type LandingLanguage,
} from "@/components/landing/content";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";

const htmlLangByLanguage: Record<LandingLanguage, string> = {
  pt: "pt-BR",
  en: "en",
};

const navigationItems: Array<{ label: string; href: string }> = [];

export function CadastroPageClient() {
  const [language, setLanguage] = useState<LandingLanguage>("pt");
  const landingCopy = landingContent[language];
  const registrationCopy = registrationContent[language];

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
    <>
      <Navbar
        items={navigationItems}
        language={language}
        onLanguageChange={setLanguage}
        copy={landingCopy.nav}
      />
      <RegistrationPage copy={registrationCopy} />
      <Footer copy={landingCopy.footer} />
    </>
  );
}
