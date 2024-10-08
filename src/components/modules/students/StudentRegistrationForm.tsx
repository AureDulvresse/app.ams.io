import React, { useState } from "react";
import TutorForm from "@/components/forms/TutorForm";
import PersonalInfoForm from "../../forms/PersonalInfoForm";
import AcademicInfoForm from "../../forms/AcademicInfoForm";

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
      console.log("Données soumises :", formData);
      alert("Étudiant inscrit avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <div className="p-6 bg-white  dark:bg-gray-900 shadow-lg rounded-lg mt-4">
      {step === 1 && (
        <PersonalInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <TutorForm
          title="Etape 2 : Information tuteur"
          initialData={{
            name: formData.guardianName,
            phone: formData.guardianPhone,
          }}
          onSubmit={(data) => {
            setFormData({
              ...formData,
              guardianName: data.name,
              guardianPhone: data.phone,
            });
            nextStep();
          }}
          nextStep={nextStep} // Ajouter le nextStep ici
          prevStep={prevStep} // Ajouter le prevStep ici
          showNavigation={true} // Afficher les boutons de navigation
        />
      )}
      {step === 3 && (
        <AcademicInfoForm
          initialData={{
            schoolName: formData.schoolId ? "Nom de l'école" : "",
            classId: formData.classId,
          }}
          onSubmit={handleSubmit}
          isSubmitting={false}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default StudentRegistrationForm;
