import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import SelectField from "../common/SelectField";

interface PersonalInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    dob: string;
    pob: string;
    address: string;
    phone: string;
    email: string;
    gender: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string
  ) => void;
  nextStep: () => void;
}

const genders = [
  { label: "Masculin", value: "M" },
  { label: "Feminin", value: "F" },
];

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  handleInputChange,
  nextStep,
}) => {
  // Fonction pour gérer le changement dans le SelectField (sexe)
  const handleGenderChange = (value: string) => {
    handleInputChange({
      target: { name: "gender", value }, // Simule un event de changement
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Étape 1 : Informations Personnelles
      </h2>
      <div className="space-y-4">
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Prénom"
          className="Input"
        />
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Nom"
        />
        <Input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="pob"
          value={formData.pob}
          onChange={handleInputChange}
          placeholder="Lieu de Naissance"
        />
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Adresse"
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Téléphone"
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <SelectField
          label="Sexe"
          placeholder="Sélectionner le sexe"
          options={genders}
          onChange={handleGenderChange} // Utilise la nouvelle fonction pour changer le sexe
        />
      </div>
      <Button className="mt-4 bg-indigo-500 text-white" onClick={nextStep}>
        Suivant
      </Button>
    </div>
  );
};

export default PersonalInfoForm;
