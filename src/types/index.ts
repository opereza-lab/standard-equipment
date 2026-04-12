export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  categorySlug: string;
  href: string;
}

export interface Industry {
  name: string;
  slug: string;
  description: string;
  image: string;
  href: string;
  products: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  text: string;
}

export interface PortfolioItem {
  client: string;
  project: string;
  result: string;
  image: string;
  industry: string;
}

export interface ContactFormData {
  nombre: string;
  empresa: string;
  cargo: string;
  telefono: string;
  email: string;
  producto?: string;
  mensaje?: string;
}
