import type { Metadata } from "next";
import SoporteClientPage from "./SoporteClientPage";

export const metadata: Metadata = {
  title: "Soporte Baldes Face Shovel | Cucharón Pala Frontal | Standard Equipment",
  description: "Base de Mantenimiento para Baldes Face Shovel y Cucharón de Pala Frontal. Mantención y cambio de elementos de desgaste sin retirar el balde. Acero estructural + HB400. Certificado MC, WPS-PQR. Chile y Latinoamérica.",
  keywords: [
    // Producto
    "soporte baldes face shovel",
    "base mantenimiento balde face shovel",
    "base de mantenimiento balde face shovel",
    "base de mantenimiento balde pala face shovel",
    "base mantenimiento balde pala frontal",
    "soporte face shovel",
    "base face shovel",
    "mantención face shovel",
    // Face shovel / pala frontal
    "face shovel",
    "face shovel bucket",
    "pala frontal",
    "pala hidráulica frontal",
    "pala hidráulica minería",
    "pala hidráulica",
    // Cucharón — nombre regional
    "cucharón",
    "cucharon",
    "cucharón pala",
    "cucharon pala",
    "cucharón pala frontal",
    "cucharon pala frontal",
    // General
    "mantención baldes pala",
    "cambio elementos desgaste face shovel",
    "soporte baldes pala hidráulica",
    "minería a rajo abierto",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/productos/soporte-baldes-face-shovel",
  },
  openGraph: {
    title: "Soporte Baldes Face Shovel | Cucharón Pala Frontal | Standard Equipment",
    description: "Base de Mantenimiento para Baldes Face Shovel y Cucharón de Pala Frontal. Mantención sin retirar el balde. Acero estructural + HB400. Certificado MC, WPS-PQR.",
    url: "https://www.standard-equipment.cl/productos/soporte-baldes-face-shovel",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Soporte Baldes Face Shovel",
  "alternateName": ["Base de Mantenimiento Balde Face Shovel", "Base Mantenimiento Cucharón Pala Frontal", "Soporte Cucharón Face Shovel"],
  "description": "Base de Mantenimiento para Baldes Face Shovel y Cucharón de Pala Frontal que permite el cambio de elementos de desgaste sin retirar el balde. Fabricado en acero estructural + HB400. Certificado MC y WPS-PQR para minería a rajo abierto.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/productos/soporte-baldes-face-shovel",
  "category": "Equipos para Mantención Minera / Soporte Baldes Pala",
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
  "areaServed": ["Chile", "Perú", "Argentina", "Colombia", "México", "Bolivia", "Ecuador", "Uruguay", "Paraguay", "Venezuela", "Brasil", "Latinoamérica"],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un Soporte o Base de Mantenimiento para Baldes Face Shovel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Soporte o Base de Mantenimiento para Baldes Face Shovel es una estructura certificada que permite posicionar y sostener el cucharón o balde de una pala frontal hidráulica durante las operaciones de mantención, cambio de dientes, labios y elementos de desgaste, sin necesidad de retirar el balde de la pala. Reduce tiempos de mantención y aumenta la seguridad del personal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué palas Face Shovel está diseñado el soporte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Soporte de Baldes Face Shovel de Standard Equipment está diseñado para las principales palas hidráulicas frontales de minería a rajo abierto, incluyendo Komatsu PC 8000, PC 7000 y PC 5500, Caterpillar CAT 6050 y CAT 6060, y Hitachi EX5600. Fabricación a medida según las dimensiones del cucharón de cada modelo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué ventaja tiene mantener el balde sin retirarlo de la pala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mantener el balde o cucharón de la pala frontal sin retirarlo reduce significativamente el tiempo de detención del equipo, elimina la necesidad de grúa auxiliar para el desmontaje, reduce el riesgo de daños al balde durante el traslado y optimiza el ciclo completo de mantención en faenas mineras de alta productividad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué materiales y certificaciones tiene el Soporte de Baldes Face Shovel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Soporte de Baldes Face Shovel de Standard Equipment está fabricado en acero estructural con refuerzos en acero HB400 (alta resistencia al desgaste). Cuenta con Memoria de Cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo los estándares de seguridad de las principales compañías mineras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde está disponible el Soporte de Baldes para Pala Frontal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Soporte de Baldes Face Shovel de Standard Equipment está disponible en Chile y toda Latinoamérica, incluyendo Perú, Argentina, Colombia, México y Bolivia. Fabricación nacional chilena con diseño customizable según las dimensiones específicas del cucharón de cada cliente."
      }
    }
  ]
};

export default function SoporteBaldesFaceShovelPage() {
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
      <SoporteClientPage />
    </>
  );
}
