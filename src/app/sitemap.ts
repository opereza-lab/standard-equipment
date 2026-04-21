import { MetadataRoute } from "next";

const BASE_URL = "https://www.standard-equipment.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rutas = [
    // Home
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },

    // Construcción
    { url: "/construccion/capachos-concretos-roll-over", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/productos/capacho-escombros-autovolteo", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/construccion/capachos-de-escombros-alta-capacidad", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/construccion/balde-para-escombros-con-descarga-directa-a-camion", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/construccion/bandejas-para-escombros", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/construccion/transportador-de-barras", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/construccion/porta-palets", priority: 0.8, changeFrequency: "monthly" as const },

    // Minería
    { url: "/productos/atril-neumaticos-otr", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/productos/soporte-baldes-face-shovel", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/mineria/bases-de-traslado", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/mineria/bases-cilindros-hidraulicos", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/mineria/equipamiento-truckshop", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/mineria/equipamiento-truckshop/rack-maniobras", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/mineria/equipamiento-truckshop/rack-polines", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/mineria/equipamiento-truckshop/rack-martillos-dth", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/mineria/equipamiento-truckshop/pinochos-caex", priority: 0.7, changeFrequency: "monthly" as const },

    // Materiales a Granel
    { url: "/materiales-a-granel/cargadores-de-big-bag", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/materiales-a-granel/descargadores-de-big-bag", priority: 0.8, changeFrequency: "monthly" as const },

    // Cabinas de Limpieza
    { url: "/cabinas-de-limpieza/cabina-de-limpieza-de-polvos", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cabinas-de-limpieza/soplador-de-polvo", priority: 0.8, changeFrequency: "monthly" as const },

    // Institucional
    { url: "/portafolio", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contacto", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return rutas.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
