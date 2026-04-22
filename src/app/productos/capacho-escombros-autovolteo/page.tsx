import type { Metadata } from "next";
import CapachoClientPage from "./CapachoClientPage";

export const metadata: Metadata = {
  title: "Capacho Escombros con Autovolteo | Construcción Chile",
  description: "Capacho autovolteo para retiro de escombros operado exclusivamente por la grúa. Sin equipos de apoyo, sin cambio de maniobra. 1 a 3 m³. Certificado MC, WPS-PQR. Chile.",
  keywords: [
    "capachos escombros",
    "capacho autovolteo",
    "capacho de escombros autovolteo",
    "capacho grúa construcción",
    "retiro escombros construcción Chile",
    "capacho piques",
    "capacho piques y túneles",
    "movimiento de tierra piques",
    "grúas torre construcción",
    "galerías construcción",
    "construcción metro",
    "metro de Santiago",
    "línea 7 metro",
    "línea 9 metro",
  ],
};

export default function CapachoEscombrosAutovolteoPage() {
  return <CapachoClientPage />;
}
