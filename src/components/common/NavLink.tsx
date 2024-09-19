import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ name,  icon: Icon, link, isActive }) => {
  return (
    <Link
      to={link}
      className={`mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4 transition-colors ${
        isActive
          ? "bg-indigo-200 dark:bg-indigo-600 text-indigo-600 dark:text-indigo-100 shadow-sm"
          : "hover:bg-indigo-50 dark:hover:bg-indigo-700"
      }`}
    >
      <div
        className={`shadow-lg rounded-lg p-2 ${
          isActive
            ? "bg-gradient-to-tr from-indigo-500 to-indigo-600"
            : "bg-gradient-to-tr from-indigo-400 to-indigo-500"
        }`}
      >
        <Icon className="text-white" />
      </div>
      <span
        className={`font-semibold text-base ${
          isActive ? "text-indigo-600 dark:text-indigo-50" : "text-gray-700 dark:text-white"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
