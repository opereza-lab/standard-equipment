"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { PRODUCTOS_MINERIA, type ProductoMineria } from "@/data/productos-mineria";

const VISIBLE = 4;

interface Props {
  excludeId: string;
}

export default function ProductosCarruselMineria({ excludeId }: Props) {
  const productos = PRODUCTOS_MINERIA.filter((p) => p.id !== excludeId);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(productos.length - VISIBLE, i + 1)), [productos.length]);
  const canPrev = index > 0;
  const canNext = index < productos.length - VISIBLE;

  const startHover = (fn: () => void) => { fn(); intervalRef.current = setInterval(fn, 900); };
  const stopHover = () => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } };

  return (
    <section style={{ background: "#0d1528" }} className="py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Línea Minería</p>
        <h2 className="text-3xl font-bold text-white mb-12">Otros Productos</h2>
        <div className="relative flex items-center gap-6">
          {/* Flecha izquierda */}
          <button
            onClick={prev}
            onMouseEnter={() => canPrev && startHover(prev)}
            onMouseLeave={stopHover}
            disabled={!canPrev}
            style={{ opacity: canPrev ? 1 : 0.2, background: "none", border: "none", padding: 0, cursor: canPrev ? "pointer" : "default" }}
            aria-label="Anterior"
          >
            <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
              <line x1="48" y1="7" x2="10" y2="7" stroke="#e07820" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 2L5 7L14 12" stroke="#e07820" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="overflow-hidden flex-1">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 8px)))` }}
            >
              {productos.map((prod: ProductoMineria) => (
                <a
                  key={prod.id}
                  href={prod.href}
                  className="group border border-white/10 flex flex-col overflow-hidden hover:border-[#e07820] transition-colors flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`, backgroundColor: "#1a2f4e" }}
                >
                  <div className="relative h-44 overflow-hidden bg-[#0d1528]">
                    {prod.img ? (
                      <>
                        <Image
                          src={prod.img}
                          alt={prod.nombre}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/20 text-xs uppercase tracking-widest">Foto próximamente</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1" style={{ background: "#0d1528" }}>
                    <div className="w-8 h-0.5" style={{ background: "#e07820" }} />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">{prod.nombre}</h3>
                    {prod.desc && (
                      <p className="text-white/50 text-xs leading-relaxed flex-1">{prod.desc}</p>
                    )}
                    <span className="text-[#e07820] text-xs font-bold uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                      Ver Producto →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={next}
            onMouseEnter={() => canNext && startHover(next)}
            onMouseLeave={stopHover}
            disabled={!canNext}
            style={{ opacity: canNext ? 1 : 0.2, background: "none", border: "none", padding: 0, cursor: canNext ? "pointer" : "default" }}
            aria-label="Siguiente"
          >
            <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
              <line x1="0" y1="7" x2="38" y2="7" stroke="#e07820" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M34 2L43 7L34 12" stroke="#e07820" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {productos.length > VISIBLE && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: productos.length - VISIBLE + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === index ? "#e07820" : "rgba(255,255,255,0.25)" }}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
