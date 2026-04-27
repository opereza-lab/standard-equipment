import Image from "next/image";
import { CheckIcon } from "./icons";
import SplitButton from "./SplitButton";

const productos = [
  {
    id: "capacho-roll-over",
    heading: "Preciso y",
    headingAccent: "resistente",
    headingTail: "para obras de hormigón.",
    description:
      "El Capacho Roll Over permite el vaciado de concreto con total control, gracias a su mecanismo de volcamiento lateral y estructura en acero de alto impacto.",
    features: [
      "Estructura de acero ASTM A36 de alta resistencia",
      "Mecanismo Roll Over de vaciado sin derrames",
      "Disponible en capacidades de 0.5 a 3 m³",
      "Compatible con grúas torre y grúas móviles",
    ],
    image: "/images/crane-steel.jpg",
    href: "/construccion/capachos-concretos-roll-over",
    category: "Construcción",
    btnLabel: "Capacho Roll Over",
    imageLeft: false,
    bgColor: "#06101e",
  },
  {
    id: "big-bag",
    heading: "Seguro y",
    headingAccent: "eficiente",
    headingTail: "para materiales a granel.",
    description:
      "Los sistemas de carga y descarga de Big Bag optimizan el manejo de materiales granulados, reduciendo tiempos operativos y mejorando la seguridad del personal.",
    features: [
      "Marco estructural de acero galvanizado",
      "Sistema de tensado y retención de FIBC",
      "Tolva de descarga con compuerta regulable",
      "Soportes ajustables para distintas alturas de pallet",
    ],
    image: "/images/warehouse-hero.jpg",
    href: "/materiales-a-granel/cargadores-de-big-bag",
    category: "Materiales a Granel",
    btnLabel: "Big Bag",
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
              <div className="flex-1 w-full">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={producto.image}
                    alt={producto.headingAccent}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Blue accent corner */}
                  <div
                    className="absolute top-0 left-0 w-16 h-1"
                    style={{ background: "#0d1528" }}
                  />
                  <div
                    className="absolute top-0 left-0 w-1 h-16"
                    style={{ background: "#0d1528" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
