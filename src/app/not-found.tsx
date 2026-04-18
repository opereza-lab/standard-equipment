import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* Foto de fondo */}
      <Image
        src="/images/coming-soon2.jpg"
        alt="Coming soon"
        fill
        className="object-cover"
        priority
      />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center" style={{ paddingTop: "320px" }}>

        {/* Línea separadora */}
        <div style={{ width: "60px", height: "2px", background: "#e07820" }} />

        {/* Texto */}
        <p className="text-white text-lg md:text-xl font-semibold max-w-md leading-snug"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8)" }}>
          Estamos trabajando para que esta página esté disponible
        </p>

        {/* Botón */}
        <Link
          href="/"
          className="mt-2 px-10 py-3 text-xs font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
          style={{ background: "#e07820" }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
