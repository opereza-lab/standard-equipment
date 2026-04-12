import Image from "next/image";
import Link from "next/link";
import SplitButton from "./SplitButton";

const proyectos = [
  {
    client: "Constructora GyM",
    project: "Capachos Roll Over para obra en altura",
    result: "40% reducción en tiempos de vaciado de hormigón",
    image: "/images/grinding-sparks-wide.jpg",
    industry: "Construcción",
    tag: "Construcción",
  },
  {
    client: "Minera Escondida",
    project: "Equipamiento Truckshop para CAEX",
    result: "Reducción del 30% en tiempo de mantención preventiva",
    image: "/images/heavy-factory.jpg",
    industry: "Minería",
    tag: "Minería",
  },
  {
    client: "Empresa Cementera Norte",
    project: "Sistema completo de Big Bag",
    result: "Cero incidentes en 18 meses de operación",
    image: "/images/inspection-factory.jpg",
    industry: "Materiales a Granel",
    tag: "Materiales a Granel",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#e07820] font-semibold text-sm uppercase tracking-widest mb-3">
              Portafolio
            </p>
            <h2 className="section-heading">
              Proyectos que{" "}
              <span className="section-heading-accent">hablan</span> por nosotros
              <span style={{ color: "#e07820" }}>.</span>
            </h2>
          </div>
          <SplitButton href="/portafolio" variant="dark" className="flex-shrink-0 self-start md:self-auto">
            Portafolio completo
          </SplitButton>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((proy) => (
            <div
              key={proy.project}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-[#e9ecef]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={proy.image}
                  alt={proy.project}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: "#0d1528" }}
                >
                  {proy.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[#6c757d] text-xs uppercase tracking-wide mb-1">
                  {proy.client}
                </p>
                <h3 className="font-semibold text-[#212529] mb-3 text-base leading-snug">
                  {proy.project}
                </h3>
                <div
                  className="flex items-start gap-2 p-3 rounded-lg"
                  style={{ background: "rgba(15,76,129,0.06)" }}
                >
                  <span className="text-[#e07820] mt-0.5">→</span>
                  <p className="text-[#6baed6] text-sm font-medium">{proy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
