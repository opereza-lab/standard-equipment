import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselMineria from "@/components/ProductosCarruselMineria";

export const metadata: Metadata = {
  title: "Rack Maniobras de Izaje | Truckshop Minería | Standard Equipment",
  description: "Rack Maniobras de Izaje para almacenaje de cadenas, grilletes, eslingas, eslingas de cadena, eslingas de cable y eslabones maestros. Equipamiento Truckshop para minería. Certificado MC, WPS-PQR.",
  keywords: [
    // Producto principal
    "rack maniobras",
    "rack maniobras de izaje",
    "maniobras",
    "maniobras de izaje",
    "almacenaje maniobras",
    "almacenamiento maniobras izaje",
    "rack almacenamiento maniobras",
    // Componentes de izaje
    "cadenas",
    "cadenas de izaje",
    "grilletes",
    "grilletes minería",
    "eslingas",
    "eslingas cadena",
    "eslinga cable",
    "eslingas de cable",
    "eslabón maestro",
    "accesorios de izaje",
    // Truckshop
    "truckshop",
    "truck shop",
    "equipamiento truckshop",
    "rack truckshop minería",
    "taller mantención minería",
    // General
    "minería",
    "minería a rajo abierto",
    "rack minería",
  ],
  alternates: {
    canonical: "https://www.standard-equipment.cl/mineria/equipamiento-truckshop/rack-maniobras",
  },
  openGraph: {
    title: "Rack Maniobras de Izaje | Truckshop Minería | Standard Equipment",
    description: "Rack Maniobras de Izaje para almacenaje de cadenas, grilletes, eslingas, eslingas de cadena, eslingas de cable y eslabones maestros. Equipamiento Truckshop para minería.",
    url: "https://www.standard-equipment.cl/mineria/equipamiento-truckshop/rack-maniobras",
    siteName: "Standard Equipment",
    locale: "es_CL",
    type: "website",
  },
};

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Rack Maniobras de Izaje",
  "alternateName": ["Rack Maniobras", "Rack Almacenamiento Maniobras", "Rack Truckshop"],
  "description": "Rack móvil para almacenaje y organización de maniobras de izaje en Truckshop minero: cadenas, grilletes, eslingas, eslingas de cadena, eslingas de cable y eslabones maestros. Capacidad 200 Kg. por gancho. Ruedas Heavy Duty con freno. Certificado MC y WPS-PQR.",
  "brand": {
    "@type": "Brand",
    "name": "Standard Equipment"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Standard Equipment",
    "url": "https://www.standard-equipment.cl"
  },
  "url": "https://www.standard-equipment.cl/mineria/equipamiento-truckshop/rack-maniobras",
  "category": "Equipamiento Truckshop / Almacenaje Maniobras de Izaje",
  "audience": {
    "@type": "Audience",
    "audienceType": "Empresas mineras, contratistas de mantención, supervisores truckshop"
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
      "name": "¿Qué es un Rack de Maniobras de Izaje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Rack de Maniobras de Izaje es una estructura metálica móvil diseñada para el almacenaje organizado de todos los componentes de izaje utilizados en mantención minera: cadenas, grilletes, eslingas de cadena, eslingas de cable y eslabones maestros. Permite tener las maniobras ordenadas, identificadas y disponibles en el Truckshop o taller de mantención."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué maniobras de izaje se pueden almacenar en el Rack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Rack de Maniobras de Standard Equipment está diseñado para almacenar cadenas de izaje, grilletes, eslingas de cadena, eslingas de cable, eslabones maestros y otros accesorios de izaje utilizados en la mantención de equipos mineros. Cada gancho soporta hasta 200 Kg., y la estructura es customizable según los requerimientos del cliente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué faenas y talleres está indicado el Rack Maniobras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Rack Maniobras de Izaje está especialmente indicado para Truckshops mineros y talleres de mantención de equipos de gran tonelaje en minería a rajo abierto. Permite gestionar ordenadamente las maniobras de izaje para CAEX, palas hidráulicas, cargadores frontales y otros equipos de la flota minera."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se traslada el Rack Maniobras dentro del taller?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Rack Maniobras cuenta con ruedas Heavy Duty con freno desmontables para traslado manual suave dentro del taller, y ranuras de carga para grúa horquilla que permiten moverlo cargado con todas las maniobras sin necesidad de descargar previamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué certificaciones tiene el Rack Maniobras de Izaje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Rack Maniobras de Izaje de Standard Equipment cuenta con Memoria de Cálculo estructural (MC) y procedimientos de soldadura calificados WPS-PQR, cumpliendo los estándares de seguridad exigidos en faenas mineras de Chile y Latinoamérica."
      }
    }
  ]
};

export default function RackManiobraPage() {
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
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/productos/rack-maniobras/hero-1.png')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0 bottom-0 md:bottom-4" style={{ maxWidth: "535px", zIndex: 2 }}>
          <div className="px-6 py-5 md:px-10 md:py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
            <h1 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              <span className="text-white">Rack </span><span style={{ color: "#e07820" }}>Maniobras</span>
            </h1>
            <p className="hidden sm:block text-white/75 leading-relaxed mb-4 text-center" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Rack móvil para almacenamiento de Maniobras de Izaje
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material",     bottom: "Acero Estructural" },
                { top: "Capacidad",    bottom: "2 Ton." },
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

      {/* ── DIAGRAMA TÉCNICO ─────────────────────────────────── */}
      <section style={{ background: "#f5f7fa" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Componentes</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#0d1528" }}>Diagrama Técnico</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full shadow-sm" style={{ aspectRatio: "580/440" }}>
                <Image
                  src="/images/productos/rack-maniobras/render-principal.png"
                  alt="Diagrama técnico Rack Maniobras"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                {[
                  { top: "28%", left: "50%", titulo: "Ganchos de Almacenamiento",   desc: "Capacidad de 200 Kg. por gancho a 1,6 mts. de altura." },
                  { top: "55%", left: "18%", titulo: "Ruedas Heavy Duty con Freno", desc: "Para traslado suave en taller y posicionamiento seguro (Desmontables)." },
                  { top: "80%", left: "38%", titulo: "Ranuras para Grúa Horquilla", desc: "Permite la carga y traslado del rack con grúa horquilla." },
                  { top: "55%", left: "82%", titulo: "Estructura Customizable",      desc: "Espacios de almacenamiento adaptables a los requerimientos del cliente." },
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
                      <p className="text-white text-xs font-bold mb-1">{h.titulo}</p>
                      <p className="text-white/75 text-xs leading-snug">{h.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Leyenda */}
            <div className="flex flex-col gap-4">
              {[
                { comp: "Ganchos de Almacenamiento",   desc: "Capacidad de 200 Kg. por gancho, a una cómoda altura de 1,6 mts." },
                { comp: "Ruedas Heavy Duty con Freno (Desmontables)", desc: "Para un suave traslado en taller y seguro posicionamiento." },
                { comp: "Ranuras para Grúa Horquilla", desc: "Permite la carga y el traslado del rack con grúa horquilla." },
                { comp: "Estructura Customizable",     desc: "Espacios de almacenamiento adaptables a los requerimientos del cliente." },
              ].map((item) => (
                <div key={item.comp} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-3 h-3 mt-1" style={{ background: "#e07820" }} />
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#0d1528" }}>{item.comp}</p>
                    <p className="text-gray-500 text-xs leading-relaxed text-justify">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FICHA TÉCNICA + SECTORES ─────────────────────────── */}
      <section style={{ background: "#ffffff" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Especificaciones</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>Ficha Técnica</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Material",             "Acero Galvanizado"],
                  ["Capacidad por Gancho", "200 Kg."],
                  ["Altura de Gancho",     "1,6 mts."],
                  ["Movilidad",            "Ruedas Heavy Duty con freno (Desmontables)"],
                  ["Manipulación",         "Ranuras de carga para grúa horquilla"],
                  ["Certificación",        "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Fabricación",          "Customizable según requerimiento del cliente"],
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
                { sector: "Truckshop Minero",     detalle: "Almacenamiento organizado de maniobras de izaje en talleres de mantención" },
                { sector: "Minería Rajo Abierto", detalle: "Gestión de componentes de izaje para equipos de gran tonelaje" },
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

      <ProductosCarruselMineria excludeId="equipamiento-truckshop" />

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
