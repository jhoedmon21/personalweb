import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Jhon Monroy | Maestro en Ciencias Informáticas",
  description: "Profesional con sólida experiencia en el desarrollo de aplicaciones y sistemas de información. Especialista en I+D+i, Investigador y Docente Universitario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
