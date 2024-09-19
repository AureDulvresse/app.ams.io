import { Card } from "@/components/ui/card";
import { Student } from "@/types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  File,
  IdCardIcon,
  Mail,
  PenLineIcon,
  PrinterIcon,
  User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Modal from "@/components/common/Modal";
import TutorForm from "@/components/forms/TutorForm";

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
  const [student, setStudent] = useState<Student>();
  const [loading, setLoading] = useState(true);
  const [isTutorFormOpen, setIsTutorFormOpen] = useState(false);
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

  const handlePrintPDF = (): void => {
    throw new Error("Function not implemented.");
  };

  const handlePrintStudentCard = (): void => {
    throw new Error("Function not implemented.");
  };

  const openTutorForm = (): void => {
    setIsTutorFormOpen(!isTutorFormOpen);
  };

  const closeModal = (): void => {
    setIsTutorFormOpen(false);
  };

  return (
    <div className="mx-auto p-6 space-y-6">
      <Card className="flex items-start justify-between p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            src={student.picture}
            alt={`${student.first_name} ${student.last_name} Profile`}
            className="w-24 h-24 rounded-full shadow-md"
          />
          <div className="font-inter">
            <h1 className="text-2xl font-bold">
              {student.first_name} {student.last_name}
            </h1>
            <p className="text-lg">{student.gender}</p>
            <p>Classe ID : {student.class_id}</p>
            <p>École ID : {student.school_id}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant={"ghost"} className="flex items-center gap-2">
            <PenLineIcon size={14} />
            Modifier informations
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="flex items-center gap-2">
                <PrinterIcon size={14} />
                Imprimer
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="flex items-center gap-2"
                onClick={() => handlePrintStudentCard()}
              >
                <IdCardIcon size={16} />
                <span>Carte Etudiante</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2"
                onClick={() => handlePrintPDF()}
              >
                <File size={16} />
                <span>Format PDF</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center font-bold mb-4 text-indigo-500">
            <User2 className=" mr-2" /> Informations Personnelles
          </h2>
          <ul className="space-y-2">
            <li>
              <strong className="text-sm">Date de Naissance :</strong>{" "}
              {student.dob}
            </li>
            <li>
              <strong className="text-sm">Lieu de Naissance :</strong>{" "}
              {student.pob}
            </li>
            <li>
              <strong className="text-sm">Adresse :</strong> {student.address}
            </li>
          </ul>
        </Card>

        {/* Informations de Contact */}
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <h2 className="flex items-center font-bold mb-4 text-indigo-500">
            <Mail className="mr-2" /> Informations de Contact
          </h2>
          <ul className="space-y-2">
            <li>
              <strong className="text-sm">Téléphone :</strong> {student.phone}
            </li>
            <li>
              <strong className="text-sm">Email :</strong> {student.email}
            </li>
          </ul>
        </Card>

        {/* Informations du Tuteur */}
        <Card className="md:col-span-2 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <div className="flex justify-between">
            <h2 className="flex items-center font-bold mb-4 text-indigo-600">
              <User2 className="mr-2" /> Informations du Tuteur
            </h2>
            <Button
              variant={"outline"}
              className="flex items-center gap-2"
              onClick={() => openTutorForm()}
            >
              <PenLineIcon size={14} />
              Actualiser
            </Button>
          </div>

          <ul className="space-y-2">
            <li>
              <strong className="text-sm">Nom du Tuteur :</strong>{" "}
              {student.guardian_name}
            </li>
            <li>
              <strong className="text-sm">Téléphone du Tuteur :</strong>{" "}
              {student.guardian_phone}
            </li>
          </ul>
        </Card>

        {/* Overlay */}
        {isTutorFormOpen && (
          <div
            className="fixed inset-0 bg-transparent z-40"
            onClick={closeModal}
          ></div>
        )}

        {/* Modal Formulaire tuteur */}
        {isTutorFormOpen && (
          <Modal
            isOpen={!!isTutorFormOpen}
            onClose={() => setIsTutorFormOpen(false)}
            title="Modification"
            description="Modifier les informations du tuteur."
            content={<TutorForm />}
            footer={
              <p className="text-[11px] text-gray-400">
                Veuillez à bien remplir le formulaire
              </p>
            }
          />
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;
