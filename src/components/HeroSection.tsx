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

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" style={{ paddingTop: "80px" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 w-full">

          {/* Cuadro negro transparente */}
          <div
            className="max-w-2xl px-8 py-8"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
          >
            {/* Pre-heading label */}
            <p
              className="text-[#e07820] font-semibold text-sm md:text-base uppercase tracking-widest mb-5"
              style={{ letterSpacing: "0.15em" }}
            >
              Innovación · Chile
            </p>

            {/* Main heading */}
            <h1 className="hero-heading mb-6">
              Equipamiento que{" "}
              <span style={{ fontWeight: 700 }}>trabaja</span>
              <br />
              tan duro como tú
              <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/90 text-justify"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: "1.65", fontWeight: 300 }}
            >
              Ingeniería Mecánica especializada en el diseño y fabricación de equipos para la{" "}
              <span style={{ color: "#61a8e8", fontWeight: 500 }}>
                Construcción, Minería y manejo de Materiales a Granel
              </span>
              , con más de 20 años de experiencia respaldando a la Industria.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))" }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <div
          className="w-px h-8 bg-white/40"
          style={{ animation: "pulse 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
