// Un solo archivo por cliente — CSS maneja gris (default) y blanco (hover)
const clientes = [
  { name: "BMCL",        gray: "/images/clients/BMCL-GRAY.png" },
  { name: "Normet",      gray: "/images/clients/NORMET-GRAY.png" },
  { name: "Romeral",     gray: "/images/clients/ROMERAL-GRAY.png" },
  { name: "DMC",         gray: "/images/clients/DMC-GRAY.png" },
  { name: "Preansa",     gray: "/images/clients/PREANSA-GRAY.png" },
  { name: "Riemann",     gray: "/images/clients/RIEMANN-GRAY.png" },
  { name: "Envirochem",  gray: "/images/clients/ENVIROCHEM-GRAY.png" },
  { name: "CADM",        gray: "/images/clients/CADM-GRAY.png" },
  { name: "EBCO",        gray: "/images/clients/EBCO-GRAY.png" },
  { name: "Gasmar",      gray: "/images/clients/GASMAR-GRAY.png" },
  { name: "Lomas Bayas", gray: "/images/clients/LOMAS%20BAYAS-GRAY.png" },
  { name: "Quitel",      gray: "/images/clients/QUITEL-GRAY.png" },
  { name: "RC",          gray: "/images/clients/RC-GRAY.png" },
  { name: "Vendors",     gray: "/images/clients/VENDORS-GRAY.png" },
  { name: "Grau",        gray: "/images/clients/GRAU-GRAY.png" },
  { name: "Avatar",      gray: "/images/clients/AVATAR-GRAY.png" },
  { name: "Aitue",       gray: "/images/clients/AITUE-GRAY.png" },
  { name: "CBB",         gray: "/images/clients/CBB-GRAY.png" },
];

export default function ClientesSection() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="flex items-start gap-4 mb-14">
          <span
            className="text-[#e07820] font-semibold text-[10px] uppercase tracking-widest flex-shrink-0 mt-1"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.2em" }}
          >
            Industrial
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a" }}>
            Algunos de los clientes con los que<br />
            <strong style={{ fontWeight: 700 }}>hemos trabajado</strong>
          </h2>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clientes.map((cliente) => (
            <div
              key={cliente.name}
              className="group relative overflow-hidden bg-[#f5f5f5]"
              style={{ aspectRatio: "399/270" }}
            >
              {/* Estado default: gris */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cliente.gray}
                alt={cliente.name}
                className="absolute inset-0 w-full h-full object-contain grayscale opacity-50 transition-opacity duration-150 group-hover:opacity-0"
              />

              {/* Overlay rojo con logo blanco — CSS brightness-0 invert hace el blanco perfecto */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0"
                style={{
                  backgroundColor: "#e07820",
                  transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cliente.gray}
                  alt={cliente.name}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
