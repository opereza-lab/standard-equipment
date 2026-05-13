import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductContactButton from "@/components/ProductContactButton";
import { CheckIcon } from "@/components/icons";
import TagsNormativos from "./TagsNormativos";

export const metadata: Metadata = {
  title: "Cabina de Limpieza de Polvos | Ducha de Aire | Silicosis | Standard Equipment",
  description: "Cabina de Limpieza de Polvos y Ducha de Aire para control de polvo y prevención de silicosis. Cumple DS 594, PLANESI, OSHA 29 CFR. Solución para minería, construcción e industria en Latinoamérica.",
  keywords: [
    // Producto
    "cabina de limpieza de polvos",
    "cabina de limpieza de personal",
    "cabina de desempolvado",
    "ducha de aire",
    "cabina desempolvado",
    "cabinas de limpieza",
    // Salud y enfermedades
    "silicosis",
    "prevención silicosis",
    "enfermedades respiratorias",
    "enfermedades profesionales",
    "salud ocupacional",
    "polvo",
    "polvos",
    "control de polvos",
    "descontaminación",
    // Normativa Chile
    "DS 594",
    "decreto supremo 594",
    "PLANESI",
    "Seremi de Salud",
    "MINSAL",
    "HSEC",
    // Normativa internacional
    "OSHA",
    "OSHA 29 CFR",
    "riesgos del uso del aire comprimido",
    "aire comprimido",
    // Industrias
    "limpieza polvo minería",
    "limpieza polvo construcción",
    "higiene industrial",
    "seguridad laboral",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/cabinas-de-limpieza/cabina-de-limpieza-de-polvos",
  },
  openGraph: {
    title: "Cabina de Limpieza de Polvos | Ducha de Aire | Standard Equipment",
    description: "Cabina de Limpieza de Polvos y Ducha de Aire para prevención de silicosis y control de polvo. Cumple DS 594, PLANESI y OSHA 29 CFR.",
    url: "https://www.standard-equipment.cl/cabinas-de-limpieza/cabina-de-limpieza-de-polvos",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const caracteristicas = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
];

const especificaciones = [
  { label: "Material", value: "Lorem ipsum" },
  { label: "Sistema", value: "Lorem ipsum dolor sit amet" },
  { label: "Certificación", value: "Lorem ipsum" },
  { label: "Aplicación", value: "Lorem ipsum / Lorem ipsum" },
  { label: "Fabricación", value: "Lorem ipsum" },
];

const aplicaciones = [
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/inspection-factory.jpg",
  },
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/workers-corridor.jpg",
  },
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/heavy-factory.jpg",
  },
];

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Cabina de Limpieza de Polvos",
  "alternateName": ["Ducha de Aire", "Cabina de Desempolvado", "Cabina de Limpieza de Personal", "Cabina Desempolvado"],
  "description": "Cabina de Limpieza de Polvos y Ducha de Aire para control de polvo y prevención de silicosis. Cumple DS 594, PLANESI y OSHA 29 CFR 1910.242(b). Solución para minería, construcción e industria en Latinoamérica.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/cabinas-de-limpieza/cabina-de-limpieza-de-polvos",
  "image": "https://www.standard-equipment.cl/images/productos/cabina-de-limpieza/hero-1.jpg",
  "category": "Equipos de Higiene Industrial",
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
      "name": "¿Qué es una Cabina de Limpieza de Polvos o Ducha de Aire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una Cabina de Limpieza de Polvos (también llamada Ducha de Aire o Cabina de Desempolvado) es un equipo de higiene industrial que elimina el polvo acumulado en ropa y cuerpo de los trabajadores antes de salir de zonas contaminadas. Previene la inhalación de partículas peligrosas como sílice cristalina, reduciendo el riesgo de silicosis y otras enfermedades respiratorias profesionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué normativas cumple la Cabina de Limpieza de Polvos de Standard Equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Cabina de Limpieza de Polvos de Standard Equipment cumple con el Decreto Supremo 594 (DS 594) del MINSAL en Chile, el Plan Nacional de Erradicación de la Silicosis (PLANESI), los lineamientos de la Seremi de Salud y la normativa internacional OSHA 29 CFR 1910.242(b) sobre riesgos del uso de aire comprimido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué industrias está indicada la Cabina de Limpieza de Personal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Cabina de Limpieza de Personal está especialmente indicada para minería (cobre, oro, litio), construcción, cemento, cerámica, manufactura pesada y cualquier industria donde los trabajadores estén expuestos a polvos minerales, sílice o partículas respirables. Es una solución esencial para programas HSEC y salud ocupacional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda la Cabina de Desempolvado a prevenir la silicosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Cabina de Desempolvado elimina el polvo de sílice cristalina acumulado en ropa y piel del trabajador mediante chorros de aire controlado, evitando que las partículas sean transportadas a zonas limpias o inhaladas durante el cambio de ropa. Esto reduce significativamente la exposición acumulada a polvo respirable, principal causa de silicosis."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde está disponible la Cabina de Limpieza de Polvos de Standard Equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Cabina de Limpieza de Polvos de Standard Equipment está disponible en Chile y toda Latinoamérica, incluyendo Perú, Argentina, Colombia, México, Bolivia, Ecuador, Uruguay y más. Fabricación nacional chilena con estándares internacionales."
      }
    }
  ]
};

export default function CabinaLimpiezaPolvoPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <main>
        {/* 1. HERO */}
        <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/productos/cabina-de-limpieza/hero-1.jpg')" }} />

          {/* Bloque superior izquierdo — tagline */}
          <div className="absolute flex items-center gap-0" style={{ top: "28%", left: "3%", zIndex: 2 }}>
            {/* STANDARD vertical */}
            <span
              className="text-white uppercase select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "clamp(0.6rem, 0.85vw, 0.8rem)", letterSpacing: "0.25em", fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, fontStyle: "normal" }}
            >
              STANDARD
            </span>
            {/* Texto principal */}
            <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.45)", fontFamily: "var(--font-inter)" }}>
              <p className="text-white leading-tight" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)", letterSpacing: "0.06em", fontWeight: 800 }}>
                Simple, efectiva
              </p>
              <p className="text-white leading-tight" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)", letterSpacing: "0.06em", fontWeight: 800 }}>
                mínima mantención
              </p>
            </div>
          </div>

          <div className="absolute left-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
            <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
              <h1 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
                <span className="text-white">Cabina de </span><span style={{ color: "#e07820" }}>Limpieza</span>
              </h1>
              <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
                No requiere instalación ni líneas de aire comprimido, la posicionas, la enchufas y al toque de un botón ya está operando.
              </p>
              <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
                {[
                  { top: "Aire Soplado", bottom: "2.5 PSIG · 1400 lt/min" },
                  { top: "Tipo de Filtro", bottom: "HEPA" },
                  { top: "Plug & Play", bottom: "Sin instalación" },
                ].map((s) => (
                  <div key={s.top + s.bottom} className="px-3 py-3 text-center" style={{ background: "rgba(13,21,40,0.9)" }}>
                    <p className="text-white font-bold text-sm uppercase tracking-wide" style={{ whiteSpace: "nowrap" }}>{s.top}</p>
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

        {/* 2. DESCRIPCIÓN CORTA */}
        <section className="py-14 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <p className="italic leading-snug text-left" style={{ fontSize: "clamp(1.2rem, 2.3vw, 1.8rem)", color: "#0d1528" }}>
              &ldquo;La <span style={{ color: "#e07820" }}>conducta</span> del trabajador para eliminar el polvo de su ropa es{" "}
              <span style={{ color: "#e07820" }}>sopletearse</span> con Aire Comprimido, lo que conlleva varios{" "}
              <span style={{ color: "#e07820" }}>riesgos</span>{" "}asociados&rdquo;
            </p>
            <div style={{ height: "2.5rem" }} />
            <p className="font-bold leading-snug text-center" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", color: "#0d1528" }}>
              Nuestra cabina de limpieza <span style={{ color: "#e07820", textTransform: "uppercase" }}>no modifica la conducta</span> del trabajador,{" "}
              <span style={{ color: "#e07820", textTransform: "uppercase" }}>elimina la fuente</span> del riesgo.
            </p>
          </div>
        </section>

        {/* VIDEO VIMEO */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #06101e 0%, #0d1528 60%, #06101e 100%)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            {/* Header */}
            <div className="text-center mb-10">
<h2 className="text-white text-3xl font-bold">Cabina de Limpieza <span style={{ color: "#e07820" }}>Standard</span></h2>
            </div>
            {/* Video */}
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                paddingBottom: "56.25%",
                border: "1px solid rgba(224,120,32,0.3)",
                boxShadow: "0 0 60px rgba(0,0,0,0.6), 0 0 30px rgba(224,120,32,0.1)",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1187540266?autoplay=0&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* 3. DIAGRAMA TÉCNICO */}
        <section style={{ background: "#f5f7fa" }} className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Componentes</p>
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#0d1528" }}>Diagrama Técnico</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1.44fr 1.44fr 1.12fr", gap: "4px" }}>
              {/* Render 1 — 7 hotspots */}
              <div className="relative shadow-sm" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/productos/cabina-de-limpieza/render-principal1.jpg"
                  alt="Diagrama técnico Cabina de Limpieza — vista 1"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {[
                  { top: "5%",  left: "22%", titulo: "Lorem ipsum componente" },
                  { top: "32%", left: "17%", titulo: "Lorem ipsum componente" },
                  { top: "58%", left: "35%", titulo: "Lorem ipsum componente" },
                  { top: "88%", left: "18%", titulo: "Lorem ipsum componente" },
                  { top: "10%", left: "72%", titulo: "Lorem ipsum componente" },
                  { top: "35%", left: "78%", titulo: "Lorem ipsum componente" },
                  { top: "88%", left: "70%", titulo: "Lorem ipsum componente" },
                ].map((h, i) => (
                  <div key={i} className="absolute group"
                    style={{ top: h.top, left: h.left, transform: "translate(-50%,-50%)", zIndex: 10 }}>
                    <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                      <div className="absolute w-8 h-8 rounded-xl animate-ping opacity-50" style={{ background: "#666666" }} />
                      <svg width="17" height="17" viewBox="0 0 40 40" style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                        <path fillRule="evenodd" fill="#cc0000"
                          d="M20,0 A20,20 0,1,1 20,40 A20,20 0,1,1 20,0 M16,6 H24 V16 H34 V24 H24 V34 H16 V24 H6 V16 H16 Z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-48 px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "rgba(60,60,70,0.85)", backdropFilter: "blur(4px)" }}>
                      <p className="text-white text-xs font-bold">{h.titulo}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Render 2 — 6 hotspots */}
              <div className="relative shadow-sm" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/productos/cabina-de-limpieza/render-principal2.jpg"
                  alt="Diagrama técnico Cabina de Limpieza — vista 2"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {[
                  { top: "5%",  left: "28%", titulo: "Lorem ipsum componente" },
                  { top: "33%", left: "30%", titulo: "Lorem ipsum componente" },
                  { top: "50%", left: "14%", titulo: "Lorem ipsum componente" },
                  { top: "72%", left: "20%", titulo: "Lorem ipsum componente" },
                  { top: "10%", left: "78%", titulo: "Lorem ipsum componente" },
                  { top: "55%", left: "82%", titulo: "Lorem ipsum componente" },
                ].map((h, i) => (
                  <div key={i} className="absolute group"
                    style={{ top: h.top, left: h.left, transform: "translate(-50%,-50%)", zIndex: 10 }}>
                    <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                      <div className="absolute w-8 h-8 rounded-xl animate-ping opacity-50" style={{ background: "#666666" }} />
                      <svg width="17" height="17" viewBox="0 0 40 40" style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                        <path fillRule="evenodd" fill="#cc0000"
                          d="M20,0 A20,20 0,1,1 20,40 A20,20 0,1,1 20,0 M16,6 H24 V16 H34 V24 H24 V34 H16 V24 H6 V16 H16 Z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-48 px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "rgba(60,60,70,0.85)", backdropFilter: "blur(4px)" }}>
                      <p className="text-white text-xs font-bold">{h.titulo}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Empty space on the right */}
              <div />
            </div>
          </div>
        </section>

        {/* 3. TAGS NORMATIVOS */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Normativa</p>
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#0d1528" }}>¿Qué dice la legislación vigente sobre los riesgos asociados a la limpieza de polvo en ropa?</h2>
            <TagsNormativos />
          </div>
        </section>

        {/* 4. ESPECIFICACIONES TÉCNICAS */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Especificaciones <span className="section-heading-accent">técnicas</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#e9ecef]">
              <table className="w-full text-sm specs-table">
                <tbody>
                  {especificaciones.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                      <td className="px-6 py-4 font-semibold text-[#212529] w-1/3 border-b border-[#f0f0f0]">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-[#495057] border-b border-[#f0f0f0]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#6c757d] text-sm mt-4">
              * Especificaciones pueden variar según requerimientos del cliente. Consulta por diseños a medida.
            </p>
          </div>
        </section>

        {/* 5. APLICACIONES */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Aplicaciones y <span className="section-heading-accent">casos de uso</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aplicaciones.map((ap) => (
                <div key={ap.industria} className="group bg-white border border-[#e9ecef] rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={ap.image}
                      alt={ap.industria}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-white font-semibold text-sm">
                      {ap.industria}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-[#495057] text-sm leading-relaxed">{ap.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA FINAL */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1528 0%, #1a3a5c 60%, #06101e 100%)",
          }}
        >
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                ¿Te interesa este producto?
              </h2>
              <p className="text-white/70">Cotizamos sin compromiso en menos de 48 horas.</p>
            </div>
            <ProductContactButton producto="Cabina de Limpieza" large />
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
