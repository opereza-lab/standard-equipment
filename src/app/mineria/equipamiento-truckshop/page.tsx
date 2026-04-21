import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Equipamiento Truckshop Minero | Racks y Accesorios Chile",
  description: "Equipamiento truckshop para talleres de mantención de equipos mineros. Racks de maniobras, polines y martillos DTH. Acero estructural certificado MC, WPS-PQR.",
  keywords: [
    "equipamiento truckshop",
    "equipamiento truckshop minería",
    "racks truckshop minero",
    "taller mantención minería",
    "rack maniobras truckshop",
    "rack polines minería",
    "rack martillos DTH",
    "accesorios truckshop Chile",
  ],
};

const productos = [
  {
    nombre: "Rack Maniobras",
    desc: "Rack diseñado para optimizar el espacio y la seguridad en talleres de mantención de equipos mineros de gran tonelaje. Fabricado en acero estructural con certificación de memoria de cálculo.",
    specs: ["Acero Estructural", "MC + WPS-PQR", "A medida"],
    specLabels: ["Material", "Certificación", "Fabricación"],
    href: "/mineria/equipamiento-truckshop/rack-maniobras",
    img: "/images/workers-corridor.jpg",
  },
  {
    nombre: "Rack Polines",
    desc: "Sistema de almacenamiento y organización de polines para talleres de mantención minera. Permite una gestión eficiente de componentes durante la mantención de camiones de alto tonelaje.",
    specs: ["Acero Estructural", "MC + WPS-PQR", "A medida"],
    specLabels: ["Material", "Certificación", "Fabricación"],
    href: "/mineria/equipamiento-truckshop/rack-polines",
    img: "/images/inspection-factory.jpg",
  },
  {
    nombre: "Rack Martillos DTH",
    desc: "Rack para almacenamiento y organización de martillos DTH en faenas mineras. Optimiza el espacio y garantiza condiciones seguras de almacenamiento en talleres de perforación.",
    specs: ["Acero Estructural", "MC + WPS-PQR", "A medida"],
    specLabels: ["Material", "Certificación", "Fabricación"],
    href: "/mineria/equipamiento-truckshop/rack-martillos-dth",
    img: "/images/mechanic-red.jpg",
  },
];

export default function EquipamientoTruckshopPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden flex items-end"
        style={{ aspectRatio: "21/9", minHeight: "420px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mechanic-red.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.60)", zIndex: 1 }} />

        {/* Gradient bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #0d1528 0%, transparent 100%)", zIndex: 2 }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 pb-14 w-full" style={{ zIndex: 3 }}>
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Línea Minería</p>
          <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Equipamiento
          </h1>
          <h2 className="font-black uppercase leading-none mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#e07820" }}>
            Truckshop
          </h2>
          <p className="text-white/70 max-w-xl leading-relaxed" style={{ fontSize: "15px" }}>
            Soluciones de almacenamiento y organización certificadas para talleres de mantención de equipos mineros de gran tonelaje.
          </p>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-10 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Acero Estructural", sub: "Material base certificado" },
            { label: "Memoria de Cálculo", sub: "Certificación WPS-PQR y materiales" },
            { label: "Fabricación a Medida", sub: "Adaptado a tu faena" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-1 self-stretch flex-shrink-0" style={{ background: "#e07820" }} />
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wide">{item.label}</p>
                <p className="text-white/50 text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT CARDS ────────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Catálogo</p>
          <h2 className="text-3xl font-bold text-white mb-14">Nuestro Equipamiento</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productos.map((prod) => (
              <a
                key={prod.nombre}
                href={prod.href}
                className="group flex flex-col overflow-hidden border border-white/10 hover:border-[#e07820] transition-all duration-300"
                style={{ background: "#0a1020" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <Image
                    src={prod.img}
                    alt={prod.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,16,32,0.85) 0%, transparent 60%)" }}
                  />
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                    <div className="w-8 h-0.5 mb-3" style={{ background: "#e07820" }} />
                    <h3 className="text-white font-black uppercase text-lg leading-tight tracking-wide">
                      {prod.nombre}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col gap-5 flex-1">
                  <p className="text-white/60 text-sm leading-relaxed">{prod.desc}</p>

                  {/* Specs strip */}
                  <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                    {prod.specs.map((val, i) => (
                      <div
                        key={prod.specLabels[i]}
                        className="px-3 py-3 text-center"
                        style={{ background: "rgba(13,21,40,0.8)" }}
                      >
                        <p className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">
                          {prod.specLabels[i]}
                        </p>
                        <p className="text-white font-semibold text-xs leading-tight">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
                    <span
                      className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-white/80"
                      style={{ color: "#e07820" }}
                    >
                      Ver Producto
                    </span>
                    <span
                      className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold transition-all group-hover:translate-x-1"
                      style={{ background: "#e07820" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">¿Necesitas equipamiento a medida?</h2>
            <p className="text-white/60">Diseñamos y fabricamos según los requerimientos específicos de tu faena.</p>
          </div>
          <a
            href="/contacto"
            className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-4 font-bold text-white text-sm tracking-widest uppercase transition-opacity hover:opacity-85"
            style={{ background: "#e07820" }}
          >
            Solicitar Cotización
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
