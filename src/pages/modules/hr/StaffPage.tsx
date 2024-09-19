import React from "react";
import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import Staff from "@/components/modules/hr/Staff";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";

const breadcrumbItems = [
  { href: "/", label: "Accueil" },
  { label: "Ressources humaine", isCurrent: true },
];

const StudentPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-slate-50 dark:bg-gray-900 ml-64">
        <Navbar />
        <main className="flex-1 mt-4">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <Staff />
        </main>
      </div>
    </div>
  );
};

export default StudentPage;
