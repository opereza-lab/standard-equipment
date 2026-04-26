import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["800", "900"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "Uuxd5wCX4fH5GuTfTiiUee1DQpK-jb2D8yF4U78YtmM",
  },
  title: {
    default: "Standard Equipment | Ingeniería aplicada al diseño de soluciones para Construcción, Minería e Industria en General",
    template: "%s | Standard Equipment",
  },
  description:
    "Empresa de Ingeniería Mecánica aplicada a la Fabricación de equipos para los rubros de Minería, Construcción, manejo de Materiales a granel e Industria en General con más de 20 años de experiencia.",
  keywords: [
    "equipamiento industrial Chile",
    "fabricación equipos minería",
    "capachos de escombros",
    "capachos roll over",
    "atril neumáticos OTR",
    "soporte baldes face shovel",
    "equipos construcción Chile",
    "big bag cargadores descargadores",
    "rack truckshop minería",
    "fabricación acero a medida",
    "equipamiento minería rajo abierto",
    "equipos CAEX",
    "Standard Equipment Chile",
    "equipamiento industrial Santiago",
  ],
  authors: [{ name: "Standard Equipment", url: "https://www.standard-equipment.cl" }],
  creator: "Standard Equipment",
  metadataBase: new URL("https://www.standard-equipment.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Standard Equipment | Fabricación de Equipamiento Industrial en Chile",
    description:
      "Más de 20 años fabricando equipamiento industrial en acero a medida para construcción, minería y materiales a granel en Chile.",
    type: "website",
    url: "https://www.standard-equipment.cl",
    siteName: "Standard Equipment",
    locale: "es_CL",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Standard Equipment - Equipamiento Industrial Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Equipment | Equipamiento Industrial Chile",
    description: "Fabricación de equipamiento industrial en acero a medida para construcción y minería.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className={`min-h-full flex flex-col antialiased ${inter.variable} ${barlowCondensed.variable}`}>
        {children}
        <WhatsAppButton />
      </body>
      {/* Schema.org — datos estructurados para Google */}
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Standard Equipment",
        "url": "https://www.standard-equipment.cl",
        "logo": "https://www.standard-equipment.cl/images/logo-white.png",
        "description": "Más de 20 años fabricando equipamiento industrial en acero a medida para construcción, minería y materiales a granel en Chile.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santiago",
          "addressCountry": "CL"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56-2-2938-1290",
          "contactType": "sales",
          "email": "contacto@standard-equipment.cl",
          "availableLanguage": "Spanish"
        },
        "sameAs": [],
        "areaServed": "CL",
        "knowsAbout": [
          "Equipamiento industrial",
          "Fabricación en acero",
          "Equipamiento minería",
          "Equipamiento construcción",
          "Materiales a granel"
        ]
      })}} />

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
