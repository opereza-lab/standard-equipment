import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductContactButton from "@/components/ProductContactButton";
import { CheckIcon } from "@/components/icons";
import ProductosCarruselConstruccion from "@/components/ProductosCarruselConstruccion";

export const metadata: Metadata = {
  title: "Capacho Concretos Roll Over | Vaciado Hormigón Chile",
  description: "Capacho Roll Over para vaciado controlado de hormigón desde grúa. Sin derrames, volcamiento lateral 180°. 0.5 a 3 m³. Acero ASTM A36 + AR400. Certificado MC, WPS-PQR.",
  keywords: [
    "capacho roll over",
    "capacho concreto",
    "vaciado hormigón grúa",
    "capacho hormigón construcción",
    "capacho concreto Chile",
    "vaciado hormigón altura",
    "capacho concreto metro",
    "metro de Santiago",
    "construcción metro Santiago",
    "grúas torre hormigón",
  ],
};

const caracteristicas = [
  "Estructura en acero ASTM A36 de alta resistencia",
  "Mecanismo Roll Over de volcamiento lateral sin derrames",
  "Compuerta de descarga con accionamiento por cable de acero",
  "Orejas de izaje con certificación de carga (slings, grillete o gancho)",
  "Superficie interior revestida con plancha antidesgaste AR400",
  "Pintura epóxica anticorrosión, disponible en color cliente",
  "Compatible con grúa torre, grúa pluma y horquillas elevadoras",
  "Fabricación bajo norma AWS D1.1 para soldadura estructural",
];

const especificaciones = [
  { label: "Capacidad estándar", value: "0.5 / 1.0 / 1.5 / 2.0 / 3.0 m³" },
  { label: "Material cuerpo", value: "Acero ASTM A36 e=5mm" },
  { label: "Revestimiento interior", value: "Plancha AR400 e=6mm" },
  { label: "Sistema de descarga", value: "Compuerta batiente con cable galvanizado ⌀12mm" },
  { label: "Tipo de volcamiento", value: "Lateral (Roll Over) 180°" },
  { label: "Izaje", value: "Orejas 4 puntos / Certificado de carga WLL" },
  { label: "Acabado exterior", value: "Granallado Sa2.5 + Epóxico 2 capas" },
  { label: "Tolerancias", value: "±3mm dimensional / ±5% capacidad volumétrica" },
  { label: "Norma de soldadura", value: "AWS D1.1 Structural Welding Code" },
  { label: "Tiempo de fabricación", value: "10–15 días hábiles (estándar)" },
];

const aplicaciones = [
  {
    industria: "Construcción en altura",
    descripcion:
      "Ideal para vaciado de losas y columnas en edificios en altura, donde se requiere control total del punto y flujo de descarga de hormigón.",
    image: "/images/crane-steel.jpg",
  },
  {
    industria: "Obras civiles e infraestructura",
    descripcion:
      "Usado en la construcción de túneles, puentes y obras portuarias donde el acceso con camión mixero es limitado o imposible.",
    image: "/images/workers-corridor.jpg",
  },
  {
    industria: "Plantas industriales",
    descripcion:
      "Apropiado para fundaciones y bases de maquinaria dentro de plantas donde se requiere colocación precisa del hormigón.",
    image: "/images/inspection-factory.jpg",
  },
];

const portafolioItems = [
  {
    cliente: "Constructora Besalco",
    proyecto: "Torre residencial Las Condes, Santiago",
    resultado: "Reducción del 40% en tiempo de vaciado por piso",
    capacidad: "2.0 m³ × 4 unidades",
  },
  {
    cliente: "Empresa Constructora Sigro",
    proyecto: "Centro comercial Viña del Mar",
    resultado: "Cero incidentes de derrame en 18 meses de operación",
    capacidad: "1.5 m³ × 6 unidades",
  },
];

const productosRelacionados = [
  {
    name: "Capachos de Escombros",
    href: "/construccion/capachos-de-escombros",
    image: "/images/grinding-sparks-wide.jpg",
    description: "Para retiro de escombros y residuos de construcción",
  },
  {
    name: "Bandejas para Escombros",
    href: "/construccion/bandejas-para-escombros",
    image: "/images/heavy-factory.jpg",
    description: "Protección de zonas de trabajo bajo nivel de faena",
  },
  {
    name: "Porta Pallets",
    href: "/construccion/porta-palets",
    image: "/images/inspection-factory.jpg",
    description: "Transporte vertical de pallets y cargas paletizadas",
  },
];

export default function CapachoRollOverPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="relative w-full overflow-hidden">
          <Image
            src="/images/productos/capacho-roll-ver/roll-over-hero.png"
            alt="Capacho Concretos Roll Over — Standard Equipment"
            width={2560}
            height={1080}
            className="w-full block"
            priority
          />


          {/* Cuadro negro transparente */}
          <div
            className="absolute left-0 z-10 px-8 py-4"
            style={{
              bottom: "16px",
              width: "50%",
              maxWidth: "750px",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(2px)",
            }}
          >
            <p
              className="text-[#e07820] font-semibold text-sm md:text-base uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.15em" }}
            >
              Construcción · Chile
            </p>

            <h1 className="hero-heading mb-5" style={{ fontSize: "clamp(1.8rem, 4.2vw, 3.3rem)" }}>
              Capachos Concretos{" "}
              <span style={{ fontWeight: 700 }}>Roll Over</span>
              <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
            </h1>

            <p
              className="text-white/90 text-justify"
              style={{ fontSize: "clamp(0.8rem, 1.44vw, 1rem)", lineHeight: "1.65", fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <span style={{ color: "#e07820", fontWeight: 500 }}>
                Ut enim ad minim veniam, quis nostrud exercitation.
              </span>
            </p>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))" }}
          />

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.25em]">Scroll Down</span>
            <div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", animation: "scrollBounce 1.8s ease-in-out infinite" }}
            >
              <div className="w-px bg-white/80" style={{ height: "36px" }} />
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.9 }}>
                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>

        {/* 2. DESCRIPCIÓN CORTA */}
        <section className="py-14 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-[#495057] leading-relaxed" style={{ fontSize: "1.15rem" }}>
                El <strong className="text-[#0d1528]">Capacho Concretos Roll Over</strong> es un equipo diseñado para el transporte y vaciado controlado de hormigón en obras donde el acceso con camión mixero es inviable. Su mecanismo de volcamiento lateral de 180° permite vaciar el contenido con precisión desde grúa, eliminando derrames y mejorando la seguridad del personal en obra.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CARACTERÍSTICAS */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Features list */}
              <div>
                <h2 className="section-heading mb-8">
                  <span className="section-heading-accent">Características</span> técnicas
                  <span style={{ color: "#e07820" }}>.</span>
                </h2>
                <ul className="space-y-3">
                  {caracteristicas.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
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

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/grinding-sparks-wide.jpg"
                  alt="Fabricación capacho Roll Over"
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

        {/* 5. GALERÍA */}
        <section
          className="py-16"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('/images/heavy-factory.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, color: "#ffffff" }}>
              Nuestra <strong style={{ fontWeight: 700 }}>Fabricación</strong>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "/images/productos/capacho-roll-ver/capacho-roll-over-1.png",
                "/images/productos/capacho-roll-ver/capacho-roll-over-2.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-3.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-4.jpeg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-5.jpg",
                "/images/productos/capacho-roll-ver/capacho-roll-over-6.jpg",
              ].map((img, i) => (
                <div key={i} className="group/img">
                  <div
                    className="relative rounded-xl overflow-hidden transition-all duration-500 group-hover/img:-translate-y-3 group-hover/img:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_8px_48px_rgba(224,120,32,0.25)] cursor-pointer"
                    style={{
                      aspectRatio: "4/3",
                      boxShadow: "0 8px 48px rgba(224,120,32,0.18), 0 2px 24px rgba(0,0,0,0.5)",
                      border: "1px solid rgba(224,120,32,0.25)",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Capacho Roll Over vista ${i + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Overlay oscuro en reposo → se aclara en hover */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover/img:opacity-0"
                      style={{ background: "rgba(0,0,0,0.55)" }}
                    />
                    {/* Degradado inferior */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />
                    {/* Esquinas naranjas */}
                    <div className="absolute top-0 left-0 w-10 h-[2px]" style={{ background: "#e07820" }} />
                    <div className="absolute top-0 left-0 w-[2px] h-10" style={{ background: "#e07820" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. APLICACIONES */}
        <section className="py-16 bg-white">
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

        {/* 8. PORTAFOLIO ESPECÍFICO */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="section-heading mb-10">
              Casos de <span className="section-heading-accent">éxito</span>
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portafolioItems.map((item) => (
                <div key={item.cliente} className="bg-white rounded-xl p-6 border border-[#e9ecef]">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: "#0d1528" }}
                    >
                      {item.cliente.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#212529]">{item.cliente}</p>
                      <p className="text-[#6c757d] text-sm mb-3">{item.proyecto}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: "rgba(15,76,129,0.06)" }}>
                        <span className="text-[#e07820]">→</span>
                        <p className="text-[#0d1528] text-sm font-medium">{item.resultado}</p>
                      </div>
                      <p className="text-[#6c757d] text-xs mt-2">Equipos: {item.capacidad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CTA PEGAJOSO */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1528 0%, #1a3a5c 60%, #06101e 100%)",
          }}
        >
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                ¿Te interesa este producto?
              </h2>
              <p className="text-white/70">Cotizamos sin compromiso en menos de 48 horas.</p>
            </div>
            <ProductContactButton producto="Capacho Concretos Roll Over" large />
          </div>
        </section>

      </main>
      <ProductosCarruselConstruccion excludeId="capachos-concretos-roll-over" />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
