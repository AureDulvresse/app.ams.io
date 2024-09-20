import React, { useState } from "react";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import TutorForm from "@/components/forms/TutorForm";
import AcademicInfoForm from "@/components/forms/AcademicInfoForm";
import { Button } from "@/components/ui/button";

// Interface des données du formulaire
interface StudentData {
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  address: string;
  phone: string;
  email: string;
  gender: string;
  guardianName: string;
  guardianPhone: string;
  classId: number;
  schoolId: number;
}

const StudentRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1); // Étape actuelle
  const [formData, setFormData] = useState<StudentData>({
    firstName: "",
    lastName: "",
    dob: "",
    pob: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
    guardianName: "",
    guardianPhone: "",
    classId: 0,
    schoolId: 0,
  });

  // Fonction pour gérer les modifications de formulaire
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    setStep(step + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setStep(step - 1);
  };

  // Fonction pour soumettre le formulaire final
  const handleSubmit = async () => {
    try {
      // Appel à une API ou logique d'enregistrement ici
      console.log("Données soumises :", formData);
      alert("Étudiant inscrit avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {step === 1 && (
        <PersonalInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <TutorForm
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <AcademicInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default StudentRegistrationForm;
