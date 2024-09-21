import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";import { IdCardIcon, PenLineIcon, PrinterIcon, User2 } from "lucide-react";
import Modal from "@/components/common/Modal";
import TutorForm from "@/components/forms/TutorForm";
import { Student } from "@/types";
import { toast } from "@/hooks/use-toast";


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

const StudentDetailPage: React.FC = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTutorFormOpen, setIsTutorFormOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const data = exampleStudent; // Remplacez par une requête API réelle
        setStudent(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  if (loading) return <div>Chargement des données...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!student) return <div>Aucun étudiant trouvé.</div>;

  const toggleTutorForm = () => {
    setIsTutorFormOpen(!isTutorFormOpen);
  };

  const handleSubmit = (data: {
    name: string;
    phone: string;
    email?: string;
  }) => {
    console.log(data);
    toast({
      variant: "default",
      title: "Informations",
      description: "Informations enregistrées avec succès !",
    });
  };

  return (
    <div className="mx-auto p-6 space-y-6">
      <Card className="flex items-start justify-between p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            src={student.picture}
            alt={`${student.first_name} ${student.last_name}`}
            className="w-24 h-24 rounded-full shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold">
              {student.first_name} {student.last_name}
            </h1>
            <p className="text-lg">{student.gender}</p>
            <p>Classe ID : {student.class_id}</p>
            <p>École ID : {student.school_id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="flex items-center gap-2">
            <PenLineIcon size={14} />
            Modifier informations
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informations Personnelles */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center font-bold mb-4 text-indigo-500">
            <User2 className="mr-2" />
            Informations Personnelles
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Date de Naissance :</strong>{" "}
              {format(student.dob, "yyyy-MM-dd")}
            </li>
            <li>
              <strong>Lieu de Naissance :</strong> {student.pob}
            </li>
            <li>
              <strong>Adresse :</strong> {student.address}
            </li>
            <li>
              <strong>Téléphone :</strong> {student.phone}
            </li>
            <li>
              <strong>Email :</strong> {student.email}
            </li>
          </ul>
        </Card>

        {/* Informations Tuteur */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center font-bold mb-4 text-indigo-500">
            <IdCardIcon className="mr-2" />
            Tuteur
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Nom :</strong> {student.guardian_name}
            </li>
            <li>
              <strong>Téléphone :</strong> {student.guardian_phone}
            </li>
          </ul>
          <Button
            className="mt-4 bg-indigo-500 text-white"
            onClick={toggleTutorForm}
          >
            Modifier le Tuteur
          </Button>
        </Card>

        {/* Progression Académique */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500">
            Progression Académique
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Moyenne Générale :</strong> 14.5/20
            </li>
            <li>
              <strong>Statut :</strong> Promotion en cours
            </li>
            <li>
              <strong>Matières suivies :</strong> Mathématiques, Physique,
              Histoire
            </li>
            <li>
              <strong>Dernier Résultat :</strong> 16/20 en Mathématiques
            </li>
          </ul>
        </Card>

        {/* Historique des Présences */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500">
            Historique des Présences
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Nombre total d'absences :</strong> 3
            </li>
            <li>
              <strong>Nombre total de retards :</strong> 1
            </li>
            <li>
              <strong>Date de dernière absence :</strong> 10 septembre 2024
            </li>
          </ul>
        </Card>

        {/* Informations Financières */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500">
            Informations Financières
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Solde à payer :</strong> 500€
            </li>
            <li>
              <strong>Dernier paiement :</strong> 300€ le 1er septembre 2024
            </li>
            <li>
              <strong>Mode de paiement :</strong> Carte bancaire
            </li>
          </ul>
          <Button className="mt-4 bg-indigo-500 text-white">
            Ajouter un Paiement
          </Button>
        </Card>

        {/* Documents */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500 flex items-center gap-2">
            {" "}
            <PrinterIcon size={18} /> Documents
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/path-to-certificat" className="text-blue-600">
                Certificat de Scolarité
              </a>
            </li>
            <li>
              <a href="/path-to-bulletin" className="text-blue-600">
                Bulletin de Notes
              </a>
            </li>
            <li>
              <a href="/path-to-student-card" className="text-blue-600">
                Carte Étudiante
              </a>
            </li>
          </ul>
        </Card>

        {/* Calendrier */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500">Calendrier</h2>
          <ul className="space-y-2">
            <li>
              <strong>Prochain examen :</strong> 25 septembre 2024 -
              Mathématiques
            </li>
            <li>
              <strong>Réunion parents-professeurs :</strong> 5 octobre 2024
            </li>
          </ul>
        </Card>

        {/* Historique des Activités */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="font-bold mb-4 text-indigo-500">
            Historique des Activités
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Modification des informations du tuteur</strong> le 12
              septembre 2024
            </li>
            <li>
              <strong>Ajout d'une absence</strong> le 10 septembre 2024
            </li>
          </ul>
        </Card>
      </div>

      {/* Modal pour la modification du tuteur */}
      <Modal
        isOpen={isTutorFormOpen}
        onClose={toggleTutorForm}
        title="Modifier le Tuteur"
        content={
          <TutorForm
            initialData={{
              name: student.guardian_name,
              phone: student.guardian_phone,
            }}
            onSubmit={(data) => handleSubmit(data)}
          />
        }
        footer={
          <p className="text-xs text-gray-400">
            Assurez-vous de remplir tous les champs.
          </p>
        }
      />
    </div>
  );
};

export default StudentDetailPage;
