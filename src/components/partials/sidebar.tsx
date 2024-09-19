import React from "react";
import logo_light from "/logo_light.png";
import logo_dark from "/logo_dark.png";
import { useLocation } from "react-router-dom";
import { routes } from "@/routes/router";
import NavLink from "../common/NavLink";
import { useTheme } from "@/hooks/theme-provider";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { theme } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="flex items-center gap-4 border-b p-4">
        <img
          src={theme === "light" ? logo_light : logo_dark}
          className="w-20 h-auto"
          alt="logo"
        />
        <h1 className="text-base font-bold text-purple-400 font-fredoka">
          Academia Management Sync
        </h1>
      </div>

      {/* Ajout de la classe scrollbar-custom */}
      <div className="mt-3 mr-1 px-2 h-[calc(100vh-120px)] overflow-y-auto scrollbar-custom">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            name={route.name}
            icon={route.icon}
            link={route.path}
            isActive={currentPath === route.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
