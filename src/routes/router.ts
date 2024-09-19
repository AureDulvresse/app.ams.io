import { ComponentType } from "react";
import {
  Home as HomeIcon,
  GraduationCap as GraduationCapIcon,
  Wallet as WalletIcon,
  Users2 as UsersIcon,
  Book as BookCheck,
  Calendar as CalendarIcon,
  Smile as SmileIcon,
  Settings as SettingsIcon,
} from "lucide-react";

export interface SidebarRoute {
  path: string;
  name: string;
  icon: ComponentType; // Utilisez ComponentType pour les icônes
}

export const routes: SidebarRoute[] = [
  { path: "/", name: "Tableau de bord", icon:  HomeIcon},
  { path: "/students", name: "Gestion étudiant", icon: GraduationCapIcon },
  { path: "/hr", name: "Ressources Humaine", icon: UsersIcon },
  { path: "/schedules", name: "Emploi du temps", icon: CalendarIcon },
  { path: "/finance", name: "Finance", icon: WalletIcon },
  { path: "/events", name: "Evenement", icon: SmileIcon },
  { path: "/material", name: "Patrimoine", icon: BookCheck },
  { path: "/settings", name: "Settings", icon: SettingsIcon },
];
