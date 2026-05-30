import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

export const metadata: Metadata = {
  title: "Transportador de Barras de Acero | Construcción Chile",
  description: "Transportador para traslado seguro de barras de acero en obras de construcción. Optimiza la logística de materiales en altura. Certificado MC, WPS-PQR. Fabricación a medida.",
  keywords: [
    "transportador de barras",
    "transportador barras de acero",
    "traslado barras acero construcción",
    "transporte barras obras altura",
    "logística materiales construcción",
    "accesorios izaje construcción Chile",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/construccion/transportador-de-barras",
  },
  openGraph: {
    title: "Transportador de Barras de Acero | Construcción | Standard Equipment Chile",
    description: "Transportador para traslado seguro de barras de acero en obras de construcción en altura. Certificado MC, WPS-PQR. Fabricación a medida en Chile.",
    url: "https://www.standard-equipment.cl/construccion/transportador-de-barras",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Transportador de Barras de Acero",
  "alternateName": ["Transportador Barras Construcción", "Transporte Barras Acero Grúa"],
  "description": "Equipo diseñado para el traslado seguro y eficiente de barras de acero en obras de construcción en altura mediante grúa torre. Optimiza la logística de materiales, reduce riesgos y aumenta la productividad en faena. Fabricado en acero estructural con certificación MC y WPS-PQR.",
  "brand": { "@type": "Brand", "name": "Standard Equipment" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/construccion/transportador-de-barras",
  "category": "Equipos de Construcción / Logística de Materiales",
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
      "name": "¿Qué es un Transportador de Barras de Acero para construcción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Transportador de Barras de Acero es un accesorio de izaje que permite el traslado vertical seguro de barras de acero (fierros) en obras de construcción en altura mediante grúa torre. Elimina el riesgo de caída de material y optimiza la logística de abastecimiento de acero por pisos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué tipo de obras se usa el Transportador de Barras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Transportador de Barras de Standard Equipment se usa en edificios residenciales, torres de oficinas y obras de infraestructura donde se trabaja con barras de acero de refuerzo (enfierraduras) en altura, facilitando el abastecimiento por piso sin riesgo para los trabajadores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tiene el Transportador de Barras de Standard Equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Transportador de Barras de Standard Equipment cuenta con Memoria de Cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo los estándares de seguridad para obras de construcción en Chile."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde fabrican Transportadores de Barras en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Equipment fabrica Transportadores de Barras en Santiago, Chile, con más de 20 años de experiencia en equipos para construcción en altura. Fabricación a medida según los requerimientos de cada obra y tipo de barra."
      }
    }
  ]
};

export default function TransportadorDeBarrasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/steel-rods.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.65)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              Transportador
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              de Barras
            </h2>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Equipo diseñado para el traslado seguro de barras de acero en obras de construcción, optimizando la logística de materiales en altura.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Aplicación", bottom: "Obras en Altura" },
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
                  ["Certificación", "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Aplicación", "Obras de construcción"],
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
                { sector: "Construcción", detalle: "Traslado de barras de acero en obras de construcción en altura" },
                { sector: "Infraestructura", detalle: "Proyectos de infraestructura que requieren manejo de materiales pesados" },
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
      <ProductosCarruselConstruccion excludeId="transportador-de-barras" />
      <WhatsAppButton />
    </>
  );
}
