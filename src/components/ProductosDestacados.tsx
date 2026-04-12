import Image from "next/image";
import Link from "next/link";
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
    bgColor: "#f0f4f8",
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
    bgColor: "#ffffff",
  },
  {
    id: "truckshop",
    heading: "Robusto y",
    headingAccent: "confiable",
    headingTail: "para operaciones mineras.",
    description:
      "El equipamiento Truckshop — pinochos, racks y bases de traslado — está diseñado para las condiciones más exigentes de la gran minería chilena.",
    features: [
      "Acero estructural de alta resistencia al desgaste",
      "Diseño adaptado a CAEX Caterpillar, Komatsu y Liebherr",
      "Facilita mantenimiento preventivo en terreno",
      "Reduce tiempos de inmovilización de maquinaria",
    ],
    image: "/images/workers-corridor.jpg",
    href: "/mineria/equipamiento-truckshop/pinochos-caex",
    category: "Minería",
    btnLabel: "Equipamiento Truckshop",
    imageLeft: false,
    bgColor: "#f0f4f8",
  },
];

export default function ProductosDestacados() {
  return (
    <section className="py-4">
      {productos.map((producto, idx) => (
        <div
          key={producto.id}
          className="product-showcase-section"
          style={{ backgroundColor: producto.bgColor }}
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
                  className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(15,76,129,0.1)", color: "#0d1528" }}
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
                    color: "#212529",
                  }}
                >
                  {producto.heading}{" "}
                  <strong style={{ fontWeight: 700 }}>{producto.headingAccent}</strong>{" "}
                  {producto.headingTail}
                </h2>

                <p
                  className="text-[#495057] mb-7 leading-relaxed"
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
                        style={{ background: "#0d1528" }}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-[#495057] text-sm">{feat}</span>
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
