import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Descargadores de Big Bag y Maxisacos | Standard Equipment Chile",
  description: "Descargadores de Big Bag y maxisacos para vaciado controlado de materiales a granel. Fabricación a medida en Chile para industria química, alimentaria y minería.",
  keywords: [
    "descargadores de big bag",
    "descargadores de maxisacos",
    "descargador big bag Chile",
    "vaciado big bag",
    "vaciado maxisaco",
    "descarga materiales a granel",
    "equipos descarga big bag",
  ],
};
import Image from "next/image";

export default function DescargadoresBigBagPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/steel-rods.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="absolute right-0" style={{ maxWidth: "535px", bottom: "16px", zIndex: 2 }}>
          <div className="px-10 py-8 flex flex-col gap-2" style={{ background: "rgba(13,21,40,0.65)" }}>
            <h1 className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", whiteSpace: "nowrap" }}>
              Descargadores
            </h1>
            <h2 className="font-black uppercase leading-none mb-3" style={{ fontSize: "clamp(1rem, 1.9vw, 2rem)", color: "#e07820" }}>
              de Big Bag
            </h2>
            <p className="text-white/75 leading-relaxed mb-4" style={{ fontSize: "15px", width: 0, minWidth: "100%" }}>
              Sistemas de descarga de Big Bag diseñados para el vaciado controlado y seguro de materiales a granel en procesos industriales.
            </p>
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              {[
                { top: "Material", bottom: "Acero Estructural" },
                { top: "Aplicación", bottom: "Granel / Industria" },
                { top: "Certificados", bottom: "MC, WPS-PQR" },
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

      {/* ── FICHA TÉCNICA ────────────────────────────────────── */}
      <section style={{ background: "#ffffff" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Especificaciones</p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0d1528" }}>Ficha Técnica</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Material", "Acero Estructural"],
                  ["Capacidad", "A definir según requerimiento"],
                  ["Certificación", "Memoria de Cálculo, WPS-PQR"],
                  ["Aplicación", "Materiales a Granel / Industria"],
                  ["Fabricación", "A medida"],
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
                { sector: "Industria Química", detalle: "Vaciado controlado de productos pulverulentos y granulados" },
                { sector: "Agroindustria", detalle: "Descarga de granos, harinas y materiales alimenticios a granel" },
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

      {/* ── OTROS PRODUCTOS GRANEL ───────────────────────────── */}
      <section style={{ background: "#0d1528" }} className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-3">Línea Materiales a Granel</p>
          <h2 className="text-3xl font-bold text-white mb-12">Otros Productos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nombre: "Cargadores de Big Bag", desc: "Sistemas de carga eficiente de Big Bag para materiales a granel.", href: "/materiales-a-granel/cargadores-de-big-bag", img: "/images/warehouse-hero.jpg" },
            ].map((prod) => (
              <a key={prod.nombre} href={prod.href} className="group border border-white/10 flex flex-col overflow-hidden hover:border-[#e07820] transition-colors">
                <div className="relative h-44 overflow-hidden">
                  <Image src={prod.img} alt={prod.nombre} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1" style={{ background: "#0d1528" }}>
                  <div className="w-8 h-0.5" style={{ background: "#e07820" }} />
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">{prod.nombre}</h3>
                  <p className="text-white/50 text-xs leading-relaxed flex-1">{prod.desc}</p>
                  <span className="text-[#e07820] text-xs font-bold uppercase tracking-widest group-hover:opacity-70 transition-opacity">Ver Producto →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
