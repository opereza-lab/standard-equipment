import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NKW84WEWRN" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NKW84WEWRN');`}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wb6sjmppjt");`}
      </Script>
    </html>
  );
}
