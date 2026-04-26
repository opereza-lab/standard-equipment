"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TAGS = [
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "OSHA 29 CFR 1910.242(b)", infografia: "/images/productos/cabina-de-limpieza/infografia-osha.jpg" },
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "DS 594",                  infografia: null },
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "HEPA",                     infografia: null },
];

export default function TagsNormativos() {
  const [open, setOpen] = useState<string | null>(null);

  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .modal-enter {
          animation: modal-in 0.22s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        }
      `}</style>

      <div className="max-w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TAGS.map((tag) => (
          <div
            key={tag.alt}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => setOpen(tag.alt)}
          >
            <Image
              src={tag.src}
              alt={tag.alt}
              width={900}
              height={1100}
              className="w-full h-auto block rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay hover con texto */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-end pb-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)" }}
            >
              <span className="text-white font-semibold text-sm tracking-wide flex items-center gap-2">
                Ver infografía
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.70)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full text-white font-bold text-lg transition-colors duration-200 hover:bg-white/20"
              style={{ background: "rgba(0,0,0,0.55)" }}
            >
              ✕
            </button>

            {TAGS.find((t) => t.alt === open)?.infografia ? (
              <div style={{ borderRadius: "48px", overflow: "hidden", display: "inline-flex", lineHeight: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TAGS.find((t) => t.alt === open)!.infografia!}
                  alt={open}
                  style={{ maxHeight: "67vh", width: "auto", maxWidth: "90vw", display: "block", marginBottom: "-3px" }}
                />
              </div>
            ) : (
              <div className="rounded-xl p-12 text-center text-gray-300" style={{ background: "rgba(255,255,255,0.1)" }}>
                — contenido por agregar —
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
