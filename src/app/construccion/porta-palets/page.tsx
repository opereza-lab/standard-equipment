import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

export const metadata: Metadata = {
  title: "Porta Pallets Construcción | Izaje Grúa Torre Chile",
  description: "Porta pallets para izaje y distribución de materiales paletizados en obras en altura mediante grúa torre. Certificado MC, WPS-PQR. Fabricación a medida en Chile.",
  keywords: [
    "porta pallets construcción",
    "porta palets grúa torre",
    "izaje pallets construcción",
    "accesorios grúa torre",
    "transporte vertical materiales",
    "porta pallets obras en altura",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/construccion/porta-palets",
  },
  openGraph: {
    title: "Porta Pallets Construcción | Izaje Grúa Torre | Standard Equipment Chile",
    description: "Porta pallets para izaje y distribución de materiales paletizados en obras en altura mediante grúa torre. Certificado MC, WPS-PQR. Fabricación a medida.",
    url: "https://www.standard-equipment.cl/construccion/porta-palets",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Porta Pallets para Construcción en Altura",
  "alternateName": ["Porta Palets Grúa Torre", "Porta Pallets Izaje", "Accesorio Grúa Torre Pallets"],
  "description": "Accesorio de izaje para el transporte vertical de pallets y cargas paletizadas mediante grúa torre en obras de construcción en altura. Permite el abastecimiento eficiente por piso sin necesidad de equipos adicionales. Fabricado en acero estructural con certificación MC y WPS-PQR.",
  "brand": { "@type": "Brand", "name": "Standard Equipment" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/construccion/porta-palets",
  "category": "Equipos de Construcción / Accesorios Grúa Torre",
  "areaServed": ["Chile", "Perú", "Argentina", "Colombia", "México", "Bolivia", "Ecuador", "Uruguay", "Paraguay", "Venezuela", "Brasil", "Latinoamérica"],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "CLP",
    "price": "0",
    "url": "https://www.standard-equipment.cl/contacto",
    "seller": { "@type": "Organization", "name": "Standard Equipment" }
  }
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un Porta Pallets para construcción en altura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Porta Pallets es un accesorio de izaje que se conecta a la grúa torre y permite transportar verticalmente pallets cargados con materiales de construcción (bloques, cerámicos, mortero, etc.) desde el nivel de calle hasta los pisos superiores de la obra. Evita maniobras inseguras y optimiza el abastecimiento por piso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué materiales se puede usar el Porta Pallets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Porta Pallets de Standard Equipment está diseñado para el izaje de cualquier material paletizado utilizado en construcción: bloques de hormigón, ladrillos, cerámicos, bolsas de mortero, yeso, acero en barras cortas y otros materiales de obra embalados en pallet."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tiene el Porta Pallets de Standard Equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Porta Pallets de Standard Equipment cuenta con Memoria de Cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo los estándares de seguridad para obras de construcción en Chile."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde fabrican Porta Pallets para grúa torre en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Equipment fabrica Porta Pallets en Santiago, Chile, con más de 20 años de experiencia en accesorios de izaje para construcción en altura. Fabricación a medida según la capacidad de carga requerida y el tipo de grúa utilizada en la obra."
      }
    }
  ]
};

export default function PortaPaletsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/warehouse-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.65)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              Porta
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              Pallets
            </h2>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Accesorio de izaje diseñado para el transporte vertical de pallets y cargas paletizadas mediante grúa torre en obras de construcción.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Izaje", bottom: "Grúa Torre" },
                { top: "Certificados", bottom: "MC, WPS-PQR" },
              ].map((s) => (
                <div key={s.top} className="px-3 py-3 text-center" style={{ background: "rgba(13,21,40,0.9)" }}>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{s.top}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.bottom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 10 }}>
          <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.25em]">Scroll Down</span>
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", animation: "scrollBounce 1.8s ease-in-out infinite" }}
          >
            <div className="w-px bg-white/80" style={{ height: "36px" }} />
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.9 }}>
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── FICHA TÉCNICA ────────────────────────────────────── */}
      <section style={{ background: "#ffffff" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Especificaciones</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>Ficha Técnica</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Material", "Acero Estructural ASTM A36"],
                  ["Capacidad", "A definir según proyecto"],
                  ["Sistema de Izaje", "Grúa Torre"],
                  ["Certificación", "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Fabricación", "A medida según requerimiento"],
                ].map(([label, value], i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? "#f5f7fa" : "#ffffff" }}>
                    <td className="px-4 py-3 font-semibold text-xs uppercase tracking-wide w-52"
                      style={{ color: "#0d1528", borderLeft: "3px solid #e07820" }}>{label}</td>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Sectores de Aplicación</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>¿Dónde se Utiliza?</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { sector: "Construcción en Altura", detalle: "Izaje y distribución de materiales paletizados en obras verticales" },
                { sector: "Logística en Obra", detalle: "Gestión eficiente de materiales y suministros en faena" },
              ].map((s) => (
                <div key={s.sector} className="p-5 border-t-2" style={{ borderColor: "#e07820", background: "#f5f7fa" }}>
                  <p className="font-bold text-sm mb-1 uppercase tracking-wide" style={{ color: "#0d1528" }}>{s.sector}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">¿Te interesa este equipo?</h2>
            <p className="text-white/60">Envíanos tu consulta — te respondemos directamente, sin intermediarios.</p>
          </div>
          <a href="/contacto"
            className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-4 font-bold text-white text-sm tracking-widest uppercase transition-opacity hover:opacity-85"
            style={{ background: "#e07820" }}>
            Solicitar Cotización
          </a>
        </div>
      </section>

      <Footer />
      <ProductosCarruselConstruccion excludeId="porta-palets" />
      <WhatsAppButton />
    </>
  );
}
