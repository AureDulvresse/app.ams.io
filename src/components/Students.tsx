import React, { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import DataTable from "./common/DataTable";

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

// Définition des colonnes pour DataTable
const columns = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "age",
    header: "Âge",
  },
  {
    accessorKey: "course",
    header: "Cours",
  },
  {
    accessorFn: (row: Student) => row,
    id: "actions",
    cell: () => (
      <div className="flex items-center gap-4">
        <Button variant="outline" className="p-2">
          <Edit size={16} />
        </Button>
        <Button variant="outline" className="p-2">
          <Trash2 size={16} />
        </Button>
      </div>
    ),
    header: "Actions",
  },
];

const Students: React.FC = () => {
  // Exemple de données
  const [students] = useState<Student[]>([
    { id: 1, name: "John Doe", age: 20, course: "Math" },
    { id: 2, name: "Jane Smith", age: 22, course: "Science" },
    { id: 3, name: "Alice Johnson", age: 21, course: "History" },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Gestion des étudiants</h2>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Ajouter un étudiant
        </Button>
      </div>

      <DataTable data={students} columns={columns} />
    </div>
  );
};

export default Students;
