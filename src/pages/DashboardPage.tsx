import React from "react";

import Navbar from "@/components/partials/Navbar";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/partials/Sidebar";

const DashboardPage : React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-slate-50 dark:bg-gray-900 ml-64">
        <Navbar />
        <main className="flex-1 mt-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
