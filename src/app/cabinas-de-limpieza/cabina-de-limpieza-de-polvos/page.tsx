import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductContactButton from "@/components/ProductContactButton";
import { CheckIcon } from "@/components/icons";

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
        <section
          className="relative overflow-hidden"
          style={{ height: "70vh", minHeight: "520px", paddingTop: "80px" }}
        >
          <Image
            src="/images/productos/cabina-de-limpieza/hero-1.jpg"
            alt="Cabina de Limpieza — Standard Equipment"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,31,60,0.88) 0%, rgba(10,31,60,0.6) 60%, rgba(0,0,0,0.3) 100%)",
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#0d1528]" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 w-full">
              <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
                <Link href="/" className="hover:text-white/80 transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/cabinas-de-limpieza" className="hover:text-white/80 transition-colors">Cabinas de Limpieza</Link>
                <span>/</span>
                <span className="text-white/80">Cabina de Limpieza</span>
              </nav>

              <span className="inline-block text-[#e07820] font-semibold text-xs uppercase tracking-widest mb-4">
                Cabinas de Limpieza
              </span>
              <h1
                className="text-white mb-4"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Cabina de{" "}
                <strong style={{ fontWeight: 700 }}>Limpieza</strong>
                <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg font-light">
                Lorem ipsum dolor sit amet consectetur. Sin derrames, sin pérdidas.
              </p>

              <ProductContactButton producto="Cabina de Limpieza" />
            </div>
          </div>
        </section>

        {/* 2. DESCRIPCIÓN CORTA */}
        <section className="py-14 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-[#495057] leading-relaxed" style={{ fontSize: "1.15rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CARACTERÍSTICAS */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-heading mb-8">
                  <span className="section-heading-accent">Características</span> técnicas
                  <span style={{ color: "#e07820" }}>.</span>
                </h2>
                <ul className="space-y-3">
                  {caracteristicas.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "#0d1528" }}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-[#495057]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/productos/cabina-de-limpieza/hero-1.jpg"
                  alt="Cabina de Limpieza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-0 right-0 w-16 h-1 bg-[#e07820]" />
                <div className="absolute top-0 right-0 w-1 h-16 bg-[#e07820]" />
              </div>
            </div>
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
