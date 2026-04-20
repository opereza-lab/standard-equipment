export interface ProductoMineria {
  id: string;
  nombre: string;
  desc: string;
  href: string;
  img: string | null;
}

export const PRODUCTOS_MINERIA: ProductoMineria[] = [
  {
    id: "atril-neumaticos-otr",
    nombre: "Atril Neumáticos OTR",
    desc: "Plataforma de trabajo segura para inspección de neumáticos mineros.",
    href: "/productos/atril-neumaticos-otr",
    img: "/images/productos/atril-neumaticos/hero-1.jpeg",
  },
  {
    id: "soporte-baldes-face-shovel",
    nombre: "Soporte Baldes Face Shovel",
    desc: "Cambio de elementos de desgaste sin retirar el balde del equipo.",
    href: "/productos/soporte-baldes-face-shovel",
    img: "/images/productos/soporte-faceshovel/hero-1.png",
  },
  {
    id: "bases-de-traslado",
    nombre: "Bases de Traslado",
    desc: "Bases a medida para traslado seguro de equipos pesados en faenas mineras.",
    href: "/mineria/bases-de-traslado",
    img: "/images/inspection-factory.jpg",
  },
  {
    id: "bases-cilindros-hidraulicos",
    nombre: "Bases Cilindros Hidráulicos",
    desc: "Soporte Heavy Duty para cilindros hidráulicos durante mantención de CAEX.",
    href: "/mineria/bases-cilindros-hidraulicos",
    img: "/images/workers-corridor.jpg",
  },
  {
    id: "pinochos-caex",
    nombre: "Pinochos CAEX",
    desc: "Pinochos de alta resistencia para operaciones de mantenimiento en faenas mineras.",
    href: "/mineria/equipamiento-truckshop/pinochos-caex",
    img: "/images/mechanic-red.jpg",
  },
  {
    id: "equipamiento-truckshop",
    nombre: "Equipamiento Truckshop",
    desc: "Racks y soluciones de almacenamiento certificados para talleres de mantención.",
    href: "/mineria/equipamiento-truckshop",
    img: "/images/heavy-factory.jpg",
  },
];
