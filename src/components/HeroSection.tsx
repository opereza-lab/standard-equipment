import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "72vw", minHeight: "520px", maxHeight: "780px" }}
    >
      {/* Background image — mirrored horizontally */}
      <Image
        src="/images/grinding-wide.jpg"
        alt="Standard Equipment — Fabricación industrial de precisión"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        style={{ transform: "scaleX(-1)" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* Cuadro negro transparente — posición absoluta desde el borde izquierdo */}
      <div
        className="absolute left-0 z-10 px-8 py-4"
        style={{
          bottom: "57px",
          width: "50%",
          maxWidth: "750px",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Pre-heading label */}
        <p
          className="text-[#e07820] font-semibold text-sm md:text-base uppercase tracking-widest mb-4"
          style={{ letterSpacing: "0.15em" }}
        >
          Innovación · Chile
        </p>

        {/* Main heading */}
        <h1 className="hero-heading mb-5" style={{ fontSize: "clamp(1.8rem, 4.2vw, 3.3rem)" }}>
          Equipamiento que{" "}
          <span style={{ fontWeight: 700 }}>trabaja</span>
          <br />
          tan duro como tú
          <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/90 text-justify"
          style={{ fontSize: "clamp(0.8rem, 1.44vw, 1rem)", lineHeight: "1.65", fontWeight: 300 }}
        >
          Ingeniería Mecánica especializada en el diseño y fabricación de equipos para la{" "}
          <span style={{ color: "#e07820", fontWeight: 500 }}>
            Construcción, Minería y manejo de Materiales a Granel.
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
        <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.25em]">Scroll Down</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
          <div
            className="w-px bg-white/50"
            style={{
              height: "36px",
              transformOrigin: "top",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.6 }}>
            <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
