import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustriasSection from "@/components/IndustriasSection";
import ProductosDestacados from "@/components/ProductosDestacados";
import PorQueNosotros from "@/components/PorQueNosotros";
import PortfolioSection from "@/components/PortfolioSection";
import CTABanner from "@/components/CTABanner";
import ClientesSection from "@/components/ClientesSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Standard Equipment | Equipos Industriales Chile",
  description: "Más de 20 años creando soluciones para la industria. Fabricamos equipos a medida para construcción, minería y materiales a granel en Chile y Latinoamérica. Certificación MC y WPS-PQR.",
  alternates: {
    canonical: "https://www.standard-equipment.cl",
  },
  openGraph: {
    title: "Standard Equipment | Equipos Industriales Chile",
    description: "Más de 20 años creando soluciones para la industria. Equipos para construcción, minería y materiales a granel en Chile y Latinoamérica.",
    url: "https://www.standard-equipment.cl",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Standard Equipment",
  "url": "https://www.standard-equipment.cl",
  "logo": "https://www.standard-equipment.cl/images/logo-white.png",
  "description": "Empresa chilena fabricante de equipos industriales a medida para construcción, minería y materiales a granel. Más de 20 años de experiencia. Certificación MC y WPS-PQR.",
  "foundingDate": "2004",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santiago",
    "addressCountry": "CL"
  },
  "areaServed": ["Chile", "Perú", "Argentina", "Colombia", "México", "Bolivia", "Ecuador", "Uruguay", "Paraguay", "Venezuela", "Brasil", "Latinoamérica"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+56229381290",
    "contactType": "customer service",
    "email": "contacto@standard-equipment.cl",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://www.linkedin.com/company/standardequipmentcl",
    "https://www.instagram.com/standard__equipment",
    "https://www.youtube.com/@Standard-Equipment",
    "https://www.vimeo.com/standardequipmentchile"
  ]
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Standard Equipment",
  "url": "https://www.standard-equipment.cl",
  "description": "Equipos industriales fabricados a medida para construcción, minería y materiales a granel en Chile.",
  "inLanguage": "es-CL",
  "publisher": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  }
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
      <Navbar />
      <main className="pt-0">
        <HeroSection />
        <IndustriasSection />
        <ProductosDestacados />
        <PorQueNosotros />
        <PortfolioSection />
        <CTABanner />
        <ClientesSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
