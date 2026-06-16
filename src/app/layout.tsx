import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto ESC | Direito Previdenciário",
  description:
    "Landing page institucional do Instituto ESC com foco em formação premium para advogados previdenciaristas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-[var(--background)] font-[family:var(--font-manrope)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
