import type { LandingLanguage } from "@/components/landing/content";

export const registrationContent = {
  pt: {
    badge: "Cadastro Instituto ESC",
    title: "Faça seu\ncadastro",
    highlight: "em poucos passos.",
    formTitle: "Preencha seu cadastro",
    formDescription: "Informe seus dados e entraremos em contato.",
    fields: {
      fullName: "Nome completo",
      fullNamePlaceholder: "Como você deseja ser chamado",
      email: "E-mail profissional",
      emailPlaceholder: "voce@escritorio.com.br",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(00) 00000-0000",
      password: "Senha",
      passwordPlaceholder: "Crie uma senha",
      confirmPassword: "Confirmar senha",
      confirmPasswordPlaceholder: "Confirme sua senha",
    },
    consent:
      "Autorizo o contato da equipe do Instituto ESC para retorno sobre meu cadastro.",
    submitCta: "Concluir cadastro",
    backCta: "Voltar para a página inicial",
  },
  en: {
    badge: "Instituto ESC Registration",
    title: "Create your\naccount",
    highlight: "in just a few steps.",
    formTitle: "Complete your registration",
    formDescription: "Enter your information and we will get in touch.",
    fields: {
      fullName: "Full name",
      fullNamePlaceholder: "How would you like to be addressed?",
      email: "Professional email",
      emailPlaceholder: "you@lawfirm.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "+55 (00) 00000-0000",
      password: "Password",
      passwordPlaceholder: "Create a password",
      confirmPassword: "Confirm password",
      confirmPasswordPlaceholder: "Confirm your password",
    },
    consent:
      "I authorize the Instituto ESC team to contact me regarding my registration.",
    submitCta: "Complete registration",
    backCta: "Back to the homepage",
  },
} as const satisfies Record<LandingLanguage, unknown>;

export type RegistrationCopy =
  (typeof registrationContent)[keyof typeof registrationContent];
