import React from "react";
import logo from "/logo.png";
import { useLocation } from "react-router-dom";
import { routes } from "@/routes/router";
import NavLink from "../common/NavLink";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="flex items-center gap-4 border-b p-4">
        <img src={logo} className="w-20 h-auto" alt="logo" />
        <h1 className="text-base font-bold text-teal-400 font-fredoka">
          Academia Management Sync
        </h1>
      </div>

      {/* Apply overflow and full height to make the sidebar scrollable */}
      <div className="mt-3 px-2 h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500">
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
