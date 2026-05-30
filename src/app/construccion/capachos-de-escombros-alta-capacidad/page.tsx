import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

export const metadata: Metadata = {
  title: "Capachos de Escombros Alta Capacidad | Construcción Chile",
  description: "Capachos de escombros de alta capacidad para obras de gran volumen. Fabricados en acero estructural con certificación MC y WPS-PQR. Piques, túneles y construcción en Chile.",
  keywords: [
    "capachos escombros alta capacidad",
    "capachos de escombros construcción",
    "capachos piques",
    "capachos piques y túneles",
    "movimiento de tierra piques",
    "grúas torre construcción",
    "galerías construcción",
    "construcción metro",
    "metro de Santiago",
    "línea 7 metro",
    "línea 9 metro",
    "retiro escombros obras civiles",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/construccion/capachos-de-escombros-alta-capacidad",
  },
  openGraph: {
    title: "Capachos de Escombros Alta Capacidad | Piques y Túneles | Standard Equipment Chile",
    description: "Capachos de escombros de alta capacidad para piques, túneles y obras civiles de gran volumen. Acero estructural, certificación MC y WPS-PQR.",
    url: "https://www.standard-equipment.cl/construccion/capachos-de-escombros-alta-capacidad",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Capachos de Escombros Alta Capacidad",
  "alternateName": ["Capachos Escombros Piques", "Capachos Escombros Túneles", "Capachos Alta Capacidad Construcción"],
  "description": "Capachos de escombros de alta capacidad para el retiro de material en obras de gran volumen: piques, túneles, galerías, construcción de metro y obras civiles de infraestructura. Fabricados en acero estructural con certificación Memoria de Cálculo (MC) y WPS-PQR. Operados mediante grúa torre o grúa pluma.",
  "brand": { "@type": "Brand", "name": "Standard Equipment" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/construccion/capachos-de-escombros-alta-capacidad",
  "category": "Equipos de Construcción / Retiro de Escombros",
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
      "name": "¿Qué son los Capachos de Escombros de Alta Capacidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Capachos de Escombros de Alta Capacidad son contenedores metálicos de gran volumen diseñados para el retiro de escombros y material excavado en obras de gran envergadura: piques, túneles, galerías y construcciones civiles. Se operan mediante grúa torre o grúa pluma y están certificados con Memoria de Cálculo y WPS-PQR."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué obras se usan los Capachos de Escombros de Alta Capacidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Capachos de Escombros de Alta Capacidad se usan en construcción de piques mineros, túneles viales y ferroviarios, galerías de metro, obras de infraestructura subterránea y cualquier proyecto donde se requiera retirar grandes volúmenes de material excavado o escombros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tienen los Capachos de Escombros Alta Capacidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los Capachos de Escombros de Alta Capacidad de Standard Equipment cuentan con Memoria de Cálculo estructural (MC) y procedimientos de soldadura WPS-PQR, cumpliendo los estándares de seguridad para obras de construcción e infraestructura en Chile y Latinoamérica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde fabrican Capachos de Escombros de gran volumen en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Equipment fabrica Capachos de Escombros de Alta Capacidad en Santiago, Chile. Con más de 20 años de experiencia, ha suministrado estos equipos a obras de metro, túneles y piques en Chile y Latinoamérica. Fabricación a medida según el volumen y condiciones de cada obra."
      }
    }
  ]
};

export default function CapachosAltaCapacidadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/heavy-factory.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.65)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              Capachos Escombros
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              Alta Capacidad
            </h2>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Capachos de escombros de alta capacidad para obras de gran volumen, fabricados en acero estructural con certificación de memoria de cálculo.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Aplicación", bottom: "Construcción" },
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
                  ["Capacidad", "Alta capacidad — a definir según requerimiento"],
                  ["Certificación", "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Aplicación", "Construcción / Obras Civiles"],
                  ["Fabricación", "A medida"],
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
                { sector: "Obras de Gran Volumen", detalle: "Proyectos con alto flujo de escombros que requieren mayor capacidad de carga" },
                { sector: "Demoliciones", detalle: "Retiro eficiente de material en obras de demolición y remodelación" },
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

      {/* ── OTROS PRODUCTOS CONSTRUCCIÓN ─────────────────────── */}
      <ProductosCarruselConstruccion excludeId="capachos-de-escombros-alta-capacidad" />

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
