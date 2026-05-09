import type { Metadata } from "next";
import AtrilClientPage from "./AtrilClientPage";

export const metadata: Metadata = {
  title: "Atril Neumáticos OTR | Mantención CAEX y Cargadores Frontales | Standard Equipment",
  description: "Atril y Base de Mantención para Neumáticos OTR de CAEX y Cargadores Frontales. Compatible con Komatsu 930E, CAT 797, WA 1200-6, Le Tourneau L2350, XDR 3, X Mine D2. Tallas 53/80R63 y 59/80R63. Chile y Latinoamérica.",
  keywords: [
    // Producto
    "atril neumáticos OTR",
    "atril mantención neumáticos OTR",
    "base mantención neumáticos OTR",
    "base mantención neumáticos CAEX",
    "base mantención neumáticos mineros",
    "soporte neumáticos OTR",
    "atril soporte neumáticos",
    "inspección neumáticos minería",
    // Neumáticos
    "neumáticos OTR",
    "neumáticos CAEX",
    "neumáticos cargador frontal",
    "53/80R63",
    "59/80R63",
    "neumaticos minería",
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
    // Cargadores frontales
    "Le Tourneau L2350",
    "P&H L2350",
    "WA 1200-6",
    "Komatsu WA 1200-6",
    "WA 1350",
    "Komatsu WA 1350",
    "WA980-8R",
    "Komatsu WA980-8R",
    // Otros equipos
    "XDR 3",
    "XDR3",
    "X Mine D2",
    // Mantención e industria
    "mantención CAEX",
    "mantención neumáticos minería",
    "mantención equipos mineros",
    "minería a rajo abierto",
  ],
  openGraph: {
    title: "Atril Neumáticos OTR | Mantención CAEX y Cargadores Frontales | Standard Equipment",
    description: "Atril y Base de Mantención para Neumáticos OTR. Compatible con Komatsu 930E, CAT 797, WA 1200-6, Le Tourneau L2350, XDR 3. Tallas 53/80R63 y 59/80R63.",
    url: "https://www.standard-equipment.cl/productos/atril-neumaticos-otr",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Atril Neumáticos OTR",
  "alternateName": ["Base Mantención Neumáticos OTR", "Base Mantención Neumáticos CAEX", "Atril Mantención Neumáticos OTR", "Soporte Neumáticos OTR"],
  "description": "Atril y Base de Mantención para Neumáticos OTR de equipos mineros de gran envergadura. Compatible con CAEX Komatsu 830E, 930E, 960E, 980E, CAT 793 al 798, y Cargadores Frontales Le Tourneau L2350, P&H L2350, Komatsu WA 1200-6, WA 1350, WA980-8R, XDR 3 y X Mine D2. Tallas 53/80R63 y 59/80R63. Certificado MC y WPS-PQR.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/productos/atril-neumaticos-otr",
  "category": "Equipos para Mantención Minera / Accesorios Neumáticos OTR",
  "audience": {
    "@type": "Audience",
    "audienceType": "Empresas mineras, contratistas de mantención CAEX, operadores de cargadores frontales"
  },
  "areaServed": ["Chile", "Perú", "Argentina", "Colombia", "México", "Bolivia", "Ecuador", "Uruguay", "Paraguay", "Venezuela", "Brasil", "Latinoamérica"],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un Atril o Base de Mantención para Neumáticos OTR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Atril o Base de Mantención para Neumáticos OTR es una estructura certificada en acero estructural Heavy Duty que permite sostener y posicionar neumáticos de gran envergadura (Off The Road) durante las operaciones de inspección, reparación y cambio en faenas mineras. Garantiza la seguridad del personal y la estabilidad del neumático durante toda la mantención."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué CAEX está diseñado el Atril de Neumáticos OTR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Atril de Neumáticos OTR de Standard Equipment es compatible con los principales camiones CAEX de minería: Komatsu 830E, 930E, 960E y 980E, Caterpillar CAT 793, CAT 794, CAT 795, CAT 797 y CAT 798, así como los modelos XDR 3 y X Mine D2. Admite neumáticos en tallas 53/80R63 y 59/80R63."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué Cargadores Frontales está indicado el Atril de Neumáticos OTR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Atril de Neumáticos OTR de Standard Equipment está indicado para los principales cargadores frontales de minería: Le Tourneau L2350, P&H L2350, Komatsu WA 1200-6, Komatsu WA 1350 y Komatsu WA980-8R. Diseñado para los neumáticos de mayor tamaño del mercado minero."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tallas de neumáticos OTR admite el Atril?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Atril de Neumáticos OTR de Standard Equipment admite desde neumáticos 27R49 hasta las tallas más grandes del mercado minero: 53/80R63 y 59/80R63, cubriendo el rango completo de neumáticos OTR utilizados en CAEX y cargadores frontales de gran tonelaje."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tiene el Atril de Mantención de Neumáticos Mineros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Atril de Mantención de Neumáticos OTR de Standard Equipment cuenta con certificación de cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo los estándares de seguridad exigidos por las principales compañías mineras de Chile y Latinoamérica."
      }
    }
  ]
};

export default function AtrilNeumaticosOTRPage() {
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
      <AtrilClientPage />
    </>
  );
}
