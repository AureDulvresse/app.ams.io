import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import AdministrativeInfoForm from "./AdministrativeInfoForm";

// Interface des données du formulaire
interface StaffData {
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  address: string;
  phone: string;
  email: string;
  gender: string;
  department_id: number;
  daily_salary: number;
  hire_at: Date | string;
  schoolId: number;
}

const StaffRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1); // Étape actuelle
  const [formData, setFormData] = useState<StaffData>({
    firstName: "",
    lastName: "",
    dob: "",
    pob: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
    department_id: 1,
    daily_salary: 4000,
    hire_at: new Date("2022-09-17"),
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
      alert("Personel enregistré avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
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
        <AdministrativeInfoForm
          initialData={{
            schoolName: formData.schoolId ? "Nom de l'école" : "",
            department_id: formData.department_id,
          }}
          onSubmit={handleSubmit}
          isSubmitting={false}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default StaffRegistrationForm;
