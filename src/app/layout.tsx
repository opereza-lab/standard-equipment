import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Standard Equipment | Soluciones de Ingeniería Industrial",
  description:
    "Fabricantes de equipamiento industrial para construcción, minería, materiales a granel y más. Diseño y fabricación en acero a medida.",
  keywords:
    "equipamiento industrial, construcción, minería, big bag, capachos, Standard Equipment, Chile",
  openGraph: {
    title: "Standard Equipment | Soluciones de Ingeniería Industrial",
    description:
      "Fabricantes de equipamiento industrial para construcción, minería y materiales a granel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
