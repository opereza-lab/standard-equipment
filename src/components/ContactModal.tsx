"use client";

import { useState, useEffect } from "react";
import { XIcon, WhatsAppIcon } from "./icons";
import SplitButton from "./SplitButton";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  producto?: string;
}

export default function ContactModal({ isOpen, onClose, producto = "" }: ContactModalProps) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    telefono: "",
    email: "",
  });

  // Close on ESC
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const productoLine = producto ? `Consulto por *${producto}*.\n` : "Consulto por sus productos.\n";
    const msg = encodeURIComponent(
      `Hola, ${productoLine}` +
      `Soy *${form.nombre}*, de *${form.empresa}*, cargo *${form.cargo}*.\n` +
      `Teléfono: ${form.telefono}\n` +
      `Email: ${form.email}`
    );
    window.open(`https://wa.me/56229381290?text=${msg}`, "_blank", "noopener,noreferrer");
    onClose();
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#6baed6] focus:ring-2 focus:ring-[#6baed6]/20 transition-all";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(10,31,60,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "#0d1528", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #06101e 0%, #1a2f4e 100%)" }}
        >
          <div>
            <h2 className="text-white font-semibold text-lg">
              {producto ? `Consultar: ${producto}` : "Consulta de Producto"}
            </h2>
            <p className="text-white/70 text-sm mt-0.5">
              Te respondemos vía WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
              Empresa *
            </label>
            <input
              type="text"
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
              Cargo *
            </label>
            <input
              type="text"
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              placeholder="Ej: Jefe de Proyectos"
              required
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+56 9 XXXX XXXX"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@empresa.cl"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Submit */}
          <SplitButton
            type="submit"
            variant="orange"
            className="w-full justify-center mt-2"
          >
            <WhatsAppIcon className="w-5 h-5 relative z-10" />
            Enviar por WhatsApp
          </SplitButton>

          <p className="text-center text-white/40 text-xs">
            Al enviar, se abrirá WhatsApp con tu consulta lista.
            <br />No enviamos emails ni almacenamos tus datos.
          </p>
        </form>
      </div>
    </div>
  );
}
