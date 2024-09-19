import { Card } from "@/components/ui/card";
import { Student } from "@/types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

const StudentDetailPage = () => {
  const { studentId } = useParams(); // Récupérer l'ID de l'étudiant depuis l'URL
  const [student, setStudent] = useState<Student>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simuler une requête pour obtenir les données de l'étudiant
    const fetchStudentData = async () => {
      try {
        // Remplacer ceci par une vraie requête API
        // const response = await fetch(`/api/students/${studentId}`);
        // if (!response.ok) throw new Error("Erreur lors de la récupération des données.");
        // const data = await response.json();

        // Utilisation des données d'exemple
        const data = exampleStudent;

        setStudent(data);
      } catch (error) {
        setError(error.message);
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
    <div>
      <Card className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg">
        {/* En-tête de l'étudiant */}
        <div className="flex items-center mb-6">
          <img
            src={student.picture}
            alt={`${student.first_name} ${student.last_name} Profile`}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">
              {student.first_name} {student.last_name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{student.gender}</p>
            <p className="text-gray-500 dark:text-gray-400">
              Classe ID : {student.class_id}
            </p>
          </div>
        </div>
      </Card>
      <Card>
        {/* Informations Personnelles */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Informations Personnelles
          </h2>
          <p>
            <strong>Date de Naissance :</strong> {student.dob}
          </p>
          <p>
            <strong>Lieu de Naissance :</strong> {student.pob}
          </p>
          <p>
            <strong>Adresse :</strong> {student.address}
          </p>
        </div>

        {/* Informations de Contact */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Informations de Contact
          </h2>
          <p>
            <strong>Téléphone :</strong> {student.phone}
          </p>
          <p>
            <strong>Email :</strong> {student.email}
          </p>
        </div>

        {/* Informations du Tuteur */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Informations du Tuteur</h2>
          <p>
            <strong>Nom du Tuteur :</strong> {student.guardian_name}
          </p>
          <p>
            <strong>Téléphone du Tuteur :</strong> {student.guardian_phone}
          </p>
        </div>

        {/* Autres Informations */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Autres Informations</h2>
          <p>
            <strong>École ID :</strong> {student.school_id}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default StudentDetailPage;
