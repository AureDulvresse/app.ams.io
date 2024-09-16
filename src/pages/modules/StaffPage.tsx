import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import Staff from "@/components/Staff";
import React from "react";

const StudentPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-3 py-2 bg-slate-50 dark:bg-gray-800 ml-64">
        <Navbar />
        <main className="flex-1">
          <Staff />
        </main>
      </div>
    </div>
  );
};

export default StudentPage;
