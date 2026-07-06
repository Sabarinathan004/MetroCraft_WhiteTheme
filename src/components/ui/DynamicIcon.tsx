import { type LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Building,
  Building2,
  Clock,
  DraftingCompass,
  Droplets,
  HardHat,
  Landmark,
  Leaf,
  Map,
  MapPin,
  Route,
  ShieldCheck,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  clock: Clock,
  leaf: Leaf,
  wallet: Wallet,
  "building-2": Building2,
  bridge: Landmark,
  users: Users,
  award: Award,
  "map-pin": MapPin,
  "hard-hat": HardHat,
  landmark: Landmark,
  map: Map,
  "drafting-compass": DraftingCompass,
  building: Building,
  "users-round": UsersRound,
  route: Route,
  droplets: Droplets,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export function DynamicIcon({
  name,
  className = "h-5 w-5",
  strokeWidth = 2,
}: DynamicIconProps) {
  const Icon = iconMap[name] ?? ShieldCheck;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
