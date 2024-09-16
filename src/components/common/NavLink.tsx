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
          ? "bg-teal-100 dark:bg-teal-600 text-teal-600 dark:text-teal-100 shadow-sm"
          : "hover:bg-teal-50 dark:hover:bg-teal-700"
      }`}
    >
      <div
        className={`shadow-lg rounded-lg p-2 ${
          isActive
            ? "bg-gradient-to-tr from-teal-400 to-teal-500"
            : "bg-gradient-to-tr from-teal-300 to-teal-400"
        }`}
      >
        <Icon className="text-white" />
      </div>
      <span
        className={`font-semibold text-base ${
          isActive ? "text-teal-600 dark:text-teal-100" : "text-gray-700 dark:text-white"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
