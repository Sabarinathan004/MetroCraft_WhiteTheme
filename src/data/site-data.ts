import type {
  BusinessVertical,
  ClientLogo,
  CommitmentItem,
  FooterColumn,
  HeroFeature,
  NavItem,
  NewsItem,
  PartnerItem,
  Project,
  ResourceItem,
  StatItem,
} from "@/types";

export const images = {
  heroBridge: "/images/hero-bridge.jpg",
  highway: "/images/highway.jpg",
  governmentBuilding: "/images/government-building.jpg",
  survey: "/images/survey.jpg",
  engineering: "/images/engineering.jpg",
  realEstate: "/images/real-estate.jpg",
  workforce: "/images/workforce.jpg",
  waterTreatment: "/images/water-treatment.jpg",
  bridge: "/images/bridge.jpg",
  secretariat: "/images/secretariat.jpg",
  smartCity: "/images/smart-city.jpg",
  windTurbines: "/images/wind-turbines.jpg",
  contactEngineers: "/images/contact-engineers.jpg",
} as const;

export const siteConfig = {
  name: "MetroCraft Group",
  email: "info@metrocraftgroup.com",
  phone: "+91 124 456 7890",
  address:
    "MetroCraft Group Corporate Office, Gurugram, Haryana - 122001, India",
  tagline:
    "Building India's Infrastructure future with innovation, integrity and excellence.",
};

export const topBarLinks = [
  { label: "Tenders", href: "#" },
  { label: "Investor Relations", href: "#" },
  { label: "Vendor Registration", href: "#" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Business Verticals", href: "#verticals", hasDropdown: true },
  { label: "Projects", href: "#projects", hasDropdown: true },
  { label: "Clients", href: "#clients" },
  { label: "Media", href: "#news", hasDropdown: true },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export const heroFeatures: HeroFeature[] = [
  { icon: "shield-check", label: "Safety First" },
  { icon: "badge-check", label: "Quality Assured" },
  { icon: "clock", label: "On-Time Delivery" },
  { icon: "leaf", label: "Sustainable Growth" },
];

export const stats: StatItem[] = [
  { icon: "wallet", value: "₹500+ Cr", label: "Project Portfolio" },
  { icon: "building-2", value: "100+", label: "Government Contracts" },
  { icon: "bridge", value: "50+", label: "Infrastructure Projects" },
  { icon: "users", value: "500+", label: "Skilled Workforce" },
  { icon: "award", value: "20+", label: "Years of Excellence" },
  { icon: "map-pin", value: "25+", label: "States Presence" },
];

export const businessVerticals: BusinessVertical[] = [
  {
    id: "infrastructure",
    title: "Infrastructure & Civil Construction",
    image: images.highway,
    icon: "hard-hat",
    services: [
      "Roads & Highways",
      "Bridges & Flyovers",
      "Water Supply Systems",
      "Drainage Projects",
      "Smart City Works",
    ],
    href: "#",
  },
  {
    id: "government",
    title: "Government Projects & Tenders",
    image: images.governmentBuilding,
    icon: "landmark",
    services: [
      "PWD Projects",
      "Housing Board Projects",
      "Water Authority Projects",
      "Municipal Projects",
      "Smart City Missions",
    ],
    href: "#",
  },
  {
    id: "survey",
    title: "Survey & Geospatial Services",
    image: images.survey,
    icon: "map",
    services: [
      "Land Survey",
      "DGPS Survey",
      "Topographical Survey",
      "Drone Survey",
      "GIS Mapping",
    ],
    href: "#",
  },
  {
    id: "engineering",
    title: "Engineering Consultancy",
    image: images.engineering,
    icon: "drafting-compass",
    services: [
      "DPR Preparation",
      "Project Management",
      "Technical Audits",
      "Design Consultancy",
      "Feasibility Studies",
    ],
    href: "#",
  },
  {
    id: "realestate",
    title: "Real Estate Development",
    image: images.realEstate,
    icon: "building",
    services: [
      "Residential Projects",
      "Commercial Projects",
      "Industrial Projects",
    ],
    href: "#",
  },
  {
    id: "workforce",
    title: "Workforce & Resource Management",
    image: images.workforce,
    icon: "users-round",
    services: ["Skilled Labour", "Project Staffing", "Site Management"],
    href: "#",
  },
];

export const projects: Project[] = [
  {
    id: "dm-expressway",
    title: "Delhi – Mumbai Expressway",
    client: "National Highway Authority of India",
    status: "Ongoing",
    budget: "₹12,500 Cr",
    size: "1,350 Km",
    sizeIcon: "route",
    location: "Maharashtra, MP, Rajasthan",
    image: images.highway,
  },
  {
    id: "ganga-water",
    title: "Ganga Water Supply Project",
    client: "Uttar Pradesh Jal Nigam (U.P.)",
    status: "Completed",
    budget: "₹1,250 Cr",
    size: "180 MLD",
    sizeIcon: "droplets",
    location: "Varanasi, Uttar Pradesh",
    image: images.waterTreatment,
  },
  {
    id: "godavari-bridge",
    title: "Godavari Bridge Project",
    client: "Ministry of Road Transport & Highways",
    status: "Ongoing",
    budget: "₹850 Cr",
    size: "1.2 Km",
    sizeIcon: "landmark",
    location: "Rajahmundry, Andhra Pradesh",
    image: images.bridge,
  },
  {
    id: "secretariat",
    title: "State Secretariat Building",
    client: "Government of Rajasthan",
    status: "Completed",
    budget: "₹650 Cr",
    size: "10.5 Lakh Sq.Ft",
    sizeIcon: "building",
    location: "Jaipur, Rajasthan",
    image: images.secretariat,
  },
];

export const clients: ClientLogo[] = [
  { id: "pwd", name: "PWD", abbr: "PWD", subtext: "Govt. of Rajasthan" },
  { id: "nhidcl", name: "NHIDCL", abbr: "NHIDCL" },
  { id: "nbcc", name: "NBCC", abbr: "NBCC" },
  { id: "cpwd", name: "CPWD", abbr: "CPWD" },
  { id: "upjn", name: "UPJN", abbr: "UPJN", subtext: "Uttar Pradesh Jal Nigam" },
  { id: "dmrc", name: "DMRC", abbr: "DMRC" },
  { id: "hsiidc", name: "HSIIDC", abbr: "HSIIDC", subtext: "Govt. of Haryana" },
  {
    id: "smart-city",
    name: "Smart City Mission",
    abbr: "SMART CITY",
    subtext: "MISSION",
  },
  { id: "nhai", name: "NHAI", abbr: "NHAI", subtext: "National Highways Authority of India" },
];

export const partnerItems: PartnerItem[] = [
  {
    icon: "trophy",
    title: "Proven Track Record",
    description: "Delivering complex projects across India",
  },
  {
    icon: "trending-up",
    title: "Financial Strength",
    description: "Robust financials ensuring project stability",
  },
  {
    icon: "clock",
    title: "Timely Delivery",
    description: "Committed to on-time project completion",
  },
  {
    icon: "shield-check",
    title: "Quality & Safety",
    description: "International standards in quality & safety",
  },
  {
    icon: "leaf",
    title: "Sustainable Approach",
    description: "Building for a better and greener tomorrow",
  },
];

export const commitmentItems: CommitmentItem[] = [
  {
    icon: "leaf",
    title: "Environmental Stewardship",
    description: "Minimizing impact, maximizing value",
  },
  {
    icon: "heart-handshake",
    title: "Community Development",
    description: "Building stronger communities",
  },
  {
    icon: "scale",
    title: "Ethical Governance",
    description: "Transparent, accountable, responsible",
  },
];

export const mapStats = [
  { value: "25+", label: "States", icon: "map-pin" },
  { value: "150+", label: "Cities", icon: "building-2" },
  { value: "300+", label: "Project Sites", icon: "hard-hat" },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title:
      "MetroCraft Group wins ₹650 Cr bridge project in Andhra Pradesh",
    date: "May 15, 2024",
    image: images.bridge,
    href: "#",
  },
  {
    id: "news-2",
    title:
      "Smart City project worth ₹650 Cr commences in Rajasthan",
    date: "May 10, 2024",
    image: images.smartCity,
    href: "#",
  },
  {
    id: "news-3",
    title:
      "MetroCraft Group recognised for excellence in infrastructure",
    date: "April 30, 2024",
    image: images.secretariat,
    href: "#",
  },
];

export const resources: ResourceItem[] = [
  {
    id: "profile",
    title: "Company Profile",
    size: "PDF, 3.4 MB",
    href: "#",
  },
  {
    id: "capability",
    title: "Capability Statement",
    size: "PDF, 2.1 MB",
    href: "#",
  },
  {
    id: "annual",
    title: "Annual Report 2023-24",
    size: "PDF, 8.7 MB",
    href: "#",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "CSR & Sustainability", href: "#" },
      { label: "Policies", href: "#" },
      { label: "Awards & Recognition", href: "#" },
    ],
  },
  {
    title: "Business Verticals",
    links: [
      { label: "Infrastructure", href: "#" },
      { label: "Government Projects", href: "#" },
      { label: "Survey & Geospatial", href: "#" },
      { label: "Engineering Consultancy", href: "#" },
      { label: "Real Estate", href: "#" },
      { label: "Workforce Management", href: "#" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Ongoing Projects", href: "#" },
      { label: "Completed Projects", href: "#" },
      { label: "Government Projects", href: "#" },
      { label: "Private Projects", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tenders", href: "#" },
      { label: "Investor Relations", href: "#" },
      { label: "Downloads", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
];

export const socialLinks = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "facebook", href: "#", label: "Facebook" },
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "youtube", href: "#", label: "YouTube" },
  { icon: "instagram", href: "#", label: "Instagram" },
];

export const enquiryTypes = [
  "Project Enquiry",
  "Partnership Opportunity",
  "Vendor Registration",
  "Career Enquiry",
  "General Enquiry",
];
