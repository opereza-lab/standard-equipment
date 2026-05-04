import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import HeroCarousel from "@/components/HeroCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductContactButton from "@/components/ProductContactButton";
import { CheckIcon } from "@/components/icons";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

export const metadata: Metadata = {
  title: "Capacho Concretos Roll Over | Vaciado Hormigón Chile",
  description: "Capacho Roll Over para vaciado controlado de hormigón desde grúa. Sin derrames, volcamiento lateral 180°. 0.5 a 3 m³. Acero ASTM A36 + AR400. Certificado MC, WPS-PQR.",
  keywords: [
    "capacho roll over",
    "capacho concreto",
    "vaciado hormigón grúa",
    "capacho hormigón construcción",
    "capacho concreto Chile",
    "vaciado hormigón altura",
    "capacho concreto metro",
    "metro de Santiago",
    "construcción metro Santiago",
    "grúas torre hormigón",
  ],
};

const caracteristicas = [
  "Sistema Anti chorreo",
  "Izaje Calculado de acuerdo a ASM BTH-1:2023",
  "Sistema de descarga completamente desarmable",
  "Piezas reemplazables — aumenta la vida útil de tu equipo",
  "Compuerta de descarga de fácil apertura y cierre seguro",
  "Construcción Robusta y duradera",
  "Incluye Grillete certificado",
];

const especificaciones = [
  { label: "Capacidad estándar", value: "0.5 / 1.0 / 1.5 / 2.0 / 3.0 m³" },
  { label: "Material cuerpo", value: "Acero ASTM A36 e=5mm" },
  { label: "Revestimiento interior", value: "Plancha AR400 e=6mm" },
  { label: "Sistema de descarga", value: "Compuerta batiente con cable galvanizado ⌀12mm" },
  { label: "Tipo de volcamiento", value: "Lateral (Roll Over) 180°" },
  { label: "Izaje", value: "Orejas 4 puntos / Certificado de carga WLL" },
  { label: "Acabado exterior", value: "Granallado Sa2.5 + Epóxico 2 capas" },
  { label: "Tolerancias", value: "±3mm dimensional / ±5% capacidad volumétrica" },
  { label: "Norma de soldadura", value: "AWS D1.1 Structural Welding Code" },
  { label: "Tiempo de fabricación", value: "10–15 días hábiles (estándar)" },
];

const aplicaciones = [
  {
    industria: "Construcción en altura",
    descripcion:
      "Ideal para vaciado de losas y columnas en edificios en altura, donde se requiere control total del punto y flujo de descarga de hormigón.",
    image: "/images/crane-steel.jpg",
  },
  {
    industria: "Obras civiles e infraestructura",
    descripcion:
      "Usado en la construcción de túneles, puentes y obras portuarias donde el acceso con camión mixero es limitado o imposible.",
    image: "/images/workers-corridor.jpg",
  },
  {
    industria: "Plantas industriales",
    descripcion:
      "Apropiado para fundaciones y bases de maquinaria dentro de plantas donde se requiere colocación precisa del hormigón.",
    image: "/images/inspection-factory.jpg",
  },
];

const portafolioItems = [
  {
    cliente: "Constructora Besalco",
    proyecto: "Torre residencial Las Condes, Santiago",
    resultado: "Reducción del 40% en tiempo de vaciado por piso",
    capacidad: "2.0 m³ × 4 unidades",
  },
  {
    cliente: "Empresa Constructora Sigro",
    proyecto: "Centro comercial Viña del Mar",
    resultado: "Cero incidentes de derrame en 18 meses de operación",
    capacidad: "1.5 m³ × 6 unidades",
  },
];

const productosRelacionados = [
  {
    name: "Capachos de Escombros",
    href: "/construccion/capachos-de-escombros",
    image: "/images/grinding-sparks-wide.jpg",
    description: "Para retiro de escombros y residuos de construcción",
  },
  {
    name: "Bandejas para Escombros",
    href: "/construccion/bandejas-para-escombros",
    image: "/images/heavy-factory.jpg",
    description: "Protección de zonas de trabajo bajo nivel de faena",
  },
  {
    name: "Porta Pallets",
    href: "/construccion/porta-palets",
    image: "/images/inspection-factory.jpg",
    description: "Transporte vertical de pallets y cargas paletizadas",
  },
];

export default function CapachoRollOverPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "380px" }}>
          <HeroCarousel images={[
            "/images/productos/capacho-roll-ver/roll-over-hero1.png",
            "/images/productos/capacho-roll-ver/roll-over-hero2.png",
          ]} />

          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }} />

          {/* Cuadro negro transparente */}
          <div
            className="absolute left-0 z-10 px-8 py-4"
            style={{
              bottom: "16px",
              width: "50%",
              maxWidth: "750px",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(2px)",
            }}
          >
            <p
              className="text-[#e07820] font-semibold text-sm md:text-base uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.15em" }}
            >
              Construcción · Chile
            </p>

            <h1 className="hero-heading mb-5" style={{ fontSize: "clamp(1.8rem, 4.2vw, 3.3rem)" }}>
              Capachos Concretos{" "}
              <span style={{ fontWeight: 700 }}>Roll Over</span>
              <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
            </h1>

            <p
              className="text-white/90 text-justify"
              style={{ fontSize: "clamp(0.8rem, 1.44vw, 1rem)", lineHeight: "1.65", fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <span style={{ color: "#e07820", fontWeight: 500 }}>
                Ut enim ad minim veniam, quis nostrud exercitation.
              </span>
            </p>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))" }}
          />

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
            <div className="max-w-3xl">
              <p className="text-[#495057] leading-relaxed" style={{ fontSize: "1.15rem" }}>
                El <strong className="text-[#0d1528]">Capacho Concretos Roll Over</strong> es un equipo diseñado para el transporte y vaciado controlado de hormigón en obras donde el acceso con camión mixero es inviable. Su mecanismo de volcamiento lateral de 180° permite vaciar el contenido con precisión desde grúa, eliminando derrames y mejorando la seguridad del personal en obra.
              </p>
            </div>
          </div>
        </section>

        {/* ── OPCIÓN A · LA PARED ─────────────────────────────── */}
        <section style={{ background: "#06101e", position: "relative", overflow: "hidden" }} className="py-24">
          {/* Grid de fondo */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }} />

          <div className="relative max-w-[1400px] mx-auto px-6 md:px-16">
            <p className="text-[#e07820] text-xs font-bold tracking-[0.3em] uppercase mb-16">
              Antes de seguir — hazte estas preguntas
            </p>

            <div className="flex flex-col">
              {[
                "¿Cuánto demora el mixer en entrar a obra para cargar tus capachos?",
                "¿Tienes que excavar para que la canoa del mixer alcance a tus capachos?",
                "¿Estás limitado a cargar siempre desde el mismo punto de la obra?",
              ].map((q, i) => (
                <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "clamp(1.2rem, 2.5vw, 2rem) 0" }}>
                  <p style={{ fontSize: "clamp(1.4rem, 3.8vw, 3.2rem)", fontWeight: 300, color: "rgba(255,255,255,0.28)", lineHeight: 1.15 }}>
                    {q}
                  </p>
                </div>
              ))}

              {/* Pregunta final — explota */}
              <div style={{ paddingTop: "clamp(2rem, 4vw, 3.5rem)" }}>
                <p style={{ fontSize: "clamp(2.2rem, 6.5vw, 6rem)", fontWeight: 900, lineHeight: 1.0, color: "#e07820" }}>
                  ¿Cuánto tiempo de grúa<br />
                  y personal pierdes<br />
                  <span style={{ color: "#ffffff" }}>cada día?</span>
                </p>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-5">
              <div style={{ width: "44px", height: "2px", background: "#e07820", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300 }}>
                El <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Roll Over</strong> elimina todas estas restricciones —
                se carga donde quieras, con la grúa que ya tienes.
              </p>
            </div>
          </div>
        </section>

        {/* ── OPCIÓN B · EL PANEL DE CONTROL ──────────────────── */}
        <section style={{ background: "#0d1528" }} className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16">

            <p className="text-[#e07820] text-xs font-bold tracking-[0.3em] uppercase mb-10">
              Diagnóstico de Operación · Equipos de Hormigón
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { ref: "REF-01", label: "TIEMPO DE ACCESO",    q: "¿Cuánto demora el mixer en entrar a obra para cargar tus capachos?",               sev: "ALTO" },
                { ref: "REF-02", label: "PREPARACIÓN TERRENO", q: "¿Tienes que excavar para que la canoa del mixer alcance a cargar tus capachos?",   sev: "ALTO" },
                { ref: "REF-03", label: "MOVILIDAD OPERATIVA", q: "¿Estás limitado a cargar siempre desde el mismo punto de la obra?",                 sev: "MEDIO" },
              ].map((item) => (
                <div key={item.ref} style={{ padding: "2rem", borderBottom: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ color: "#e07820", fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.1em" }}>{item.ref}</span>
                    <span style={{ background: "rgba(220,38,38,0.12)", color: "#f87171", fontSize: "0.6rem", padding: "2px 8px", fontWeight: 700, letterSpacing: "0.12em", border: "1px solid rgba(220,38,38,0.25)" }}>
                      {item.sev}
                    </span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>
                    {item.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)", fontWeight: 400, lineHeight: 1.45 }}>
                    {item.q}
                  </p>
                </div>
              ))}

              {/* Cuarta — ocupa full width, marcada CRÍTICO */}
              <div style={{ gridColumn: "1 / -1", padding: "2rem 2rem 2.5rem", background: "rgba(224,120,32,0.06)", borderTop: "2px solid #e07820" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                  <span style={{ color: "#e07820", fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.1em" }}>REF-04</span>
                  <span style={{ background: "rgba(220,38,38,0.2)", color: "#ef4444", fontSize: "0.6rem", padding: "2px 10px", fontWeight: 700, letterSpacing: "0.14em", border: "1px solid rgba(220,38,38,0.4)" }}>
                    CRÍTICO
                  </span>
                </div>
                <p style={{ color: "#e07820", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "1rem" }}>
                  COSTO OPERACIONAL ACUMULADO
                </p>
                <p style={{ color: "#ffffff", fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2 }}>
                  ¿Cuántas horas de grúa y personal inmovilizado<br />
                  pierdes <span style={{ color: "#e07820" }}>cada día, cada semana, cada obra?</span>
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-5" style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(224,120,32,0.15)" }}>
              <div style={{ width: "44px", height: "2px", background: "#e07820", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem", fontWeight: 300 }}>
                El <strong style={{ color: "rgba(255,255,255,0.85)" }}>Capacho Roll Over</strong> resuelve cada uno de estos puntos.
              </p>
            </div>

          </div>
        </section>

        {/* 3. CARACTERÍSTICAS */}
        <section className="py-16" style={{ background: "#06101e" }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-visible">
              {/* Features list */}
              <div>
                <h2 className="mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, color: "#ffffff" }}>
                  <strong style={{ fontWeight: 700 }}>Características</strong> técnicas
                  <span style={{ color: "#e07820" }}>.</span>
                </h2>
                <ul className="space-y-3">
                  {caracteristicas.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "#e07820" }}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-white/75 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video */}
              <VideoPlayer src="/videos/capacho-roll-over.mp4" />
            </div>
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

        {/* 5. GALERÍA */}
        <section
          className="py-16"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('/images/heavy-factory.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, color: "#ffffff" }}>
              Nuestra <strong style={{ fontWeight: 700 }}>Fabricación</strong>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "/images/productos/capacho-roll-ver/capacho-roll-over-1.png",
                "/images/productos/capacho-roll-ver/capacho-roll-over-2.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-3.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-4.jpeg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-5.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-6.jpg",
              ].map((img, i) => (
                <div key={i} className="group/img">
                  <div
                    className="relative rounded-xl overflow-hidden transition-all duration-500 group-hover/img:-translate-y-3 group-hover/img:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_8px_48px_rgba(224,120,32,0.25)] cursor-pointer"
                    style={{
                      aspectRatio: "4/3",
                      boxShadow: "0 8px 48px rgba(224,120,32,0.18), 0 2px 24px rgba(0,0,0,0.5)",
                      border: "1px solid rgba(224,120,32,0.25)",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Capacho Roll Over vista ${i + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Overlay oscuro en reposo → se aclara en hover */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover/img:opacity-0"
                      style={{ background: "rgba(0,0,0,0.55)" }}
                    />
                    {/* Degradado inferior */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />
                    {/* Esquinas naranjas */}
                    <div className="absolute top-0 left-0 w-10 h-[2px]" style={{ background: "#e07820" }} />
                    <div className="absolute top-0 left-0 w-[2px] h-10" style={{ background: "#e07820" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. APLICACIONES */}
        <section className="py-16 bg-white">
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

        {/* 8. PORTAFOLIO ESPECÍFICO */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Casos de <span className="section-heading-accent">éxito</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portafolioItems.map((item) => (
                <div key={item.cliente} className="bg-white rounded-xl p-6 border border-[#e9ecef]">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: "#0d1528" }}
                    >
                      {item.cliente.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#212529]">{item.cliente}</p>
                      <p className="text-[#6c757d] text-sm mb-3">{item.proyecto}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: "rgba(15,76,129,0.06)" }}>
                        <span className="text-[#e07820]">→</span>
                        <p className="text-[#0d1528] text-sm font-medium">{item.resultado}</p>
                      </div>
                      <p className="text-[#6c757d] text-xs mt-2">Equipos: {item.capacidad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CTA PEGAJOSO */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1528 0%, #1a3a5c 60%, #06101e 100%)",
          }}
        >
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                ¿Te interesa este producto?
              </h2>
              <p className="text-white/70">Cotizamos sin compromiso en menos de 48 horas.</p>
            </div>
            <ProductContactButton producto="Capacho Concretos Roll Over" large />
          </div>
        </section>

      </main>
      <ProductosCarruselConstruccion excludeId="capachos-concretos-roll-over" />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
