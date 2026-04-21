import type { Metadata } from "next";
import AtrilClientPage from "./AtrilClientPage";

export const metadata: Metadata = {
  title: "Atril Soporte Neumáticos OTR | Minería Chile",
  description: "Atril soporte para neumáticos OTR de equipos mineros. Plataforma de inspección segura, admite neumáticos 27R49 hasta 59/80 R63. Certificado MC, WPS-PQR. Fabricado en Chile.",
  keywords: [
    "atril soporte neumáticos",
    "soporte neumáticos OTR",
    "neumáticos OTR minería Chile",
    "atril neumáticos minería",
    "soporte almacenamiento neumáticos OTR",
    "inspección neumáticos minería",
  ],
};

export default function AtrilNeumaticosOTRPage() {
  return <AtrilClientPage />;
}
