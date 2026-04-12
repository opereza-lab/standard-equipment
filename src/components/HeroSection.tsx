import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import SplitButton from "./SplitButton";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "72vw", minHeight: "520px", maxHeight: "780px" }}
    >
      {/* Background image */}
      <Image
        src="/images/welding-blue.jpg"
        alt="Standard Equipment — Fabricación industrial de precisión"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark overlay (SPT-style gradient) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,31,60,0.80) 0%, rgba(10,31,60,0.55) 55%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Blue accent bar at left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "#0d1528" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" style={{ paddingTop: "80px" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl">
            {/* Pre-heading label */}
            <p
              className="text-[#e07820] font-semibold text-sm md:text-base uppercase tracking-widest mb-5"
              style={{ letterSpacing: "0.15em" }}
            >
              Ingeniería Industrial · Chile
            </p>

            {/* Main heading — SPT style: thin weight, large */}
            <h1 className="hero-heading mb-6">
              Equipamiento que{" "}
              <span style={{ fontWeight: 700 }}>trabaja</span>
              <br />
              tan duro como tú
              <span style={{ color: "#e07820", fontWeight: 700 }}>.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/90 mb-10 max-w-xl"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: "1.65", fontWeight: 300 }}
            >
              Diseñamos y fabricamos equipamiento de acero a medida para{" "}
              <span style={{ color: "#61a8e8", fontWeight: 500 }}>
                construcción, minería y materiales a granel
              </span>
              , con más de 20 años respaldando a la industria.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <SplitButton href="/construccion/capachos-concretos-roll-over" variant="orange">
                Productos
              </SplitButton>
              <SplitButton href="https://wa.me/56229381290" variant="light" external>
                Consultar por WhatsApp
              </SplitButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))",
        }}
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
