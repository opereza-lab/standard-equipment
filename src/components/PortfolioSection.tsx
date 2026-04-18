"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import SplitButton from "./SplitButton";
import { PROYECTOS } from "@/data/portfolio";

const proyectos = PROYECTOS;

const VISIBLE = 4;

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(proyectos.length - VISIBLE, i + 1)), []);

  const canPrev = index > 0;
  const canNext = index < proyectos.length - VISIBLE;

  const startHover = (fn: () => void) => {
    fn(); // mueve inmediatamente al hacer hover
    intervalRef.current = setInterval(fn, 900);
  };

  const stopHover = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#06101e" }}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#e07820] font-semibold text-sm uppercase tracking-widest mb-3">
              Portafolio
            </p>
            <h2 className="section-heading">
              Proyectos que{" "}
              <span className="section-heading-accent">hablan</span> por nosotros
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
          </div>
          <SplitButton href="/portafolio" variant="dark" className="flex-shrink-0 self-start md:self-auto">
            Portafolio completo
          </SplitButton>
        </div>

        {/* Carrusel con flechas laterales */}
        <div className="relative flex items-center gap-6">

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            onMouseEnter={() => canPrev && startHover(prev)}
            onMouseLeave={stopHover}
            disabled={!canPrev}
            className="flex-shrink-0 transition-opacity duration-200"
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
            {proyectos.map((proy) => (
              <div
                key={proy.image}
                className="group rounded-xl overflow-hidden border border-white/10 flex flex-col flex-shrink-0"
                style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`, backgroundColor: "#1a2f4e" }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={proy.image}
                    alt={proy.project}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 text-white"
                    style={{ background: "#e07820" }}
                  >
                    {proy.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <p className={`text-[#6baed6] text-xs tracking-wide mb-1${"rawClient" in proy && proy.rawClient ? "" : " uppercase"}`}>
                    {proy.client}
                  </p>
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug">
                    {proy.project}
                  </h3>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/10 mt-auto">
                    <span className="text-[#e07820] mt-0.5 text-sm">→</span>
                    <p className="text-[#6baed6] text-xs font-medium text-justify">{proy.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Flecha derecha */}
          <button
            onClick={next}
            onMouseEnter={() => canNext && startHover(next)}
            onMouseLeave={stopHover}
            disabled={!canNext}
            className="flex-shrink-0 transition-opacity duration-200"
            style={{ opacity: canNext ? 1 : 0.2, background: "none", border: "none", padding: 0, cursor: canNext ? "pointer" : "default" }}
            aria-label="Siguiente"
          >
            <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
              <line x1="0" y1="7" x2="38" y2="7" stroke="#e07820" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M34 2L43 7L34 12" stroke="#e07820" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: proyectos.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === index ? "#e07820" : "rgba(255,255,255,0.25)" }}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
