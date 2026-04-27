import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ConstructionIcon, MiningIcon, BulkIcon, CleaningIcon, EngineeringIcon, PiquesIcon } from "./icons";

const industrias = [
  {
    name: "Construcción",
    description: "Capachos, bandejas y transportadores diseñados para obras de alta exigencia.",
    href: "/construccion/capachos-concretos-roll-over",
    image: "/images/industrias/const-regular2.jpg",
    icon: ConstructionIcon,
    products: ["Capachos Roll Over", "Capachos Escombros", "Bandejas", "Porta Pallets"],
    color: "#0d1528",
  },
  {
    name: "Minería",
    description: "Bases de traslado, atriles y equipamiento para operaciones CAEX y cargadores frontales.",
    href: "/productos/atril-neumaticos-otr",
    image: "/images/industrias/min-regular6.jpg",
    objectPosition: "center 25%",
    icon: MiningIcon,
    products: ["Atril OTR", "Soporte Baldes Face Shovel", "Pinochos CAEX", "Rack Polines"],
    color: "#0d1528",
  },
  {
    name: "Materiales a Granel",
    description: "Cargadores y descargadores de Big Bag para manejo seguro de materiales.",
    href: "/materiales-a-granel/cargadores-de-big-bag",
    image: "/images/industrias/granel-regular.jpg",
    icon: BulkIcon,
    products: ["Cargadores Big Bag", "Descargadores Big Bag"],
    color: "#0d1528",
  },
  {
    name: "Cabinas de Limpieza",
    description: "Sistemas de soplado y cabinas de limpieza de polvos para entornos industriales.",
    href: "/cabinas-de-limpieza/cabina-de-limpieza-de-polvos",
    image: "/images/industrias/limpieza-regular.jpg",
    icon: CleaningIcon,
    products: ["Cabina de Polvos", "Soplador de Polvo"],
    color: "#0d1528",
  },
  {
    name: "Construcción de Piques",
    description: "Diseño y fabricación de equipamiento especializado para construcción y habilitación de piques mineros.",
    href: "/mineria/construccion-de-piques",
    image: "/images/industrias/piques-regular.jpg",
    icon: PiquesIcon,
    products: ["Equipamiento de Piques", "Habilitación Minera"],
    color: "#0d1528",
  },
  {
    name: "Servicios de Ingeniería",
    description: "Diseño y desarrollo de soluciones a medida para proyectos de alta complejidad.",
    href: "https://www.standard-ingenieria.com",
    image: "/images/industrias/ing-regular.jpg",
    icon: EngineeringIcon,
    products: ["Ingeniería a medida", "Proyectos especiales"],
    color: "#e07820",
    external: true,
  },
];

export default function IndustriasSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0d1528" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-[#e07820] font-semibold text-sm uppercase tracking-widest mb-3">
            Sectores que servimos
          </p>
          <h2 className="section-heading">
            <span className="section-heading-accent">Soluciones</span> para cada industria
            <span style={{ color: "#e07820" }}>.</span>
          </h2>
          <p className="text-[#6baed6] mt-4 max-w-2xl text-lg">
            Fabricamos equipamiento que se adapta a las condiciones más exigentes del trabajo industrial chileno.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.name}
                href={ind.href}
                target={ind.external ? "_blank" : undefined}
                rel={ind.external ? "noopener noreferrer" : undefined}
                className="industry-card group block border border-white/10 rounded-xl overflow-hidden hover:border-[#6baed6]/40"
                style={{ backgroundColor: "#1a2f4e" }}
              >
                {/* Image — overlay oscuro por defecto, se aclara en hover */}
                <div className="relative h-48 overflow-hidden bg-[#0d1528]">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: (ind as { objectPosition?: string }).objectPosition ?? "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay base */}
                  <div className="industry-overlay absolute inset-0" />
                  {/* Hover overlay con texto */}
                  <div
                    className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }}
                  >
                    <span className="text-white font-semibold text-sm tracking-wide flex items-center gap-2">
                      Ver productos
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: ind.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-lg font-semibold mb-2 group-hover:text-[#6baed6] transition-colors text-white"
                  >
                    {ind.name}
                  </h3>
                  <p className="text-[#6baed6] text-sm mb-4 leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Products list */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-[#e07820] group-hover:gap-2.5 transition-all">
                    Ver productos
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
