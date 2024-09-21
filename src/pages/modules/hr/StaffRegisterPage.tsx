import React from "react";
import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import StaffRegistrationForm from "@/components/modules/hr/StaffRegistrationForm";

const breadcrumbItems = [
  { href: "/", label: "Accueil" },
  { href: "/hr", label: "Ressources humain" },
  { label: "Enregistrement Personnel", isCurrent: true },
];

const StaffRegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-gray-100 dark:bg-gray-800 ml-64">
        <Navbar />
        <main className="flex-1 mt-20">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <StaffRegistrationForm />
        </main>
      </div>
    </div>
  );
};

export default StaffRegisterPage;
