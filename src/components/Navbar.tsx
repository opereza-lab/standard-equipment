"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, MenuIcon, XIcon } from "./icons";
import SplitButton from "./SplitButton";

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "Construcción",
    children: [
      { label: "Capachos Concretos Roll Over", href: "/construccion/capachos-concretos-roll-over" },
      { label: "Capachos de Escombros", href: "/construccion/capachos-de-escombros" },
      { label: "Capachos Escombros Alta Capacidad", href: "/construccion/capachos-de-escombros-alta-capacidad" },
      { label: "Balde Descarga Directa a Camión", href: "/construccion/balde-para-escombros-con-descarga-directa-a-camion" },
      { label: "Bandejas para Escombros", href: "/construccion/bandejas-para-escombros" },
      { label: "Transportador de Barras", href: "/construccion/transportador-de-barras" },
      { label: "Porta Pallets", href: "/construccion/porta-palets" },
    ],
  },
  {
    label: "Materiales a Granel",
    children: [
      { label: "Cargadores de Big Bag", href: "/materiales-a-granel/cargadores-de-big-bag" },
      { label: "Descargadores de Big Bag", href: "/materiales-a-granel/descargadores-de-big-bag" },
    ],
  },
  {
    label: "Minería",
    children: [
      { label: "Atril Neumáticos OTR", href: "/productos/atril-neumaticos-otr" },
      { label: "Soporte Balde Face Shovel", href: "/productos/soporte-baldes-face-shovel" },
      { label: "Bases Cilindros Hidráulicos Heavy Duty", href: "/mineria/bases-cilindros-hidraulicos" },
      {
        label: "Equipamiento Truckshop",
        children: [
          { label: "Rack Maniobras", href: "/mineria/equipamiento-truckshop/rack-maniobras" },
          { label: "Rack Polines", href: "/mineria/equipamiento-truckshop/rack-polines" },
          { label: "Rack Martillos DTH", href: "/mineria/equipamiento-truckshop/rack-martillos-dth" },
        ],
      },
    ],
  },
  {
    label: "Cabinas de Limpieza",
    children: [
      { label: "Cabina de Limpieza de Polvos", href: "/cabinas-de-limpieza/cabina-de-limpieza-de-polvos" },
      { label: "Soplador de Polvo", href: "/cabinas-de-limpieza/soplador-de-polvo" },
    ],
  },
  { label: "Servicios de Ingeniería", href: "https://www.standard-ingenieria.com", external: true },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

function DropdownMenu({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="block px-4 py-2 text-sm text-white/85 hover:text-[#6baed6] hover:bg-white/10 transition-colors whitespace-nowrap"
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative ${depth > 0 ? "" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 text-sm text-white/85 hover:text-[#6baed6] hover:bg-white/10 transition-colors whitespace-nowrap w-full text-left ${
          depth === 0 ? "rounded" : ""
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDownIcon
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""} ${depth > 0 ? "-rotate-90" : ""}`}
        />
      </button>
      {open && (
        <div
          className={`absolute z-50 border border-white/10 rounded shadow-lg min-w-[220px] dropdown-menu ${
            depth === 0 ? "top-full left-0" : "top-0 left-full"
          }`}
        >
          {item.children?.map((child) =>
            child.children ? (
              <DropdownMenu key={child.label} item={child} depth={depth + 1} />
            ) : (
              <Link
                key={child.label}
                href={child.href || "#"}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noopener noreferrer" : undefined}
                className="block px-4 py-2.5 text-sm text-white/85 hover:text-[#6baed6] hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0 whitespace-nowrap"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        style={{ height: "80px", background: "#0d1528" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Standard Equipment"
              width={200}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <DropdownMenu item={item} />
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-3 py-2 text-sm text-white/85 hover:text-[#6baed6] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <SplitButton href="https://wa.me/56229381290" variant="orange" external className="text-sm">
              Consultar ahora
            </SplitButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto lg:hidden"
          style={{ background: "#0d1528", top: "80px" }}
        >
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 text-white font-medium text-left border-b border-white/10"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 space-y-0.5 bg-white/5 rounded-b">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.label}>
                            <div className="px-3 py-2 text-sm font-semibold text-[#6baed6]">
                              {child.label}
                            </div>
                            {child.children.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href || "#"}
                                className="block px-6 py-2 text-sm text-white/75 hover:text-[#6baed6]"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href || "#"}
                            target={child.external ? "_blank" : undefined}
                            className="block px-3 py-2.5 text-sm text-white/75 hover:text-[#6baed6] border-b border-white/10"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  className="block px-3 py-3 text-white font-medium border-b border-white/10 hover:text-[#6baed6]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 pb-8">
              <SplitButton href="https://wa.me/56229381290" variant="orange" external className="w-full justify-center text-base">
                Consultar por WhatsApp
              </SplitButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
