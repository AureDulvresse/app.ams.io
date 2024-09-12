import { ComponentType } from "react";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Wallet as WalletIcon,
  Users as UsersIcon,
  GraduationCap as GraduationCapIcon,
  Book as BookCheck,
} from "lucide-react";

export interface SidebarRoute {
  path: string;
  name: string;
  icon: ComponentType; // Utilisez ComponentType pour les icônes
}

export const routes: SidebarRoute[] = [
  { path: "/", name: "Dashboard", icon: HomeIcon },
  { path: "/students", name: "Gestion étudiant", icon: GraduationCapIcon },
  { path: "/hr", name: "Ressources Humaine", icon: UsersIcon },
  { path: "/finance", name: "Finance", icon: WalletIcon },
  { path: "/material", name: "Materiel", icon: BookCheck },
  { path: "/settings", name: "Settings", icon: SettingsIcon },
];
