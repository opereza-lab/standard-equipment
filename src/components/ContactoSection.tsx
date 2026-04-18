"use client";

import { useState } from "react";

// Cambia esta línea para probar las 3 imágenes:
// "/images/grinding-wide.jpg"
// "/images/warehouse-hero.jpg"
// "/images/heavy-factory.jpg"
const IMAGEN_FONDO = "/images/grinding-wide.jpg";

export default function ContactoSection() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Consulta de ${nombre} — ${empresa}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    window.location.href = `mailto:contacto@standard-equipment.cl?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  return (
    <section className="flex min-h-[600px]">
      {/* Columna izquierda — formulario */}
      <div className="w-full lg:w-1/2 flex items-center" style={{ background: "#0d1528" }}>
        <div className="w-full max-w-lg px-10 md:px-16 py-16">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-white font-bold mb-2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            Hablemos de tu proyecto
          </h2>
          <p className="text-white/50 text-sm mb-10">
            Te respondemos directamente — sin intermediarios, sin IA.
          </p>

          {enviado ? (
            <div className="py-8">
              <div className="w-12 h-1 mb-6" style={{ background: "#e07820" }} />
              <p className="text-white text-lg font-semibold mb-2">Mensaje enviado.</p>
              <p className="text-white/50 text-sm">Te contactamos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs uppercase tracking-widest">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="bg-transparent border-b border-white/20 text-white text-sm py-2 outline-none focus:border-[#e07820] transition-colors placeholder:text-white/20"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs uppercase tracking-widest">Empresa</label>
                <input
                  name="empresa"
                  type="text"
                  required
                  className="bg-transparent border-b border-white/20 text-white text-sm py-2 outline-none focus:border-[#e07820] transition-colors placeholder:text-white/20"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-b border-white/20 text-white text-sm py-2 outline-none focus:border-[#e07820] transition-colors placeholder:text-white/20"
                  placeholder="tu@empresa.cl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs uppercase tracking-widest">Mensaje</label>
                <textarea
                  name="mensaje"
                  required
                  rows={3}
                  className="bg-transparent border-b border-white/20 text-white text-sm py-2 outline-none focus:border-[#e07820] transition-colors resize-none placeholder:text-white/20"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="self-start px-10 py-4 text-white text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85 mt-2"
                style={{ background: "#e07820" }}
              >
                Enviar Consulta
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Columna derecha — imagen */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('${IMAGEN_FONDO}')` }}
      />
    </section>
  );
}
