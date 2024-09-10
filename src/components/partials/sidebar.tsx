import { DashboardIcon } from "@radix-ui/react-icons";
import {Link} from "react-router-dom"
import React from "react";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col w-[16%] bg-white shadow-lg rounded-md px-3 py-2">
      <h1 className="text-indigo-500 font-bold text-xl">AMS</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to=""
            className="text-base text-white bg-indigo-500 rounded-sm"
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
