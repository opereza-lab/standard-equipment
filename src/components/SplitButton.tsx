import Link from "next/link";
import { ReactNode } from "react";

// Flecha larga y elegante
export const LongArrow = ({ className = "" }: { className?: string }) => (
  <svg
    width="54" height="12" viewBox="0 0 54 12" fill="none"
    className={`flex-shrink-0 ${className}`}
    aria-hidden="true"
  >
    <line x1="0" y1="6" x2="45" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M41 1.5L48.5 6L41 10.5" stroke="currentColor" strokeWidth="1.4" fill="none"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface SplitButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  /** dark = navy→naranja | orange = naranja→navy | light = blanco→naranja */
  variant?: "dark" | "orange" | "light";
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  arrow?: boolean;
}

export default function SplitButton({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
  type = "button",
  external = false,
  arrow = true,
}: SplitButtonProps) {
  const variantClass = {
    dark:   "btn-split-dark",
    orange: "btn-split-orange",
    light:  "btn-split-light",
  }[variant];

  const inner = (
    <>
      {/* Las dos mitades del fill animado */}
      <span className="btn-split-top" aria-hidden="true" />
      <span className="btn-split-bottom" aria-hidden="true" />
      {/* Contenido sobre las capas */}
      <span className="btn-split-content">
        {children}
        {arrow && <LongArrow />}
      </span>
    </>
  );

  const cls = `btn-split ${variantClass} ${className}`;

  if (href) {
    if (external) {
      return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a>;
    }
    return <Link href={href} className={cls}>{inner}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
