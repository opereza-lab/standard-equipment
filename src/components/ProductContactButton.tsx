"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { WhatsAppIcon } from "./icons";
import SplitButton from "./SplitButton";

interface Props {
  producto: string;
  large?: boolean;
}

export default function ProductContactButton({ producto, large }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <SplitButton
          onClick={() => setOpen(true)}
          variant="dark"
          className={large ? "text-base" : "text-sm"}
        >
          Consultar
        </SplitButton>
        <SplitButton
          href={`https://wa.me/56229381290?text=${encodeURIComponent(`Hola, consulto por *${producto}*.`)}`}
          variant="orange"
          external
          className={large ? "text-base" : "text-sm"}
        >
          <WhatsAppIcon className="w-4 h-4 relative z-10" />
          WhatsApp
        </SplitButton>
      </div>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} producto={producto} />
    </>
  );
}
