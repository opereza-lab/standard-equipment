"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductosCarruselMineria from "@/components/ProductosCarruselMineria";

const HERO_IMAGES = [
  "/images/productos/soporte-faceshovel/hero-1.png",
];

export default function SoporteClientPage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length < 2) return;
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
          <div key={img} className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url('${img}')`, opacity: i === heroIndex ? 1 : 0 }} />
        ))}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute left-0 right-0 md:left-auto md:right-0 bottom-0 md:bottom-4 w-full" style={{ zIndex: 2, maxWidth: "525px" }}>
          <div className="px-6 py-5 md:px-10 md:py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)" }}>
              Soporte Baldes
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              Face Shovel
            </h2>
            <p className="hidden sm:block text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Pensado, Diseñado y Calculado para garantizar la Seguridad de las operaciones de inspección y mantención haciendo posible el cambio de elementos de desgaste sin que se haga necesario retirar el Balde del equipo, optimizando así la disponibilidad de su equipo.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Diseño",       bottom: "para Distintos Modelos de Palas Hidráulicas" },
                { top: "Materiales",   bottom: "Ac. Estructural + Ac. Antidesgaste" },
                { top: "Certificados", bottom: "MC, WPS-PQR, Materiales" },
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
            <div className="flex items-center justify-center bg-white p-8 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: "580/440" }}>
                <Image
                  src="/images/productos/soporte-faceshovel/render-principal.png"
                  alt="Diagrama técnico Soporte Baldes Face Shovel"
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
                {[
                  { top: "56%", left: "19%", titulo: "Pockets para grúa horquilla", desc: "Permite el posicionamiento y traslado del soporte con grúa horquilla." },
                  { top: "37%", left: "83%", titulo: "Placas de Apoyo Antidesgaste", desc: "Removibles para ser reemplazadas durante la vida útil del soporte." },
                  { top: "60%", left: "76%", titulo: "Placas de Apoyo Antidesgaste", desc: "Removibles para ser reemplazadas durante la vida útil del soporte." },
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
            </div>

            {/* Leyenda */}
            <div className="flex flex-col gap-4">
              {[
                { comp: "Placas de Apoyo Antidesgaste", desc: "Removibles para ser reemplazadas durante la vida útil del soporte." },
                { comp: "Pocket para Manipulación con Grúa Horquilla", desc: "Permite el posicionamiento y traslado del soporte con grúa horquilla." },
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
                  ["Compatibilidad",     "Disponible para distintos modelos de palas Face Shovel"],
                  ["Material",           "Acero Estructural"],
                  ["Piezas de Desgaste", "Acero HB 400"],
                  ["Certificación",      "Memoria de Cálculo, WPS-PQR, Materiales"],
                  ["Aplicación",         "Minería a Rajo Abierto"],
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
                { sector: "Minería Rajo Abierto", detalle: "Inspección y Mantención de baldes Face Shovel de palas Hidráulicas" },
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

      <ProductosCarruselMineria excludeId="soporte-baldes-face-shovel" />

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
