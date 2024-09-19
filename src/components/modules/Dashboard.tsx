import React from "react";
import FiliereChart from "../common/FiliereChart";
import FinancialChart from "../common/FinancialChart";
import ActivitySummary from "../common/ActivitySummery";
import {
  GraduationCap as GraduationCapIcon,
  Users2 as UsersIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import StatCard from "../common/StatCard";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student count */}

        <StatCard
          libelle={"Nombre total étudiant"}
          data={1200}
          icon={GraduationCapIcon}
        />

        {/* Teachers count */}
        <StatCard libelle={"Nombre personnel"} data={160} icon={UsersIcon} />

        {/* Revenue */}
        <StatCard
          libelle={"Revenu total"}
          data={230600}
          icon={WalletIcon}
          unity="XAF"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <FinancialChart />
        <FiliereChart />
      </div>

      {/* Latest Activities */}
      <div className="mt-6">
        <ActivitySummary />
      </div>
    </div>
  );
};

export default Dashboard;
