import type { Metadata } from "next";
import BasesClientPage from "./BasesClientPage";

export const metadata: Metadata = {
  title: "Bases Cilindros Hidráulicos Heavy Duty | Minería Chile",
  description: "Bases de transporte y soporte para cilindros hidráulicos Heavy Duty de palas hidráulicas. Fabricación a medida en acero estructural para minería a rajo abierto en Chile.",
  keywords: [
    "bases de transporte cilindros",
    "bases cilindros hidráulicos",
    "cilindros hidráulicos pala hidráulica",
    "cilindro pala hidráulica",
    "soporte cilindros hidráulicos",
    "bases cilindros minería",
    "heavy duty cilindros",
  ],
};

export default function BasesCilindrosPage() {
  return <BasesClientPage />;
}
