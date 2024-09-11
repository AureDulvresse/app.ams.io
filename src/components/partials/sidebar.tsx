import React from "react";
import logo from "/logo.png";
import { useLocation } from "react-router-dom";
import { routes } from "@/routes/router";
import NavLink from "../common/NavLink";

const Sidebar: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-64 h-full bg-white dark:bg-gray-800 text-gray-600 shadow">
      <div className="flex items-center gap-4 border-b border-b-gray-50">
        <img src={logo} className="w-20 h-auto" alt="logo" />
        <h1 className="text-base font-bold text-teal-400 font-fredoka">
          Academia Management Sync
        </h1>
      </div>

      <div className="mt-3 px-2">
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
