import React from "react";
import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import StudentDetail from "@/components/modules/students/StudentDetail";


const StudentDetailPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-slate-50 dark:bg-gray-800 ml-64">
        <Navbar />
        <main className="flex-1">
          <StudentDetail />
        </main>
      </div>
    </div>
  );
};

export default StudentDetailPage;
