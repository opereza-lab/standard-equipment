import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductosCarruselMineria from "@/components/ProductosCarruselMineria";

export const metadata: Metadata = {
  title: "Rack Polines Truckshop | Almacenamiento Minería Chile",
  description: "Rack para almacenamiento y organización de polines en talleres truckshop mineros. Fabricado en acero estructural con certificación para minería a rajo abierto.",
  keywords: [
    "rack polines",
    "rack polines truckshop",
    "almacenamiento polines minería",
    "equipamiento truckshop",
    "rack minería Chile",
  ],
};

export default function RackPolinesPagina() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/productos/rack-polines/hero-1.png')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute left-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
            <h1 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              <span className="text-white">Rack </span><span style={{ color: "#e07820" }}>Polines</span>
            </h1>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Rack de almacenamiento de Polines customizable
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Carga de Diseño", bottom: "F.S 4" },
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Certificados", bottom: "MC, WPS-PQR" },
              ].map((s) => (
                <div key={s.top} className="px-3 py-3 text-center" style={{ background: "rgba(13,21,40,0.9)" }}>
                  <p className="text-white font-bold text-sm uppercase tracking-wide" style={{ whiteSpace: "nowrap" }}>{s.top}</p>
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
                  src="/images/productos/rack-polines/render-principal.png"
                  alt="Diagrama técnico Rack Polines"
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
                {[
                  { top: "12%", left: "13%", titulo: "Ganchos de Izaje" },
                  { top: "52%", left: "82%", titulo: "Eslingas de Seguridad" },
                  { top: "80%", left: "13%", titulo: "Estructura de Acero Estructural Optimizada" },
                  { top: "87%", left: "52%", titulo: "Pockets para Grúa Horquilla" },
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
                      <p className="text-white text-xs font-bold">{h.titulo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leyenda */}
            <div className="flex flex-col gap-4">
              {[
                { comp: "Ganchos de Izaje",                           desc: "Para izaje seguro del rack completo con grúa." },
                { comp: "Eslingas de Seguridad",                      desc: "Fijación extra de los polines para un almacenamiento seguro sin desplazamiento." },
                { comp: "Estructura de Acero Estructural Optimizada", desc: "Geometría diseñada para contener los polines en condiciones exigentes de faena." },
                { comp: "Pockets para Grúa Horquilla",                                  desc: "Pockets para grúa horquilla que permiten la carga y traslado del rack." },
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

      {/* ── FICHA TÉCNICA ────────────────────────────────────── */}
      <section style={{ background: "#ffffff" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Especificaciones</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>Ficha Técnica</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Compatibilidad", "De acuerdo a solicitud del cliente"],
                  ["Material", "Acero al Carbono"],
                  ["Carga de Diseño", "F.S 4"],
                  ["Certificación", "MC, WPS-PQR, Materiales"],
                  ["Aplicación", "Minería Rajo Abierto, Minería Subterránea, Cementeras, Caleras"],
                  ["Seguridad", "Geometría optimizada para contener los polines sin desplazamiento, eslingas ratchet de seguridad extra"],
                  ["Manipulación", "Pockets para grúa Pockets para Grúa Horquilla y orejas de izaje"],
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
                { sector: "Minería Rajo Abierto", detalle: "Almacenamiento y organización de polines en faenas mineras a cielo abierto" },
                { sector: "Minería Subterránea", detalle: "Gestión de polines en túneles y galerías subterráneas" },
                { sector: "Cementeras", detalle: "Almacenamiento de polines en plantas de producción de cemento" },
                { sector: "Caleras", detalle: "Organización de polines en procesos industriales de cal" },
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

      <ProductosCarruselMineria excludeId="equipamiento-truckshop" />

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-16">
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
      <WhatsAppButton />
    </>
  );
}
