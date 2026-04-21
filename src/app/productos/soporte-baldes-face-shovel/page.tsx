import type { Metadata } from "next";
import SoporteClientPage from "./SoporteClientPage";

export const metadata: Metadata = {
  title: "Soporte Baldes Face Shovel | Mantención Pala Hidráulica Chile",
  description: "Soporte para baldes de pala Face Shovel que permite mantención y cambio de elementos de desgaste sin retirar el balde. Acero estructural + HB400. Certificado MC, WPS-PQR.",
  keywords: [
    "face shovel",
    "soporte face shovel",
    "mantención face shovel",
    "base face shovel",
    "mantención baldes de pala",
    "pala hidráulica",
    "soporte baldes pala hidráulica",
    "cambio elementos desgaste face shovel",
  ],
};

export default function SoporteBaldesFaceShovelPage() {
  return <SoporteClientPage />;
}
