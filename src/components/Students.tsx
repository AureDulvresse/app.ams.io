import React, { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import DataTable from "./common/DataTable";
import { Student } from "@/types";


const columns = [
  {
    accessorKey: "first_name",
    header: "Prénom",
  },
  {
    accessorKey: "last_name",
    header: "Nom",
  },
  {
    accessorKey: "dob",
    header: "Date de naissance",
  },
  {
    accessorKey: "pob",
    header: "Lieu de naissance",
  },
  {
    accessorKey: "gender",
    header: "Sexe",
  },
  {
    accessorKey: "class_id",
    header: "Classe",
  },
  {
    accessorKey: "email",
    header: "Adresse e-mail",
  },
  {
    accessorKey: "address",
    header: "Adresse",
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

const filters = ["first_name", "last_name"];

const Students: React.FC = () => {
  // Exemple de données
  const [students] = useState<Student[]>([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      dob: "2005-06-03",
      pob: "Pointe-Noire",
      gender: "M",
      phone: "05 568 68 68",
      address: "Siafoumou",
      email: "john-doe@gmail.com",
      guardian_name: "Jenathan Doe",
      guardian_phone: "04 456 46 46",
      class_id: 1,
      school_id: 1,
    },
    {
      id: 2,
      first_name: "Daniel",
      last_name: "Williams",
      dob: "2005-04-13",
      pob: "Pointe-Noire",
      gender: "M",
      phone: "05 568 68 68",
      address: "Siafoumou",
      email: "daniel-jones@gmail.com",
      guardian_name: "Roger Williams",
      guardian_phone: "04 456 46 46",
      class_id: 1,
      school_id: 1,
    },
    {
      id: 3,
      first_name: "Jane",
      last_name: "Jones",
      dob: "2005-09-23",
      pob: "Pointe-Noire",
      gender: "F",
      phone: "05 568 68 68",
      address: "Siafoumou",
      email: "jane-jones@gmail.com",
      guardian_name: "Sonia Lewis",
      guardian_phone: "04 456 46 46",
      class_id: 1,
      school_id: 1,
    },
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

      <DataTable data={students} columns={columns} filters={filters} />
    </div>
  );
};

export default Students;
