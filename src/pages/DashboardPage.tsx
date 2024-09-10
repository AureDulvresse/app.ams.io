import React from "react";

import Sidebar from "@/components/partials/sidebar";
import Navbar from "@/components/partials/Navbar";
import Dashboard from "@/components/Dashboard";

const DashboardPage : React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-4 py-2 bg-gray-100">
        <Navbar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
