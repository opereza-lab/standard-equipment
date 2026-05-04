export interface ProductoConstruccion {
  id: string;
  nombre: string;
  desc: string;
  href: string;
  img: string | null; // null = sin foto aún
}

export const PRODUCTOS_CONSTRUCCION: ProductoConstruccion[] = [
  {
    id: "capachos-concreteros-roll-over",
    nombre: "Capachos Concreteros Roll Over",
    desc: "Capachos concreteros de Gran Capacidad y Baja Altura de carga",
    href: "/construccion/capachos-concreteros-roll-over",
    img: "/images/productos/capacho-roll-ver/roll-over-hero1.png",
  },
  {
    id: "capachos-de-escombros",
    nombre: "Capachos de Escombros con Autovolteo",
    desc: "Descarga controlada exclusivamente por la grúa, sin equipos de apoyo.",
    href: "/productos/capacho-escombros-autovolteo",
    img: "/images/productos/capacho-autovolteo/hero-1.png",
  },
  {
    id: "capachos-de-escombros-alta-capacidad",
    nombre: "Capachos Escombros Alta Capacidad",
    desc: "",
    href: "/construccion/capachos-de-escombros-alta-capacidad",
    img: null,
  },
  {
    id: "balde-descarga-directa",
    nombre: "Balde Descarga Directa a Camión",
    desc: "",
    href: "/construccion/balde-para-escombros-con-descarga-directa-a-camion",
    img: null,
  },
  {
    id: "bandejas-para-escombros",
    nombre: "Bandejas para Escombros",
    desc: "Retiro de material en pisos sin uso de la grúa.",
    href: "/construccion/bandejas-para-escombros",
    img: "/images/heavy-factory.jpg",
  },
  {
    id: "transportador-de-barras",
    nombre: "Transportador de Barras",
    desc: "Traslado seguro de barras de acero en obra.",
    href: "/construccion/transportador-de-barras",
    img: "/images/steel-rods.jpg",
  },
  {
    id: "porta-palets",
    nombre: "Porta Pallets",
    desc: "Izaje y traslado de pallets con grúa torre.",
    href: "/construccion/porta-palets",
    img: "/images/warehouse-hero.jpg",
  },
];
