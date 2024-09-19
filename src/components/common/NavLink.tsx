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
          ? "bg-purple-200 dark:bg-purple-600 text-purple-600 dark:text-purple-100 shadow-sm"
          : "hover:bg-purple-50 dark:hover:bg-purple-700"
      }`}
    >
      <div
        className={`shadow-lg rounded-lg p-2 ${
          isActive
            ? "bg-gradient-to-tr from-purple-500 to-purple-600"
            : "bg-gradient-to-tr from-purple-400 to-purple-500"
        }`}
      >
        <Icon className="text-white" />
      </div>
      <span
        className={`font-semibold text-base ${
          isActive ? "text-purple-600 dark:text-purple-50" : "text-gray-700 dark:text-white"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
