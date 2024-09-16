import React from "react";
import { Card, CardContent } from "../ui/card";
import { LucideProps } from "lucide-react";

interface StatCardProps {
  libelle: string;
  data: string | number;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">> &
    React.ComponentType<React.SVGProps<SVGSVGElement>>;
  unity?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  libelle,
  data,
  icon: Icon,
  unity,
}) => {
  return (
    <Card className="py-4 hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white  dark:bg-gray-900">
      <CardContent>
        <h3 className="text-xl text-gray-500 font-semibold mb-2">{libelle}</h3>
        <div className="flex items-center justify-between">
          <p className="text-teal-500">
            <span className="text-3xl font-bold">{data} </span>
            <span className="text-gray-400 dark:text-gray-700 text-md">
              {unity}
            </span>
          </p>
          <Icon className="text-teal-500" size={34} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
