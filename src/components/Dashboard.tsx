import React from "react";
import { Card, CardContent } from "./ui/card";

const Dashboard : React.FC = () => {
  return (
    <div className="p-3.5">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="py-2">
          <CardContent>
            <h3 className="text-xl font-semibold">Card 2</h3>
            <p>Some content here.</p>
          </CardContent>
        </Card>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold">Card 2</h3>
          <p>Some content here.</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold">Card 3</h3>
          <p>Some content here.</p>
        </div>
      </div>
   
    </div>
  );
};

export default Dashboard;
