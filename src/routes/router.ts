import { ComponentType } from "react";
import {
  Home as HomeIcon,
  GraduationCap as GraduationCapIcon,
  SwatchBook as SwatchBookIcon,
  Wallet as WalletIcon,
  Users2 as UsersIcon,
  Calendar as CalendarIcon,
  Smile as SmileIcon,
  Computer as ComputerIcon,
  Settings as SettingsIcon,
  NotebookPenIcon,
} from "lucide-react";

export interface SidebarRoute {
  path: string;
  name: string;
  icon: ComponentType; // Utilisez ComponentType pour les icônes
}

export const routes: SidebarRoute[] = [
  { path: "/", name: "Tableau de bord", icon: HomeIcon },
  { path: "/students", name: "Gestion étudiant", icon: GraduationCapIcon },
  { path: "/courses", name: "Gestion cours", icon: SwatchBookIcon },
  { path: "/schedules", name: "Emploi du temps", icon: CalendarIcon },
  { path: "/performances", name: "Performances academique", icon: NotebookPenIcon },
  { path: "/hr", name: "Ressources Humaine", icon: UsersIcon },
  { path: "/finance", name: "Finance", icon: WalletIcon },
  { path: "/events", name: "Evenement", icon: SmileIcon },
  { path: "/patrimoine", name: "Patrimoine", icon: ComputerIcon },
  { path: "/settings", name: "Settings", icon: SettingsIcon },
];
