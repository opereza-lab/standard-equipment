import Link from "next/link";
import Image from "next/image";
import { MailIcon, MapPinIcon, LinkedInIcon, WhatsAppIcon, InstagramIcon, VimeoIcon, YouTubeIcon, FacebookIcon } from "./icons";

const footerNav = [
  {
    title: "Construcción",
    links: [
      { label: "Capachos Roll Over", href: "/construccion/capachos-concretos-roll-over" },
      { label: "Capachos Escombros", href: "/construccion/capachos-de-escombros" },
      { label: "Bandejas para Escombros", href: "/construccion/bandejas-para-escombros" },
      { label: "Transportador de Barras", href: "/construccion/transportador-de-barras" },
      { label: "Porta Pallets", href: "/construccion/porta-palets" },
    ],
  },
  {
    title: "Minería",
    links: [
      { label: "Bases de Traslado", href: "/mineria/bases-de-traslado" },
      { label: "Atril Neumáticos OTR", href: "/mineria/atril-neumaticos-otr" },
      { label: "Pinochos CAEX", href: "/mineria/equipamiento-truckshop/pinochos-caex" },
      { label: "Rack Maniobras", href: "/mineria/equipamiento-truckshop/rack-maniobras" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Portafolio", href: "/portafolio" },
      { label: "Blog / Recursos", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
      { label: "Servicios de Ingeniería", href: "https://www.standard-ingenieria.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1e" }}>
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Standard Equipment"
                width={220}
                height={62}
                className="h-14 w-auto"
              />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Más de 20 años diseñando y fabricando equipamiento industrial en acero a medida para construcción, minería y materiales a granel en Chile.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="https://wa.me/56229381290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                +56 2 2938 1290
              </a>
              <a
                href="mailto:contacto@standard-equipment.cl"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <MailIcon className="w-4 h-4 text-[#6baed6]" />
                contacto@standard-equipment.cl
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPinIcon className="w-4 h-4 text-[#e07820] flex-shrink-0 mt-0.5" />
                <span>Santiago, Chile</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-6">
              {[
                { label: "LinkedIn",   icon: <LinkedInIcon   className="w-4 h-4" />, href: "#" },
                { label: "Instagram",  icon: <InstagramIcon  className="w-4 h-4" />, href: "#" },
                { label: "Facebook",   icon: <FacebookIcon   className="w-4 h-4" />, href: "#" },
                { label: "YouTube",    icon: <YouTubeIcon    className="w-4 h-4" />, href: "#" },
                { label: "Vimeo",      icon: <VimeoIcon      className="w-4 h-4" />, href: "#" },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center text-white transition-opacity hover:opacity-80"
                  style={{ background: "#e07820" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
                style={{ letterSpacing: "0.1em" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={(link as { external?: boolean }).external ? "_blank" : undefined}
                      rel={(link as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Standard Equipment. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-white/70 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white/70 transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
