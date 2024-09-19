import { Card } from "@/components/ui/card";
import { Student } from "@/types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User, Mail, Phone } from "lucide-react";

// Exemple de données fictives conformes à l'interface Student
const exampleStudent = {
  id: 1,
  first_name: "Jean",
  last_name: "Dupont",
  dob: "2002-03-15",
  pob: "Paris, France",
  gender: "Masculin",
  address: "123 Rue de Rivoli, Paris",
  phone: "+33 6 12 34 56 78",
  email: "jean.dupont@example.com",
  guardian_name: "Marie Dupont",
  guardian_phone: "+33 6 87 65 43 21",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
  class_id: 101,
  school_id: 202,
};

const StudentDetailPage : React.FC = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState<Student>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler une requête pour obtenir les données de l'étudiant
    const fetchStudentData = async () => {
      try {
        // Utilisation des données d'exemple
        const data = exampleStudent;

        setStudent(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!student) {
    return <div>Aucun étudiant trouvé.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Student Profile Header */}
      <Card className="flex items-center p-6 space-x-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg rounded-lg">
        <img
          src={student.picture}
          alt={`${student.first_name} ${student.last_name} Profile`}
          className="w-24 h-24 rounded-full shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {student.first_name} {student.last_name}
          </h1>
          <p className="text-lg">{student.gender}</p>
          <p>Classe ID : {student.class_id}</p>
          <p>École ID : {student.school_id}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informations Personnelles */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <User className="text-purple-500 mr-2" /> Informations Personnelles
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Date de Naissance :</strong> {student.dob}
            </li>
            <li>
              <strong>Lieu de Naissance :</strong> {student.pob}
            </li>
            <li>
              <strong>Adresse :</strong> {student.address}
            </li>
          </ul>
        </Card>

        {/* Informations de Contact */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Mail className="text-purple-500 mr-2" /> Informations de Contact
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>
                <Phone className="inline-block mr-1" /> Téléphone :
              </strong>{" "}
              {student.phone}
            </li>
            <li>
              <strong>
                <Mail className="inline-block mr-1" /> Email :
              </strong>{" "}
              {student.email}
            </li>
          </ul>
        </Card>

        {/* Informations du Tuteur */}
        <Card className="md:col-span-2 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <User className="text-purple-500 mr-2" /> Informations du Tuteur
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Nom du Tuteur :</strong> {student.guardian_name}
            </li>
            <li>
              <strong>
                <Phone className="inline-block mr-1" /> Téléphone du Tuteur :
              </strong>{" "}
              {student.guardian_phone}
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default StudentDetailPage;
