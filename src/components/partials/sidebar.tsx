import React from "react";
import logo from "/logo.png";
import {
  HomeIcon,
  SettingsIcon,
  WalletIcon,
  UsersIcon,
  GraduationCapIcon,
  BookCheck,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-white dark:bg-gray-800 text-gray-600 shadow">
      <div className="flex items-center gap-4 border-b border-b-gray-50">
        <img src={logo} className="w-20 h-auto" alt="logo" />
        <h1 className="text-base font-bold text-teal-400 font-fredoka">
          Academia Management Sync
        </h1>
      </div>

      <ul className="mt-3 px-2">
        <li className="mb-1.5 rounded-lg shadow px-1.5 py-2 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <HomeIcon className="text-white" />
          </div>

          <a href="#" className="font-semibold text-base">
            Dashboard
          </a>
        </li>
        <li className="mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <GraduationCapIcon className="text-white" />
          </div>
          <a href="#" className="font-semibold text-base">
            Gestion étudiant
          </a>
        </li>
        <li className="mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <UsersIcon className="text-white" />
          </div>
          <a href="#" className="font-semibold text-base">
            Ressources Humaine
          </a>
        </li>
        <li className="mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <WalletIcon className="text-white" />
          </div>
          <a href="#" className="font-semibold text-base">
            Finance
          </a>
        </li>
        <li className="mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <BookCheck className="text-white" />
          </div>
          <a href="#" className="font-semibold text-base">
            Materiel
          </a>
        </li>
        <li className="mb-1.5 rounded-lg px-1.5 py-3 flex items-center gap-4">
          <div className="shadow-lg rounded-lg p-2 bg-gradient-to-tr from-teal-300 to-teal-400">
            <SettingsIcon className="text-white" />
          </div>
          <a href="#" className="font-semibold text-base">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
