"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

function useVisibleCount() {
  const [visible, setVisible] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROYECTOS } from "@/data/portfolio";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

const proyectosRelacionados = PROYECTOS.filter((p) => p.tag === "Construcción");

const HERO_IMAGES = [
  "/images/productos/capacho-autovolteo/hero-1.png",
  "/images/productos/capacho-autovolteo/hero-2.png",
];

function ProyectosCarrusel({ proyectos }: { proyectos: typeof PROYECTOS }) {
  const visible = useVisibleCount();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const safeIndex = Math.min(index, Math.max(0, proyectos.length - visible));

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(proyectos.length - visible, i + 1)), [proyectos.length, visible]);
  const canPrev = safeIndex > 0;
  const canNext = safeIndex < proyectos.length - visible;

  if (proyectos.length === 0) return null;

  const startHover = (fn: () => void) => { fn(); intervalRef.current = setInterval(fn, 900); };
  const stopHover = () => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } };

  return (
    <section style={{ background: "#0d1528" }} className="py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Portafolio</p>
        <h2 className="text-3xl font-bold text-white mb-12">Proyectos Relacionados</h2>
        <div className="relative flex items-center gap-6">
          <button onClick={prev} onMouseEnter={() => canPrev && startHover(prev)} onMouseLeave={stopHover}
            disabled={!canPrev} style={{ opacity: canPrev ? 1 : 0.2, background: "none", border: "none", padding: 0, cursor: canPrev ? "pointer" : "default" }} aria-label="Anterior">
            <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
              <line x1="48" y1="7" x2="10" y2="7" stroke="#e07820" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 2L5 7L14 12" stroke="#e07820" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${safeIndex} * (100% / ${visible} + 24px)))` }}>
              {proyectos.map((proy) => (
                <div key={proy.image}
                  className="group rounded-xl overflow-hidden border border-white/10 flex flex-col flex-shrink-0"
                  style={{ width: `calc((100% - ${(visible - 1) * 24}px) / ${visible})`, backgroundColor: "#1a2f4e" }}>
                  <div className="relative h-40 overflow-hidden">
                    <Image src={proy.image} alt={proy.project} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 text-white" style={{ background: "#e07820" }}>{proy.tag}</span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className={`text-[#6baed6] text-xs tracking-wide mb-1${"rawClient" in proy && proy.rawClient ? "" : " uppercase"}`}>{proy.client}</p>
                    <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{proy.project}</h3>
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/10 mt-auto">
                      <span className="text-[#e07820] mt-0.5 text-sm">→</span>
                      <p className="text-[#6baed6] text-xs font-medium text-justify">{proy.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} onMouseEnter={() => canNext && startHover(next)} onMouseLeave={stopHover}
            disabled={!canNext} style={{ opacity: canNext ? 1 : 0.2, background: "none", border: "none", padding: 0, cursor: canNext ? "pointer" : "default" }} aria-label="Siguiente">
            <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
              <line x1="0" y1="7" x2="38" y2="7" stroke="#e07820" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M34 2L43 7L34 12" stroke="#e07820" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {proyectos.length > visible && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: proyectos.length - visible + 1 }).map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === safeIndex ? "#e07820" : "rgba(255,255,255,0.25)" }} aria-label={`Ir a ${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function CapachoClientPage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO CARRUSEL 21:9 ───────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url('${img}')`, opacity: i === heroIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute left-0 bottom-0 md:bottom-4 w-full" style={{ zIndex: 2, maxWidth: "535px" }}>
          <div className="px-6 py-5 md:px-10 md:py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)" }}>
              Capacho Escombros
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              con Autovolteo
            </h2>
            <p className="hidden sm:block text-white/75 leading-relaxed mb-4 text-center" style={{ fontSize: "16px", width: 0, minWidth: "100%" }}>
              &quot;Sistema de descarga operado exclusivamente por la grúa&quot;<br />
              <span className="block mt-1">— sin equipos de apoyo, sin cambio de maniobra —</span>
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Capacidades",    bottom: "1 – 3 m³" },
                { top: "Material",     bottom: "Acero Estructural" },
                { top: "Certificados", bottom: "MC, WPS-PQS" },
              ].map((s) => (
                <div key={s.top} className="px-3 py-3 text-center" style={{ background: "rgba(13,21,40,0.9)" }}>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{s.top}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.bottom}</p>
                </div>
              ))}
            </div>
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
                src="/images/productos/capacho-autovolteo/render-principal.png"
                alt="Diagrama técnico del capacho autovolteo"
                fill
                className="object-cover"
                sizes="50vw"
              />
              {[
                { top: "6%",  left: "52%", titulo: "Gancho de Izaje",         desc: "Incluye Grillete Certificado." },
                { top: "22%", left: "78%", titulo: "Marco Estructural",        desc: "Acero de alta resistencia, activa el volteo." },
                { top: "55%", left: "68%", titulo: "Mecanismo de Autovolteo",  desc: "Volteo controlado solo con la grúa." },
                { top: "78%", left: "38%", titulo: "Fondo Reforzado",          desc: "Fondo reforzado con perfiles para mayor durabilidad de la placa inferior." },
                { top: "60%", left: "18%", titulo: "Cuerpo en Acero",          desc: "Pintura de alta durabilidad." },
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
                  <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-44 px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "rgba(60,60,70,0.85)", backdropFilter: "blur(4px)" }}>
                    <p className="text-white text-xs font-bold mb-1">{h.titulo}</p>
                    <p className="text-white/75 text-xs leading-snug">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {[
                { n: "1", comp: "Gancho de Izaje",           desc: "Incluye Grillete Certificado. *Consúltanos por tu Eslinga Cadena con ganchos seguro y Eslabón Maestro*" },
                { n: "2", comp: "Marco Estructural",         desc: "Acero de alta resistencia, activa el volteo." },
                { n: "3", comp: "Mecanismo de Autovolteo",   desc: "Volteo controlado solo con la grúa." },
                { n: "4", comp: "Fondo Reforzado",           desc: "Fondo reforzado con perfiles para mayor durabilidad de la placa inferior." },
                { n: "5", comp: "Cuerpo en Acero",           desc: "Pintura de alta durabilidad." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 items-start">
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

      {/* ── FICHA TÉCNICA ────────────────────────────────────── */}
      <section style={{ background: "#ffffff" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Especificaciones</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>Ficha Técnica</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Capacidades",           "1 a 3 m³"],
                  ["Sistema de descarga", "Autovolteo — solo con la grúa"],
                  ["Estructura",          "Acero estructural"],
                  ["Fondo",              "Reforzado"],
                  ["Volteo",             "Sin cambio de maniobra"],
                  ["Certificación",      "MC, WPS-PQR, Materiales"],
                  ["Fabricación",        "A medida según requerimiento"],
                  ["Aplicación",         "Construcción / Demolición"],
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
                { sector: "Construcción",       detalle: "Retiro de escombros en obras de edificación" },
                { sector: "Demolición",         detalle: "Manejo de material demolido en altura" },
                { sector: "Obras Civiles",      detalle: "Infraestructura y proyectos viales" },
                { sector: "Minería",            detalle: "Movimiento de escombros en gral. y elevación de materiales a través de piques" },
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

      {/* ── SECUENCIA + VIDEO ────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Funcionamiento</p>
              <h2 className="text-3xl font-bold text-white">Secuencia de Izaje y Descarga</h2>
            </div>
            <p className="text-white/50 text-sm max-w-sm md:text-right">
              Tres etapas de operación controladas exclusivamente desde la grúa.
              Sin intervención de personal en el punto de descarga.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Image
                src="/images/productos/capacho-autovolteo/render-secuencia.png"
                alt="Secuencia de izaje y volteo del capacho"
                width={900}
                height={420}
                className="w-full object-contain"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase">Video</p>
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://player.vimeo.com/video/1139107273?autoplay=0&title=0&byline=0&portrait=0&color=e07820"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Capacho para Escombros con Autovolteo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTROS PRODUCTOS ──────────────────────────────────── */}
      <ProductosCarruselConstruccion excludeId="capachos-de-escombros" />

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section id="contacto" style={{ background: "#0d1528" }} className="py-16">
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
    </>
  );
}
