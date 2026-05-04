"use client";

import { useEffect, useState, useCallback } from "react";

export default function HeroCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
    setPaused(true);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % images.length);
    setPaused(true);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, paused]);

  /* Si el usuario interactuó, reanudar el auto-avance después de 6s */
  useEffect(() => {
    if (!paused) return;
    const timeout = setTimeout(() => setPaused(false), 6000);
    return () => clearTimeout(timeout);
  }, [paused, current]);

  return (
    <div className="absolute inset-0">
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="group/arrow absolute left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{ background: "rgba(0,0,0,0.28)", border: "1.5px solid rgba(255,255,255,0.18)" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.55)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.28)")
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="15 18 9 12 15 6" stroke="#e07820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Siguiente imagen"
        className="group/arrow absolute right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{ background: "rgba(0,0,0,0.28)", border: "1.5px solid rgba(255,255,255,0.18)" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.55)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.28)")
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="9 18 15 12 9 6" stroke="#e07820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Rayitas indicadoras */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); }}
            aria-label={`Ir a imagen ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "48px" : "32px",
              height: "5px",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
