import Image from "next/image";
import { CheckIcon } from "./icons";
import SplitButton from "./SplitButton";

const productos = [
  {
    id: "capacho-roll-over",
    heading: "Soluciones para obras de",
    headingAccent: "edificación",
    headingTail: "",
    description:
      "Equipos innovadores pensados para optimizar los tiempos y seguridad en obras de edificación.",
    features: [
      "Optimizamos lo existente, innovamos donde nadie más lo hace",
      "Amplio rango de capacidades nominales para satisfacer distintas necesidades",
      "La carga suspendida es un riesgo crítico, nuestros equipos están calculados para no fallar",
      "Compatible con grúas torre y grúas móviles",
    ],
    image: "/images/hero-construccion-small.png",
    href: "/construccion/capachos-concretos-roll-over",
    category: "Construcción",
    btnLabel: "Equipamiento para construcción",
    imageLeft: false,
    bgColor: "#06101e",
  },
  {
    id: "big-bag",
    heading: "Soluciones de línea y",
    headingAccent: "personalizadas",
    headingTail: "para la carga y descarga de materiales a granel.",
    description:
      "Equipos con el grado de automatización que el cliente necesite, integración de Mecánica, Neumática, Hidráulica e instrumentación.",
    features: [
      "Equipos para carga y descarga de Maxisacos",
      "Accesorios para manipulación de Maxisacos con grúa horquilla",
      "Control gravimétrico, parámetros productivos entregados vía remota",
      "Dispensadores de Pallets automatizados",
    ],
    image: "/images/hero-granel-small.jpg",
    href: "/materiales-a-granel/cargadores-de-big-bag",
    category: "Materiales a Granel",
    btnLabel: "Equipamiento para materiales a granel",
    imageLeft: true,
    bgColor: "#0d1528",
  },
  {
    id: "truckshop",
    heading: "Equipos robustos y",
    headingAccent: "confiables",
    headingTail: "para el mercado minero.",
    description:
      "Racks, plataformas, barandas, atriles, soportes y diseños a medida para las condiciones más exigentes de la gran minería.",
    features: [
      "Vasto conocimiento en ciencias de los materiales, para optimizar nuestros equipos de acuerdo a lo que la aplicación necesita",
      "Diseños adaptados a las necesidades particulares de nuestros clientes",
      "Diseños pensando en la seguridad, durabilidad y eficiencia",
      "Garantizamos la manipulación segura de nuestros equipos",
    ],
    image: "/images/mineria-hero-small.jpg",
    href: "/mineria/equipamiento-truckshop/pinochos-caex",
    category: "Minería",
    btnLabel: "Equipamiento para minería",
    imageLeft: false,
    bgColor: "#06101e",
  },
];

export default function ProductosDestacados() {
  return (
    <section
      className="py-4"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('/images/industrias/ind-fondo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="product-showcase-section"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20">
            <div
              className={`flex flex-col ${
                producto.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Text col */}
              <div className="flex-1 max-w-xl">
                {/* Category badge */}
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-white/10 text-white/80"
                >
                  {producto.category}
                </span>

                {/* Heading (SPT-style: mix of regular + bold) */}
                <h2
                  className="mb-5"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                    fontWeight: 300,
                    lineHeight: 1.15,
                    color: "#ffffff",
                  }}
                >
                  {producto.heading}{" "}
                  <strong style={{ fontWeight: 700 }}>{producto.headingAccent}</strong>{" "}
                  {producto.headingTail}
                </h2>

                <p
                  className="text-white/80 mb-7 leading-relaxed"
                  style={{ fontSize: "1.05rem" }}
                >
                  {producto.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {producto.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "#e07820" }}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-white/75 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <SplitButton href={producto.href} variant="dark" className="text-sm">
                  {producto.btnLabel}
                </SplitButton>
              </div>

              {/* Image col */}
              <div className="flex-1 w-full group/img">
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover/img:-translate-y-3 group-hover/img:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_8px_48px_rgba(224,120,32,0.25)]"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow: "0 8px 48px rgba(224,120,32,0.18), 0 2px 24px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(224,120,32,0.25)",
                  }}
                >
                  <Image
                    src={producto.image}
                    alt={producto.headingAccent}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay oscuro en reposo → se aclara en hover */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover/img:opacity-0"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  />
                  {/* Overlay degradado — integra con fondo + oculta timestamp */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.65) 100%)",
                    }}
                  />
                  {/* Overlay lateral izquierdo — fusiona con el texto */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to right, rgba(6,16,30,0.55) 0%, transparent 40%)",
                    }}
                  />
                  {/* Borde naranja top-left */}
                  <div className="absolute top-0 left-0 w-16 h-[2px]" style={{ background: "#e07820" }} />
                  <div className="absolute top-0 left-0 w-[2px] h-16" style={{ background: "#e07820" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
