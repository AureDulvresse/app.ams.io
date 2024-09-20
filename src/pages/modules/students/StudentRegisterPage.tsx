import React from "react";
import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import StudentRegistrationForm from "@/components/forms/StudentRegistrationForm";

const breadcrumbItems = [
  { href: "/", label: "Accueil" },
  { href: "/students", label: "Gestion Etudiant" },
  { label: "Enregistrement Etudiant", isCurrent: true },
];

const StudentRegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-gray-100 dark:bg-gray-800 ml-64">
        <Navbar />
        <main className="flex-1 mt-20">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <StudentRegistrationForm />
        </main>
      </div>
    </div>
  );
};

export default StudentRegisterPage;
