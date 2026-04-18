# Standard Equipment — Contexto del Proyecto

## Qué es esto
Sitio web de Standard Equipment, empresa chilena de equipos industriales y de construcción.
Stack: Next.js 16 (App Router) + Tailwind v4 + TypeScript strict.

---

## Diseño — Tokens

| Token | Valor |
|---|---|
| Naranja principal | `#e07820` |
| Azul navy | `#0d1528` |
| Azul acento | `#6baed6` |
| Azul card | `#1a2f4e` |
| Fondo gris claro | `#f5f7fa` |

---

## Reglas del Usuario — CRÍTICAS

1. **Solo tocar lo que se pide.** Nunca cambiar nada que no fue solicitado explícitamente.
2. **No anticipar ni inventar.** Si no se pidió, no se hace.
3. **Respetar mayúsculas y minúsculas** exactamente como las entrega el usuario en títulos, nombres de clientes y textos.
4. **No enangostrar cards.** Si se pide escalar, mantener proporciones.
5. **Antes del deploy:** dejar cero warnings y cero errores en lint y build.
6. **Servidor de dev:** SOLO usar `mcp__Claude_Preview__preview_start`. NUNCA bash en background para servidores.

---

## Arquitectura — Portafolio

- Datos centralizados en `src/data/portfolio.ts`
- Interfaz: `ProyectoPortfolio` con campos: `client`, `project`, `result`, `image`, `tag`, `rawClient?`
- `rawClient: true` preserva mayúsculas/minúsculas del cliente (sin CSS uppercase)
- Carousel: 4 cards visibles, flechas de navegación, dots

### TAGs definidos
- `Construcción`
- `Industria`
- `Materiales a Granel`
- `Minería`
- `Cabinas de Limpieza`

---

## Arquitectura — Páginas de Producto

Cada página de producto filtra el carrusel "Proyectos Relacionados" por su TAG correspondiente:
```tsx
const proyectosRelacionados = PROYECTOS.filter((p) => p.tag === "Construcción");
```
Si no hay proyectos con ese TAG, la sección no aparece (return null).

### Estructura de sección de una página de producto
1. Hero carrusel 21:9 con overlay 55% negro
2. Barra de destacados naranja (4 ítems)
3. Diagrama técnico (imagen + hotspots interactivos + leyenda)
4. Ficha técnica + Sectores de aplicación (2 columnas)
5. Secuencia de izaje (2/3) + Video Vimeo (1/3)
6. Proyectos Relacionados (carrusel automático por TAG)
7. Otros Productos (cards dark navy)
8. CTA final (mailto)

### Hotspots del diagrama técnico
- SVG círculo rojo con cruz transparente recortada (`fillRule="evenodd"`)
- Tamaño SVG: 17px, contenedor `w-5 h-5`
- Pulse: `rounded-2xl`, `#888888`, opacity 50%, color `#666666`
- Popup: aparece en hover con `group/group-hover`

---

## Analytics instalados (se activan al subir al dominio)

- **Google Analytics 4:** `G-NKW84WEWRN`
- **Microsoft Clarity:** `wb6sjmppjt`
- Dominio definitivo: `www.standard-equipment.cl`

---

## Portfolio — Estado actual

| ID | Cliente | Proyecto | TAG |
|---|---|---|---|
| port-001 | CBB Concepción | Capachos Roll Over Edificio Insigne | Construcción |
| port-002 | GRAU | Carro Parador Transporte de Tubos | Industria |
| port-003 | INSO Italia | Capachos Escombros Autovolteo Hospital Ñuble | Construcción |
| port-004b | Aeromax Helicópteros | Capachos Concreteros Cónicos 300 lts | Construcción |
| port-005 | ROMERAL- Etex Group | Cabina de Limpieza de Polvos | Industria |
| port-006 | NORMET Aditivos | Descargador Big Bag tornillo transporte | Materiales a Granel |
| port-007 | Romeral-Etex Group | Cabina de Limpieza de Polvos Planta San Gabriel | Industria |
| port-008 | EBCO | 2 Unid. Capachos Roll Over 1000 lts Edificio Guillermo Man | Construcción |
| port-009 | EBCO | 1 Unid. Capacho Roll Over 1000 lts Edificio Maipú 1546 | Construcción |
| port-010 | Constructora Aitué | 1 Unid. Capacho Roll Over 1000 lts Edificio 3 Pascualas | Construcción |

---

## Páginas de producto existentes

| Slug | TAG | Estado |
|---|---|---|
| `/productos/capacho-escombros-autovolteo` | Construcción | ✅ Completa |

---

## Pendientes antes del deploy

- [ ] Corregir 6 warnings de imports no usados (CTABanner, HeroSection, ProductosDestacados, WhatsAppButton)
- [ ] Meta tags `<title>` y `<meta description>` para cada página
- [ ] URLs reales de redes sociales en el footer (actualmente `href="#"`)
- [ ] Posiciones exactas de hotspots en el diagrama técnico (el usuario entregará imagen de referencia)
- [ ] Más páginas de producto
- [ ] Mínimo 10 proyectos en portafolio (actualmente 10 ✅)
- [ ] Estrategia SEO agresiva (dejar para cuando el sitio esté publicado)
- [ ] Blog (dejar para después)

---

## Decisiones técnicas

- `rawClient: true` en portfolio para clientes con capitalización especial
- Overlay hero: `rgba(0,0,0,0.55)`
- Panel hero: `maxWidth: "42%"`, `bottom: "16px"`, `zIndex: 2`
- `white-space: nowrap` en h1 del hero para controlar ancho del panel
- `width: 0; min-width: 100%` en párrafo del hero para que llene sin expandir
- Separadores barra naranja: `divide-[#0d1528]`
- `src/data/portfolio.ts` como fuente única de verdad del portafolio
