export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface BusinessVertical {
  id: string;
  title: string;
  image: string;
  icon: string;
  services: string[];
  href: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  status: "Ongoing" | "Completed";
  budget: string;
  size: string;
  sizeIcon: string;
  location: string;
  image: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  abbr: string;
  subtext?: string;
}

export interface PartnerItem {
  icon: string;
  title: string;
  description: string;
}

export interface CommitmentItem {
  icon: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  size: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface HeroFeature {
  icon: string;
  label: string;
}
