import type { Metadata } from "next";
import BasesClientPage from "./BasesClientPage";

export const metadata: Metadata = {
  title: "Bases Cilindros Hidráulicos | Palas Hidráulicas y CAEX | Standard Equipment",
  description: "Bases de Traslado certificadas para Cilindros Hidráulicos de Palas Hidráulicas y CAEX. PC 8000, PC 7000, CAT 6060, HITACHI EX5600, Komatsu 930E, CAT 797 y más. Mantención equipos mineros en Chile y Latinoamérica.",
  keywords: [
    // Cilindros hidráulicos
    "cilindros hidráulicos",
    "cilindros hidráulicos palas mineras",
    "cilindros hidráulicos palas hidráulicas",
    "cilindros hidráulicos CAEX",
    "cilindros hidráulicos camiones mineros",
    "cilindro hidráulico minería",
    // Bases de traslado
    "bases de traslado",
    "bases de traslado minería",
    "bases de traslado para cilindro de gran envergadura",
    "bases de traslado certificadas",
    "bases de traslado para minería",
    "bases cilindros hidráulicos",
    "soporte cilindros hidráulicos",
    "bases de transporte cilindros",
    // Mantención
    "mantención palas hidráulicas",
    "mantención CAEX",
    "mantención equipos mineros",
    // Palas hidráulicas — modelos específicos
    "PC 8000",
    "PC 7000",
    "PC 5500",
    "Komatsu PC 8000",
    "Komatsu PC 7000",
    "Komatsu PC 5500",
    "CAT 6050",
    "CAT 6060",
    "HITACHI EX5600",
    // CAEX — modelos específicos
    "Komatsu 830E",
    "Komatsu 930E",
    "Komatsu 960E",
    "Komatsu 980E",
    "CAT 793",
    "CAT 794",
    "CAT 795",
    "CAT 797",
    "CAT 798",
    // General minería
    "minería a rajo abierto",
    "heavy duty minería",
    "equipos mineros gran envergadura",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/mineria/bases-cilindros-hidraulicos",
  },
  openGraph: {
    title: "Bases Cilindros Hidráulicos | Palas Hidráulicas y CAEX | Standard Equipment",
    description: "Bases de Traslado certificadas para Cilindros Hidráulicos de Palas Hidráulicas y CAEX. PC 8000, CAT 6060, Komatsu 930E, CAT 797 y más. Mantención equipos mineros.",
    url: "https://www.standard-equipment.cl/mineria/bases-cilindros-hidraulicos",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bases de Traslado para Cilindros Hidráulicos",
  "alternateName": ["Bases Cilindros Hidráulicos", "Soporte Cilindros Hidráulicos", "Bases de Transporte Cilindros"],
  "description": "Bases de Traslado certificadas para Cilindros Hidráulicos de gran envergadura de Palas Hidráulicas (PC 8000, PC 7000, PC 5500, CAT 6050, CAT 6060, HITACHI EX5600) y CAEX (Komatsu 830E, 930E, 960E, 980E, CAT 793, 794, 795, 797, 798). Fabricación a medida en acero estructural Heavy Duty para minería a rajo abierto.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/mineria/bases-cilindros-hidraulicos",
  "category": "Equipos para Mantención Minera / Bases de Traslado",
  "audience": {
    "@type": "Audience",
    "audienceType": "Empresas mineras, contratistas de mantención, operadores de palas hidráulicas y CAEX"
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
      "name": "¿Qué son las Bases de Traslado para Cilindros Hidráulicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado para Cilindros Hidráulicos son estructuras certificadas en acero estructural Heavy Duty diseñadas para el transporte seguro y almacenamiento de cilindros hidráulicos de gran envergadura de equipos mineros como palas hidráulicas y camiones CAEX. Permiten movilizar cilindros de hasta varias toneladas sin riesgo de daño durante las operaciones de mantención."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué palas hidráulicas están diseñadas las Bases de Traslado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado para Cilindros Hidráulicos de Standard Equipment están diseñadas para los principales modelos de palas hidráulicas de minería: Komatsu PC 8000, PC 7000 y PC 5500, Caterpillar CAT 6050 y CAT 6060, y Hitachi EX5600. Fabricación a medida según las dimensiones específicas de cada cilindro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué CAEX están indicadas las Bases de Traslado para Cilindros Hidráulicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado para Cilindros Hidráulicos de Standard Equipment son compatibles con los principales camiones CAEX de minería: Komatsu 830E, 930E, 960E y 980E, y Caterpillar CAT 793, CAT 794, CAT 795, CAT 797 y CAT 798. Solución para mantención de cilindros de dirección, suspensión y levante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tienen las Bases de Traslado para minería?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado para Cilindros Hidráulicos de Standard Equipment cuentan con certificación de cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo con los estándares de calidad exigidos por las principales compañías mineras de Chile y Latinoamérica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué usar Bases de Traslado certificadas para la mantención de equipos mineros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usar Bases de Traslado certificadas para la mantención de palas hidráulicas y CAEX garantiza la seguridad del personal durante el traslado de cilindros hidráulicos de gran peso, evita daños a componentes críticos, cumple con los protocolos de seguridad de faenas mineras y permite optimizar los tiempos de mantención en rajo abierto."
      }
    }
  ]
};

export default function BasesCilindrosPage() {
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
      <BasesClientPage />
    </>
  );
}
