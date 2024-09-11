import React from "react";

interface NavLinkProps {
  icon: string;
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, href, text }) => {
  return (
    <div className="mb-1.5 rounded-lg shadow px-1.5 py-2 flex items-center gap-4">
      <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400 text-white">
        {icon}
      </div>

      <a href={href} className="font-semibold text-base">
        {text}
      </a>
    </div>
  );
};

export default NavLink;
