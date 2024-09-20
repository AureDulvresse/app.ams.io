import React from "react";
import { Button } from "../ui/button";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  nextStep: () => void;
}

const genders = [
  { label: "Masculin", value: "M" },
  { label: "Féminin", value: "F" },
];

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  handleInputChange,
  nextStep,
}) => {
  const handleGenderChange = (value: string) => {
    handleInputChange({
      target: { name: "gender", value }, // Directement utiliser la valeur
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-inter text-indigo-500">
        Étape 1 : Informations Personnelles
      </h2>
      <div className="space-y-4">
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Prénom"
          required
        />
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Nom"
          required
        />
        <Input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="pob"
          value={formData.pob}
          onChange={handleInputChange}
          placeholder="Lieu de Naissance"
          required
        />
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Adresse"
          required
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Téléphone"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <SelectField
          label="Sexe"
          placeholder="Sélectionner le sexe"
          options={genders}
          onChange={handleGenderChange} // Passer directement la fonction
        />
      </div>
      <Button className="mt-4 bg-indigo-500 text-white" onClick={nextStep}>
        Suivant
      </Button>
    </div>
  );
};

export default PersonalInfoForm;
