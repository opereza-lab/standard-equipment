export interface ProyectoPortfolio {
  client: string;
  project: string;
  result: string;
  image: string;
  tag: string;
  rawClient?: boolean;
}

export const PROYECTOS: ProyectoPortfolio[] = [
  {
    client: "CBB Concepción",
    project: "2 Unid. Capachos Roll Over para Obra Edificio Insigne Concepción",
    result: "Optimización de tiempos de vaciado de hormigón y logística de suministros, cargando capachos a pie de calle",
    image: "/images/portfolio/port-001.jpg",
    tag: "Construcción",
  },
  {
    client: "Prefabricados y Hormigones GRAU",
    project: "Carro Parador para Transporte de Tubos",
    result: "Carro con Mecánico Hidráulico para transportar tubos desde salida de molde a patio de acopio, capacidad 4 ton",
    image: "/images/portfolio/port-002.jpg",
    tag: "Industria",
  },
  {
    client: "INSO Italia",
    project: "8 Unid. Capachos de Escombros con Autovolteo",
    result: "Capachos de escombros con autovolteo de capacidad 1.000 lts para la construcción del Hospital de Ñuble",
    image: "/images/portfolio/port-003.jpg",
    tag: "Construcción",
  },
  {
    client: "Aeromax Helicópteros",
    project: "2 Unid. Capachos Concreteros Cónicos 300 lts",
    result: "Capachos concreteros cónicos especialmente diseñados para transporte de hormigón en helicóptero para vertido en zonas de difícil acceso",
    image: "/images/portfolio/port-004b.jpg",
    tag: "Construcción",
  },
  {
    client: "ROMERAL- Etex Group",
    project: "Cabina de limpieza de Polvos",
    result: "Romeral instala cabina de limpieza de polvos para su personal de Planta de Placas Yeso Cartón. Los Operarios de la planta incorporan de inmediato a su conducta la limpieza de polvo en ropa en la Cabina con limpieza total de entre 30-60 segundos por operario",
    image: "/images/portfolio/port-005.png",
    tag: "Industria",
    rawClient: true,
  },
  {
    client: "NORMET Aditivos",
    project: "Descargador de Big Bag con tornillo de transporte",
    result: "Para eliminar la polución de la carga manual de sulfato de aluminio en estanque de mezcla, NORMET instala descargador de Big-bag con tornillo de alimentación giratorio y sellado para alimentar 2 estanques de mezcla",
    image: "/images/portfolio/port-006.jpg",
    tag: "Materiales a Granel",
    rawClient: true,
  },
  {
    client: "Romeral-Etex Group",
    project: "Cabina de Limpieza de Polvos",
    result: "Romeral Instala su segunda Cabina de Limpieza de Polvos en su Planta San Gabriel ( Cajón del Maipo) con el objetivo de cuidar la Salud de sus operadores de la Minera",
    image: "/images/portfolio/port-007.png",
    tag: "Industria",
    rawClient: true,
  },
  {
    client: "EBCO",
    project: "2 Unid. Capachos Roll Over 1000 lts",
    result: "Capachos Roll Over versión compuerta Clamp para obra Edificio Guillermo Man, Vicuña Mackenna",
    image: "/images/portfolio/port-008.jpg",
    tag: "Construcción",
  },
  {
    client: "EBCO",
    project: "1 Unid. Capacho Roll Over 1000 lts",
    result: "Capacho Roll Over para obra Edificio Maipú 1546, Concepción",
    image: "/images/portfolio/port-009.jpg",
    tag: "Construcción",
  },
  {
    client: "Constructora Aitué",
    project: "1 Unid. Capacho Roll Over 1000 lts",
    result: "Capacho Roll Over para obra Edificio 3 Pascualas, Concepción",
    image: "/images/portfolio/port-010.png",
    tag: "Construcción",
  },
];
