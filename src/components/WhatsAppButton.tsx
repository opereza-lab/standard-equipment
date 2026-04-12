"use client";

import { useState } from "react";
import { WhatsAppIcon, XIcon } from "./icons";

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const waUrl = "https://wa.me/56229381290?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {tooltipVisible && (
        <div
          className="bg-white rounded-lg shadow-xl border border-[#e9ecef] px-4 py-3 text-sm max-w-[200px] text-right"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        >
          <p className="font-semibold text-[#212529] text-sm">¿Necesitas ayuda?</p>
          <p className="text-[#6c757d] text-xs mt-0.5">Escríbenos por WhatsApp</p>
          {/* Arrow */}
          <div
            className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-b border-r border-[#e9ecef] rotate-45"
          />
        </div>
      )}

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
