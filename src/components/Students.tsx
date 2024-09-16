import React, { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

const Students: React.FC = () => {
  // Exemple de données
  const [students] = useState<Student[]>([
    { id: 1, name: "John Doe", age: 20, course: "Math" },
    { id: 2, name: "Jane Smith", age: 22, course: "Science" },
    { id: 3, name: "Alice Johnson", age: 21, course: "History" },
  ]);

  // Filtrer les étudiants
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Gestion des étudiants</h2>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Ajouter un étudiant
        </Button>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Rechercher un étudiant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b dark:border-gray-700">Nom</th>
              <th className="px-4 py-2 border-b dark:border-gray-700">Âge</th>
              <th className="px-4 py-2 border-b dark:border-gray-700">Cours</th>
              <th className="px-4 py-2 border-b dark:border-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2 border-b dark:border-gray-700">
                  {student.name}
                </td>
                <td className="px-4 py-2 border-b dark:border-gray-700">
                  {student.age}
                </td>
                <td className="px-4 py-2 border-b dark:border-gray-700">
                  {student.course}
                </td>
                <td className="px-4 py-2 border-b dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="p-2">
                      <Edit size={16} />
                    </Button>
                    <Button variant="outline" className="p-2">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
