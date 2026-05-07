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
  title: "Capacho Concreteros Roll Over | Vaciado Hormigón Chile",
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
  "Izaje Calculado de acuerdo a ASME BHT-1-2023",
  "Sistema de descarga completamente desarmable",
  "Piezas reemplazables — aumenta la vida útil de tu equipo —",
  "Compuerta de descarga de fácil apertura y cierre seguro",
  "Construcción Robusta y duradera",
  "Incluye Grillete certificado",
];

const especificaciones = [
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet consectetur" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet consectetur adipiscing" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet consectetur" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet" },
  { label: "Lorem ipsum", value: "Lorem ipsum dolor sit amet consectetur adipiscing" },
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
              <span style={{ display: "block" }}>Capachos Concreteros</span>
              <span style={{ fontWeight: 700 }}>Roll Over</span>
              <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
            </h1>

            <p
              className="text-white/80"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.55rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "0.04em", lineHeight: 1.3 }}
            >
              La nueva forma de trabajar.
            </p>
            <p
              className="text-white/80"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)", fontWeight: 300, letterSpacing: "0.06em", lineHeight: 1.4, marginTop: "0.6rem" }}
            >
              Gran <span style={{ color: "#e07820", fontWeight: 500 }}>Capacidad</span> a Baja <span style={{ color: "#e07820", fontWeight: 500 }}>Altura</span> de Carga
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

        {/* ── EL INTERROGATORIO ────────────────────────────────── */}
        <section style={{ background: "#06101e" }} className="py-20 overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16">

            <p className="text-[#e07820] font-bold uppercase mb-14" style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)", letterSpacing: "0.2em" }}>
              Antes de seguir — hazte estas preguntas
            </p>

            <div className="flex flex-col gap-10">

              <div className="flex items-start gap-5">
                <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1, flexShrink: 0 }}>01</span>
                <p style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.35 }}>
                  ¿Cuánto demora el <strong style={{ color: "#ffffff", fontWeight: 700 }}>mixer en entrar a obra</strong> para cargar tus capachos?
                </p>
              </div>

              <div className="w-full" style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              <div className="flex items-start gap-5">
                <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1, flexShrink: 0 }}>02</span>
                <p style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.35 }}>
                  ¿Tienes que hacer una <strong style={{ color: "#ffffff", fontWeight: 700 }}>excavación</strong> para que la canoa del mixer pueda cargar tus capachos?
                </p>
              </div>

              <div className="w-full" style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              <div className="flex items-start gap-5">
                <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1, flexShrink: 0 }}>03</span>
                <p style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.35 }}>
                  ¿Estás <strong style={{ color: "#ffffff", fontWeight: 700 }}>limitado a cargar siempre desde el mismo punto</strong> de la obra?
                </p>
              </div>

              <div className="w-full" style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              <div className="flex items-start gap-5 pt-4">
                <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1, flexShrink: 0 }}>04</span>
                <p style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.25 }}>
                  ¿Cuántas horas de <span style={{ color: "#e07820" }}>grúa y personal inmovilizado</span> pierdes cada día, cada semana, cada obra?
                </p>
              </div>

            </div>

            <div className="mt-16 pt-10 flex items-center gap-5" style={{ borderTop: "1px solid rgba(224,120,32,0.3)" }}>
              <div style={{ width: "44px", height: "2px", background: "#e07820", flexShrink: 0 }} />
              <p style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)", color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>
                Con nuestros <strong style={{ color: "#ffffff", fontWeight: 600 }}>Capachos Roll Over</strong> cargas desde cualquier lugar de la obra — incluso <strong style={{ color: "#ffffff", fontWeight: 600 }}>a pie de calle</strong>.
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
        <section
          className="py-16 relative"
          style={{
            backgroundImage: "linear-gradient(rgba(6,16,30,0.82), rgba(6,16,30,0.82)), url('/images/construction-site.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Foto 1:1 con overlay y hover */}
              <div className="group/img" style={{ maxWidth: "60%" }}>
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_8px_48px_rgba(224,120,32,0.25)]"
                  style={{ aspectRatio: "1/1", border: "1px solid rgba(224,120,32,0.25)" }}
                >
                  <Image
                    src="/images/productos/capacho-roll-ver/capacho-roll-over-7.jpg"
                    alt="Capacho Concreteros Roll Over"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  {/* Overlay que desaparece en hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-50 group-hover/img:opacity-0"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  />
                  {/* Esquinas naranjas */}
                  <div className="absolute top-0 left-0 w-10 h-[2px]" style={{ background: "#e07820" }} />
                  <div className="absolute top-0 left-0 w-[2px] h-10" style={{ background: "#e07820" }} />
                </div>
              </div>

              {/* Tabla de capacidades */}
              <div>
                <h3 className="mb-6" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", fontWeight: 700, color: "#ffffff" }}>
                  Capacidades<span style={{ color: "#e07820" }}>.</span>
                </h3>
                <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden" }}>
                  <table className="w-full" style={{ borderCollapse: "collapse", fontSize: "1.25rem" }}>
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.08)" }}>
                        {["Volumen","Tara","WLL *"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-bold" style={{ color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { vol: "0,75 m³", tara: "400 Kg",  wll: "2.250 Kg" },
                        { vol: "1,0 m³",  tara: "450 Kg",  wll: "3.000 Kg" },
                        { vol: "1,5 m³",  tara: "605 Kg",  wll: "4.500 Kg" },
                        { vol: "2 m³",    tara: "660 Kg",  wll: "6.000 Kg" },
                      ].map((row, i, arr) => (
                        <tr key={row.vol} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)" }}>
                          <td className="px-4 py-3 font-bold" style={{ color: "#e07820", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.vol}</td>
                          <td className="px-4 py-3" style={{ color: "rgba(255,255,255,0.85)", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.tara}</td>
                          <td className="px-4 py-3" style={{ color: "rgba(255,255,255,0.85)", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.wll}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                  * Límite de carga de trabajo
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Separador */}
        <div style={{ height: "1px", background: "#e07820" }} />

        {/* 5. ACCESORIOS */}
        <section
          className="py-16 relative"
          style={{
            backgroundImage: "linear-gradient(rgba(6,16,30,0.82), rgba(6,16,30,0.82)), url('/images/construction-site.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">

              {/* Foto 1:1 — visualmente derecha (order-2) */}
              <div className="group/img lg:order-2">
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_8px_48px_rgba(224,120,32,0.25)]"
                  style={{ aspectRatio: "1/1", border: "1px solid rgba(224,120,32,0.25)" }}
                >
                  <Image
                    src="/images/productos/capacho-roll-ver/capacho-roll-over-8.png"
                    alt="Accesorios Capacho Roll Over"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  {/* Overlay que desaparece en hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-50 group-hover/img:opacity-0"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  />
                  {/* Esquinas naranjas — top-right */}
                  <div className="absolute top-0 right-0 w-10 h-[2px]" style={{ background: "#e07820" }} />
                  <div className="absolute top-0 right-0 w-[2px] h-10" style={{ background: "#e07820" }} />

                  {/* Hotspots */}
                  {[
                    { top: "14%",  left: "73%", titulo: "Barra de apertura de compuerta extendida", desc: "Descripción del accesorio 1.", tooltipDown: true },
                    { top: "48%", left: "43%", titulo: "Asas de manipulación Manga", desc: "Descripción del accesorio 2.", tooltipDown: false },
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="absolute group"
                      style={{ top: h.top, left: h.left, transform: "translate(-50%,-50%)", zIndex: 10 }}
                    >
                      <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                        <div className="absolute w-8 h-8 rounded-xl animate-ping opacity-50" style={{ background: "#666666" }} />
                        <svg width="20" height="20" viewBox="0 0 40 40" style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                          <path fillRule="evenodd" fill="#cc0000"
                            d="M20,0 A20,20 0,1,1 20,40 A20,20 0,1,1 20,0 M16,6 H24 V16 H34 V24 H24 V34 H16 V24 H6 V16 H16 Z" />
                        </svg>
                      </div>
                      <div className={`absolute left-1/2 -translate-x-1/2 w-44 px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${h.tooltipDown ? "top-full mt-2" : "bottom-full mb-2"}`}
                        style={{ background: "rgba(60,60,70,0.85)", backdropFilter: "blur(4px)" }}>
                        <p className="text-white text-xs font-bold">{h.titulo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenido — visualmente izquierda (order-1) */}
              <div className="lg:order-1">
                <h3 className="mb-6" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", fontWeight: 700, color: "#ffffff" }}>
                  Accesorios Seguridad Operacional<span style={{ color: "#e07820" }}>.</span>
                </h3>
                {/* Tabla con borde izquierdo rojo */}
                <div style={{ borderRadius: "12px", overflow: "hidden", borderLeft: "3px solid #cc0000", border: "1px solid rgba(255,255,255,0.1)", borderLeftWidth: "3px", borderLeftColor: "#cc0000" }}>
                  <table className="w-full" style={{ borderCollapse: "collapse", fontSize: "1.25rem" }}>
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.08)" }}>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: "#e07820", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Accesorio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Asas de manipulación Manga",
                        "Barra de apertura de compuerta extendida",
                      ].map((acc, i, arr) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)" }}>
                          <td className="px-4 py-3" style={{ color: "#ffffff", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{acc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bloque de riesgo operacional */}
                <div className="mt-6 space-y-4">

                  {/* Alerta de riesgo — prominente */}
                  <div className="flex items-start gap-4 px-5 py-4 rounded-lg" style={{ background: "rgba(180,20,20,0.28)", border: "1px solid rgba(204,0,0,0.6)" }}>
                    <span style={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>⚠️</span>
                    <p style={{ fontSize: "clamp(0.78rem, 1.1vw, 0.9rem)", color: "rgba(255,200,200,0.95)", lineHeight: 1.6 }}>
                      Un capacho de 750 lts es una{" "}
                      <strong style={{ color: "#ff6b6b", fontWeight: 700 }}>carga suspendida de más de 2 toneladas</strong>.
                      Para manipular la manga de descarga, el operador la toma con sus manos o apoya el cuerpo sobre ella —{" "}
                      <strong style={{ color: "#ff6b6b", fontWeight: 700 }}>quedando directamente bajo la carga suspendida</strong>.
                      En cualquier industria, incluso caminar bajo una carga suspendida está{" "}
                      <strong style={{ color: "#ff6b6b", fontWeight: 700 }}>estrictamente prohibido</strong>:
                      es una de las principales causas de{" "}
                      <strong style={{ color: "#ff6b6b", fontWeight: 700 }}>accidentes fatales en Chile</strong>.
                    </p>
                  </div>

                  {/* Contexto */}
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
                    En construcción esta práctica es habitual y se considera{" "}
                    <em>la única forma</em> de operar un capacho concretero.{" "}
                    <strong style={{ color: "#ffffff" }}>¿Pero hay alternativas?</strong> Sí, las hay.
                  </p>

                </div>
              </div>

            </div>

            {/* Solución — FULL WIDTH */}
            <div className="mt-10" style={{ paddingLeft: "1rem", borderLeft: "3px solid #e07820" }}>
              <p style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#e07820", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.75rem" }}>
                Sí hay alternativas. Y las tenemos.
              </p>
              <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                La <strong style={{ color: "#ffffff" }}>Barra de apertura de compuesta extendida</strong> permite al operador que abre la compuerta de descarga manipulando la cuerda, lo haga alejado de la carga suspendida, y las <strong style={{ color: "#ffffff" }}>asas de manipulación de manga</strong> hacen lo propio, con largos ajustables, permiten la manipulación de la manga por <strong style={{ color: "#ffffff" }}>1 ó 2 trabajadores en simultaneo</strong>
              </p>
            </div>

          </div>
        </section>

        {/* 5b. RENDERS ACCESORIOS — full width */}
        <section className="py-16" style={{ background: "#06101e" }}>
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">

            {/* Statement centrado — puente visual */}
            <div className="text-center mb-14">
              <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#e07820", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem" }}>
                Sacar al trabajador de la línea de fuego.
              </p>
              <p style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "960px", margin: "0 auto" }}>
                Nuestros capachos Roll Over incluyen accesorios opcionales para lograrlo:{" "}
                la <strong style={{ color: "#ffffff" }}>Barra de apertura de compuerta extendida</strong> permite
                operar desde una posición alejada de la carga, y las{" "}
                <strong style={{ color: "#ffffff" }}>Asas de manipulación de manga</strong> —
                con largos ajustables — permiten la manipulación por{" "}
                <strong style={{ color: "#ffffff" }}>1 ó 2 trabajadores en simultáneo</strong>,{" "}
                sin exponerse bajo la carga.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

              {/* — 01 Asas de manipulación Manga — */}
              <div className="flex flex-col items-center gap-4 mx-auto w-full" style={{ maxWidth: "480px" }}>
                {/* Número */}
                <div className="w-full">
                  <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 2.8rem)", lineHeight: 1, fontFamily: "var(--font-barlow-condensed)", fontStyle: "italic" }}>01</span>
                </div>
                {/* Render */}
                <div className="relative w-full" style={{ height: "280px" }}>
                  <Image
                    src="/images/productos/capacho-roll-ver/accesorio-asas-manga.png"
                    alt="Asas de manipulación Manga"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
                <p style={{ color: "#e07820", fontWeight: 700, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", textAlign: "center" }}>
                  Asas de Manipulación Manga
                </p>
              </div>

              {/* — 02 Barra de apertura con SVG overlay — */}
              <div className="flex flex-col items-center gap-4 mx-auto w-full" style={{ maxWidth: "480px" }}>
                {/* Número */}
                <div className="w-full">
                  <span style={{ color: "#e07820", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 2.8rem)", lineHeight: 1, fontFamily: "var(--font-barlow-condensed)", fontStyle: "italic" }}>02</span>
                </div>
                {/* Render + SVG */}
                <div className="relative w-full" style={{ height: "280px" }}>
                  <Image
                    src="/images/productos/capacho-roll-ver/accesorio-barra-compuerta.png"
                    alt="Barra de apertura de compuerta extendida"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                  {/* SVG — traza geometría de la barra. viewBox = dimensiones reales 1200x896 */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1200 896"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ animation: "svg-glow 1.8s ease-in-out infinite" }}
                  >
                    <defs>
                      <filter id="orange-glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {/* Pivote → codo → punta */}
                    <polyline
                      points="885,605 945,504 996,450 1026,402"
                      fill="none"
                      stroke="#e07820"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#orange-glow)"
                    />
                    <circle cx="885" cy="605" r="15" fill="none" stroke="#e07820" strokeWidth="6" filter="url(#orange-glow)" />
                    <circle cx="1026" cy="402" r="18" fill="none" stroke="#e07820" strokeWidth="7" filter="url(#orange-glow)" />
                  </svg>
                </div>
                <p style={{ color: "#e07820", fontWeight: 700, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", textAlign: "center" }}>
                  Barra de apertura de compuerta Extendida
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 6. GALERÍA */}
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
            <ProductContactButton producto="Capacho Concreteros Roll Over" large />
          </div>
        </section>

      </main>
      <ProductosCarruselConstruccion excludeId="capachos-concreteros-roll-over" />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
