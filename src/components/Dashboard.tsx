import React from "react";
import { Card, CardContent } from "./ui/card";
import FiliereChart from "./common/FiliereChart";
import FinancialChart from "./common/FinancialChart";
import ActivitySummary from "./common/ActivitySummary";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student count */}
        <Card className="py-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Total Students</h3>
            <p className="text-4xl font-bold text-teal-500">1,200</p>
          </CardContent>
        </Card>

        {/* Teachers count */}
        <Card className="py-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Total Teachers</h3>
            <p className="text-4xl font-bold text-teal-500">150</p>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="py-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
            <p className="text-4xl font-bold text-teal-500">$80,000</p>
          </CardContent>
        </Card>
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
