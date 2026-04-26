import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductContactButton from "@/components/ProductContactButton";
import { CheckIcon } from "@/components/icons";
import TagsNormativos from "./TagsNormativos";

export const metadata: Metadata = {
  title: "Cabina de Limpieza de Polvos | Prevención Silicosis HSEC",
  description: "Cabinas de limpieza de polvos para minería e industria. Prevención de silicosis y enfermedades profesionales. Cumplimiento HSEC y normativa PLANESI. Cabina desempolvado y ducha de aire.",
  keywords: [
    "cabinas de limpieza de polvos",
    "cabina de limpieza de personal",
    "planesi",
    "silicosis",
    "salud ocupacional",
    "HSEC",
    "enfermedades profesionales",
    "cabina desempolvado",
    "ducha de aire",
    "prevención silicosis minería",
    "higiene industrial Chile",
  ],
};

const caracteristicas = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
];

const especificaciones = [
  { label: "Material", value: "Lorem ipsum" },
  { label: "Sistema", value: "Lorem ipsum dolor sit amet" },
  { label: "Certificación", value: "Lorem ipsum" },
  { label: "Aplicación", value: "Lorem ipsum / Lorem ipsum" },
  { label: "Fabricación", value: "Lorem ipsum" },
];

const aplicaciones = [
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/inspection-factory.jpg",
  },
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/workers-corridor.jpg",
  },
  {
    industria: "Lorem ipsum",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/images/heavy-factory.jpg",
  },
];

export default function CabinaLimpiezaPolvoPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/productos/cabina-de-limpieza/hero-1.jpg')" }} />

          {/* Bloque superior izquierdo — tagline */}
          <div className="absolute flex items-center gap-3" style={{ top: "28%", left: "3%", zIndex: 2 }}>
            {/* STANDARD vertical */}
            <span
              className="text-white/40 uppercase select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "clamp(0.6rem, 0.85vw, 0.8rem)", letterSpacing: "0.25em", fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, fontStyle: "italic" }}
            >
              STANDARD
            </span>
            {/* Texto principal */}
            <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.45)", fontFamily: "'Roboto', sans-serif" }}>
              <p className="text-white font-bold leading-tight" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}>
                Simple, efectiva
              </p>
              <p className="text-white font-bold leading-tight" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}>
                mínima mantención
              </p>
            </div>
          </div>

          <div className="absolute left-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
            <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.82)" }}>
              <h1 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
                <span className="text-white">Cabina de </span><span style={{ color: "#e07820" }}>Limpieza</span>
              </h1>
              <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
                {[
                  { top: "Lorem", bottom: "Lorem ipsum" },
                  { top: "Lorem", bottom: "Lorem ipsum" },
                  { top: "Lorem", bottom: "Lorem ipsum" },
                ].map((s) => (
                  <div key={s.top + s.bottom} className="px-3 py-3 text-center" style={{ background: "rgba(13,21,40,0.9)" }}>
                    <p className="text-white font-bold text-sm uppercase tracking-wide" style={{ whiteSpace: "nowrap" }}>{s.top}</p>
                    <p className="text-white/40 text-xs mt-0.5">{s.bottom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. DESCRIPCIÓN CORTA */}
        <section className="py-14 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
            <p className="font-bold italic leading-snug" style={{ fontSize: "clamp(1.2rem, 2.3vw, 1.8rem)", color: "#0d1528" }}>
              &ldquo;La <span style={{ color: "#e07820" }}>conducta</span> del trabajador para eliminar el polvo de su ropa es <span style={{ color: "#e07820" }}>sopletearse</span> con Aire Comprimido, lo que conlleva varios <span style={{ color: "#e07820" }}>riesgos</span> asociados&rdquo;
            </p>
            <div style={{ height: "2.5rem" }} />
            <p className="font-bold leading-snug" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", color: "#0d1528" }}>
              Nuestra cabina de limpieza <span style={{ color: "#e07820", textTransform: "uppercase" }}>no modifica la conducta</span> del trabajador, <span style={{ color: "#e07820", textTransform: "uppercase" }}>elimina la fuente</span> del riesgo.
            </p>
          </div>
        </section>

        {/* 3. DIAGRAMA TÉCNICO */}
        <section style={{ background: "#f5f7fa" }} className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Componentes</p>
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#0d1528" }}>Diagrama Técnico</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1.44fr 1.44fr 1.12fr", gap: "4px" }}>
              {/* Render 1 — 7 hotspots */}
              <div className="relative shadow-sm" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/productos/cabina-de-limpieza/render-principal1.jpg"
                  alt="Diagrama técnico Cabina de Limpieza — vista 1"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {[
                  { top: "5%",  left: "22%", titulo: "Lorem ipsum componente" },
                  { top: "32%", left: "17%", titulo: "Lorem ipsum componente" },
                  { top: "58%", left: "35%", titulo: "Lorem ipsum componente" },
                  { top: "88%", left: "18%", titulo: "Lorem ipsum componente" },
                  { top: "10%", left: "72%", titulo: "Lorem ipsum componente" },
                  { top: "35%", left: "78%", titulo: "Lorem ipsum componente" },
                  { top: "88%", left: "70%", titulo: "Lorem ipsum componente" },
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
              {/* Render 2 — 6 hotspots */}
              <div className="relative shadow-sm" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/productos/cabina-de-limpieza/render-principal2.jpg"
                  alt="Diagrama técnico Cabina de Limpieza — vista 2"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {[
                  { top: "5%",  left: "28%", titulo: "Lorem ipsum componente" },
                  { top: "33%", left: "30%", titulo: "Lorem ipsum componente" },
                  { top: "50%", left: "14%", titulo: "Lorem ipsum componente" },
                  { top: "72%", left: "20%", titulo: "Lorem ipsum componente" },
                  { top: "10%", left: "78%", titulo: "Lorem ipsum componente" },
                  { top: "55%", left: "82%", titulo: "Lorem ipsum componente" },
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
              {/* Empty space on the right */}
              <div />
            </div>
          </div>
        </section>

        {/* 3. TAGS NORMATIVOS */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <TagsNormativos />
          </div>
        </section>

        {/* 4. ESPECIFICACIONES TÉCNICAS */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Especificaciones <span className="section-heading-accent">técnicas</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#e9ecef]">
              <table className="w-full text-sm specs-table">
                <tbody>
                  {especificaciones.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                      <td className="px-6 py-4 font-semibold text-[#212529] w-1/3 border-b border-[#f0f0f0]">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-[#495057] border-b border-[#f0f0f0]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#6c757d] text-sm mt-4">
              * Especificaciones pueden variar según requerimientos del cliente. Consulta por diseños a medida.
            </p>
          </div>
        </section>

        {/* 5. APLICACIONES */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Aplicaciones y <span className="section-heading-accent">casos de uso</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aplicaciones.map((ap) => (
                <div key={ap.industria} className="group bg-white border border-[#e9ecef] rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={ap.image}
                      alt={ap.industria}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-white font-semibold text-sm">
                      {ap.industria}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-[#495057] text-sm leading-relaxed">{ap.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA FINAL */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1528 0%, #1a3a5c 60%, #06101e 100%)",
          }}
        >
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                ¿Te interesa este producto?
              </h2>
              <p className="text-white/70">Cotizamos sin compromiso en menos de 48 horas.</p>
            </div>
            <ProductContactButton producto="Cabina de Limpieza" large />
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
