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
    id: "bases-cilindros-hidraulicos",
    nombre: "Bases Cilindros Hidráulicos",
    desc: "Soporte Heavy Duty para cilindros hidráulicos durante mantención de CAEX.",
    href: "/mineria/bases-cilindros-hidraulicos",
    img: "/images/productos/bases-cilindro/render-principal2.png",
  },
  {
    id: "rack-polines",
    nombre: "Rack Polines",
    desc: "Rack de almacenamiento de polines customizable para talleres truckshop.",
    href: "/mineria/equipamiento-truckshop/rack-polines",
    img: "/images/productos/rack-polines/hero-1.png",
  },
  {
    id: "rack-maniobras",
    nombre: "Rack Maniobras",
    desc: "Rack móvil para almacenamiento de maniobras de izaje en talleres truckshop.",
    href: "/mineria/equipamiento-truckshop/rack-maniobras",
    img: "/images/productos/rack-maniobras/hero-1.png",
  },
  {
    id: "equipamiento-truckshop",
    nombre: "Equipamiento Truckshop",
    desc: "Racks y soluciones de almacenamiento certificados para talleres de mantención.",
    href: "/mineria/equipamiento-truckshop",
    img: "/images/heavy-factory.jpg",
  },
];
