import { CheckIcon } from "./icons";

const stats = [
  { value: "20+", label: "años de experiencia" },
  { value: "500+", label: "proyectos entregados" },
  { value: "100%", label: "materiales y componentes certificados" },
  { value: "48h", label: "tiempo promedio de respuesta a cotizaciones" },
];

const reasons = [
  {
    title: "Fabricación",
    description:
      "Procesos exhaustivos de Ingeniería para desarrollar equipos de gran funcionalidad e innovación.",
  },
  {
    title: "Ingeniería",
    description:
      "Contamos con nuestra línea de productos, pero atendemos requerimientos especiales a través de nuestro departamento de Ingeniería.",
  },
  {
    title: "Experiencia",
    description:
      "Diseño Mecánico, Ingeniería, Fabricación, Montaje, Normativas de Seguridad y procedimientos con distintos actores de la Minería, Construcción e Industria nos proporcionan herramientas para desarrollar nuestros equipos de manera integral, no dejando nada al azar.",
  },
  {
    title: "Soporte técnico permanente",
    description:
      "Nuestro equipo de ingeniería te acompaña desde el diseño hasta la operación. Repuestos y soporte post-venta garantizados.",
  },
  {
    title: "Cumplimiento de plazos",
    description:
      "Entendemos que cada día de inactividad cuesta dinero. Nos comprometemos con plazos reales y los cumplimos.",
  },
  {
    title: "Respaldo y trazabilidad",
    description:
      "Nuestros productos están respaldados por certificados de Materiales, Procedimientos de Soldadura y Soldadores Calificados, y Memorias de Cálculo.",
  },
];

export default function PorQueNosotros() {
  return (
    <section className="relative py-20" style={{ backgroundImage: "url('/images/grinding-sparks-wide.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(10,31,60,0.93)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-[#e07820] font-semibold text-sm uppercase tracking-widest mb-3">
            Por qué elegirnos
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Más de dos décadas fabricando{" "}
            <strong style={{ fontWeight: 700 }}>lo que la industria necesita</strong>
            <span style={{ color: "#e07820" }}>.</span>
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0f1e]/80 px-8 py-8 text-center">
              <div
                className="font-bold mb-2"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  color: "#e07820",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl border border-white/10 hover:border-[#0d1528]/60 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "#e07820" }}
                >
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </span>
                <h3 className="text-white font-semibold">{reason.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed text-justify">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
