import type { Metadata } from "next";
import CapachoClientPage from "./CapachoClientPage";

export const metadata: Metadata = {
  title: "Capacho Escombros con Autovolteo | Cuna para Escombros | Standard Equipment",
  description: "Capacho Escombros con Autovolteo (también llamado Cuna para Escombros) operado 100% por la grúa, sin maniobra adicional. Ideal para piques, túneles y movimiento de tierras. 1.000 a 3.000 litros. Disponible en Chile y Latinoamérica.",
  keywords: [
    // Nombre del producto y variantes
    "capacho escombros",
    "capacho para escombros",
    "capacho",
    "capachos escombros con autovolteo",
    "capacho escombros autovolteo",
    "capacho de escombros autovolteo",
    // Cuna — nombre alternativo regional
    "cuna",
    "cuna para escombros",
    "cuna escombros",
    // Autovolteo
    "autovolteo",
    "auto volteo",
    // Sin maniobra — diferenciador clave
    "capachos escombros sin maniobra",
    "capacho para escombros sin maniobra",
    "capacho sin maniobra",
    // Movimiento de tierras y piques
    "movimiento de tierra",
    "movimientos de tierras",
    "piques",
    "construcción de piques",
    "capacho piques",
    "capacho piques y túneles",
    // Volúmenes exactos — alta intención de compra
    "capacho escombros 1000 litros",
    "capachos escombros 1500 litros",
    "capacho escombros 2000 litros",
    "capacho escombros 3000 litros",
    // Grúa e izaje
    "accesorios grúa",
    "equipos para izaje con grúa",
    "capacho grúa",
    "capacho grúa construcción",
    "retiro escombros grúa",
    // Industria / obra
    "retiro escombros construcción",
    "galerías construcción",
    "construcción metro",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/productos/capacho-escombros-autovolteo",
  },
  openGraph: {
    title: "Capacho Escombros con Autovolteo | Cuna para Escombros | Standard Equipment",
    description: "Capacho Escombros con Autovolteo operado 100% por la grúa, sin maniobra adicional. Para piques, túneles y movimiento de tierras. 1.000 a 3.000 litros.",
    url: "https://www.standard-equipment.cl/productos/capacho-escombros-autovolteo",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Capacho Escombros con Autovolteo",
  "alternateName": ["Cuna para Escombros", "Cuna Escombros", "Capacho Autovolteo", "Capacho para Escombros"],
  "description": "Capacho Escombros con Autovolteo (también llamado Cuna para Escombros) operado exclusivamente por la grúa, sin maniobra adicional. Disponible en 1.000, 1.500, 2.000 y 3.000 litros. Ideal para piques, túneles, galerías y movimiento de tierras en construcción.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/productos/capacho-escombros-autovolteo",
  "category": "Accesorios Grúa / Equipos para Izaje con Grúa",
  "audience": {
    "@type": "Audience",
    "audienceType": "Empresas construcción, contratistas mineros, constructoras de piques y túneles"
  },
  "areaServed": ["Chile", "Perú", "Argentina", "Colombia", "México", "Bolivia", "Ecuador", "Uruguay", "Paraguay", "Venezuela", "Brasil", "Latinoamérica"],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "CLP",
    "price": "0",
    "url": "https://www.standard-equipment.cl/contacto",
    "seller": {
      "@type": "Organization",
      "name": "Standard Equipment"
    }
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un Capacho Escombros con Autovolteo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Capacho Escombros con Autovolteo es un accesorio de grúa diseñado para el retiro de escombros en obras de construcción, piques y túneles. Su mecanismo de autovolteo permite que el vaciado sea operado exclusivamente por la grúa, sin necesidad de maniobra adicional ni equipos de apoyo, reduciendo tiempos y aumentando la seguridad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué se llama 'Cuna' al Capacho de Escombros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la industria de la construcción de Chile y Latinoamérica, el Capacho para Escombros es comúnmente conocido como 'Cuna' o 'Cuna para Escombros' por su forma característica. Tanto 'Cuna Escombros' como 'Capacho Escombros' se refieren al mismo equipo de izaje para retiro de material de excavación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué significa que el Capacho funcione 'sin maniobra'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Capacho Escombros sin maniobra significa que el vaciado se activa automáticamente mediante el movimiento de la propia grúa, sin requerir personal adicional en el punto de descarga ni cambiar el accesorio. Esto elimina tiempos muertos, reduce riesgos y optimiza el ciclo completo de retiro de escombros en piques y obras de movimiento de tierras."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué capacidades está disponible el Capacho Escombros Autovolteo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Capacho Escombros con Autovolteo de Standard Equipment está disponible en capacidades de 1.000 litros (1 m³), 1.500 litros (1,5 m³), 2.000 litros (2 m³) y 3.000 litros (3 m³), adaptándose a distintos tamaños de obra y capacidades de grúa torre."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué obras están indicados los Capachos Escombros con Autovolteo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Capachos Escombros con Autovolteo están especialmente indicados para construcción de piques verticales, túneles, galerías subterráneas, líneas de metro y obras de movimiento de tierras en altura. Son accesorios de grúa esenciales para cualquier proyecto que requiera retiro eficiente de escombros mediante izaje."
      }
    }
  ]
};

export default function CapachoEscombrosAutovolteoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <CapachoClientPage />
    </>
  );
}
