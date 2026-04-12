import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./icons";
import SplitButton from "./SplitButton";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
      {/* Background image */}
      <Image
        src="/images/welding-blue.jpg"
        alt="Trabajemos juntos"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,31,60,0.92) 0%, rgba(10,31,60,0.75) 60%, rgba(15,76,129,0.5) 100%)",
        }}
      />

      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#e07820" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            <p className="text-[#e07820] font-semibold text-sm uppercase tracking-widest mb-4">
              Hablemos
            </p>
            <h2
              className="text-white mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.15,
              }}
            >
              ¿Tienes un proyecto{" "}
              <strong style={{ fontWeight: 700 }}>que necesita solución</strong>
              <span style={{ color: "#e07820" }}>?</span>
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Cotizamos sin compromiso en menos de 48 horas. Cuéntanos tu necesidad y te presentamos la solución más eficiente.
            </p>
            <div className="flex flex-wrap gap-4">
              <SplitButton href="https://wa.me/56229381290" variant="orange" external>
                <WhatsAppIcon className="w-5 h-5 relative z-10" />
                Consultar por WhatsApp
              </SplitButton>
              <SplitButton href="/contacto" variant="light">
                Formulario de contacto
              </SplitButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
