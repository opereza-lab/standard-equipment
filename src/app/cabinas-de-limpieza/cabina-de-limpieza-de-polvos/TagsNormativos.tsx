"use client";

import Image from "next/image";
import { useState } from "react";

const TAGS = [
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "OSHA 29 CFR 1910.242(b)", infografia: "/images/productos/cabina-de-limpieza/infografia-osha.jpg" },
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "DS 594",                  infografia: null },
  { src: "/images/productos/cabina-de-limpieza/tag-osha.png",  alt: "HEPA",                     infografia: null },
];

export default function TagsNormativos() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TAGS.map((tag) => (
          <div key={tag.alt} className="relative overflow-hidden rounded-2xl cursor-pointer" onClick={() => setOpen(tag.alt)}>
            <Image
              src={tag.src}
              alt={tag.alt}
              width={900}
              height={1100}
              className="w-full h-auto block rounded-2xl"
            />
            {/* Flecha overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "rgba(0,0,0,0.35)" }}>
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <polyline points="6,10 16,22 26,10" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / popup */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full text-white font-bold text-lg"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              ✕
            </button>

            {TAGS.find((t) => t.alt === open)?.infografia ? (
              <div style={{ borderRadius: "43px", overflow: "hidden", display: "inline-flex", lineHeight: 0 }}>
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
