import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselMineria from "@/components/ProductosCarruselMineria";

export const metadata: Metadata = {
  title: "Bases de Traslado Equipos Mineros | Standard Equipment Chile",
  description: "Bases de traslado diseñadas a medida para equipos pesados en minería. Fabricadas en acero estructural con acero HB400 en piezas de desgaste. Certificación MC y WPS-PQR.",
  keywords: [
    "bases de traslado minería",
    "bases traslado equipos pesados",
    "traslado equipos mineros Chile",
    "bases traslado rajo abierto",
    "bases traslado minería subterránea",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/mineria/bases-de-traslado",
  },
  openGraph: {
    title: "Bases de Traslado Equipos Mineros | Standard Equipment Chile",
    description: "Bases de traslado diseñadas a medida para equipos pesados en minería. Acero estructural con HB400. Certificación MC y WPS-PQR.",
    url: "https://www.standard-equipment.cl/mineria/bases-de-traslado",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bases de Traslado para Equipos Mineros",
  "alternateName": ["Bases de Traslado Minería", "Bases Traslado Equipos Pesados"],
  "description": "Bases de traslado diseñadas y fabricadas a medida para el movimiento seguro de equipos pesados en operaciones de minería a rajo abierto y subterránea. Material: acero estructural con acero HB400 en piezas de desgaste. Certificación Memoria de Cálculo, WPS-PQR y certificación de materiales.",
  "brand": { "@type": "Brand", "name": "Standard Equipment" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/mineria/bases-de-traslado",
  "category": "Equipos para Mantención Minera / Bases de Traslado",
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
      "name": "¿Qué es una Base de Traslado para equipos mineros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una Base de Traslado es una estructura de acero fabricada a medida que permite el movimiento seguro de equipos pesados de minería — como motores, reductores, bombas y otros componentes de gran envergadura — dentro de la faena. Están certificadas con Memoria de Cálculo estructural (MC) y procedimientos de soldadura WPS-PQR."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué equipos mineros se fabrican Bases de Traslado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Equipment fabrica Bases de Traslado a medida para cualquier equipo minero: CAEX (Komatsu 930E, CAT 797, etc.), palas hidráulicas (PC 8000, CAT 6060), cargadores frontales y otros equipos de gran tonelaje, tanto para minería a rajo abierto como subterránea."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué material se usa en las Bases de Traslado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado de Standard Equipment se fabrican en acero estructural con acero HB400 en las piezas de desgaste, garantizando alta resistencia y durabilidad en entornos mineros exigentes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tienen las Bases de Traslado de Standard Equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Bases de Traslado de Standard Equipment cuentan con Memoria de Cálculo estructural (MC), procedimientos de soldadura calificados WPS-PQR y certificación de materiales, cumpliendo los estándares de seguridad exigidos en faenas mineras de Chile y Latinoamérica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde fabrican Bases de Traslado para minería en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Equipment fabrica Bases de Traslado para minería en Santiago, Chile, con más de 20 años de experiencia en el sector. Atiende faenas de minería a rajo abierto y subterránea en Chile y Latinoamérica, fabricando cada base a medida según los requerimientos específicos del equipo y la operación."
      }
    }
  ]
};

export default function BasesDeTrasladoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/inspection-factory.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.65)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              Bases
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              de Traslado
            </h2>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Bases de traslado diseñadas y fabricadas a medida para operaciones de minería, garantizando la seguridad y eficiencia en el movimiento de equipos pesados.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Aplicación", bottom: "Minería" },
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
                  ["Material", "Acero Estructural"],
                  ["Piezas de Desgaste", "Acero HB 400"],
                  ["Certificación", "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Aplicación", "Minería a Rajo Abierto / Subterránea"],
                  ["Fabricación", "A medida según equipo"],
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
                { sector: "Minería Rajo Abierto", detalle: "Traslado y posicionamiento de equipos en faenas de rajo abierto" },
                { sector: "Minería Subterránea", detalle: "Soluciones adaptadas para el movimiento de equipos en minería subterránea" },
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

      <ProductosCarruselMineria excludeId="bases-de-traslado" />

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
      <WhatsAppButton />
    </>
  );
}
