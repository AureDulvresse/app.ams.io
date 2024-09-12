import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  date: string;
  description: string;
}

const activities: Activity[] = [
  { date: "2024-09-10", description: "New student registration: John Doe" },
  { date: "2024-09-09", description: "Course material updated for Math 101" },
  { date: "2024-09-08", description: "Student Jane Smith graduated" },
  { date: "2024-09-07", description: "New feedback received on Science 202" },
  { date: "2024-09-06", description: "New teacher added: Dr. Alice Johnson" },
];

const ActivitySummary: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <div className="text-sm text-gray-600">
                {activity.description}
              </div>
              <div className="text-xs text-gray-400">{activity.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
