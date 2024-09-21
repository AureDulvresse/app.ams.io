import React, { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SelectField from "../common/SelectField";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { personalInfoSchema } from "@/schemas/personalInfoSchema";
import PictureUpload from "../common/PictureUpload";

interface PersonalInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    dob: string | Date;
    pob: string;
    address: string;
    phone: string;
    email: string;
    gender: string;
    photo?: File | null; // Ajout du champ photo optionnel
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handlePhotoUpload?: (file: File | null) => void; // Callback pour gérer la photo
  nextStep: () => void;
}

const genders = [
  { label: "Masculin", value: "M" },
  { label: "Féminin", value: "F" },
];

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  handleInputChange,
  handlePhotoUpload, // Callback pour le téléchargement de la photo
  nextStep,
}) => {
  const [date, setDate] = useState<Date | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleGenderChange = (value: string) => {
    handleInputChange({
      target: { name: "gender", value },
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

  const handleDateChange = (value: Date | undefined) => {
    if (value) {
      setDate(value);
      handleInputChange({
        target: { name: "dob", value: format(value, "yyyy-MM-dd") },
      } as unknown as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  const handleSubmit = () => {
    try {
      // Validation des données
      personalInfoSchema.parse(formData);
      setErrors({});
      nextStep();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        // Gestion des erreurs Zod
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-inter text-indigo-500">
        Étape 1 : Informations Personnelles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Prénom(s)
          </label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Entrer le/les prénom(s)"
            required
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Nom(s)
          </label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Entrer le/les nom(s)"
            required
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Date de naissance
          </label>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 border hover:dark:bg-gray-800 w-full"
              >
                <CalendarIcon />
                {date ? format(date, "dd/MM/yyyy") : "Selectionner la date de naissance"}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="bg-white dark:bg-gray-800"
              align="end"
            >
              <Calendar
                mode="single"
                selected={date ?? new Date()}
                onSelect={handleDateChange}
                fromYear={1900}
                toYear={new Date().getFullYear()}
                className="rounded-md p-1.5"
                classNames={{
                  day_selected: "bg-indigo-500 border-indigo-500 text-white", // Classe pour la date sélectionnée
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </DropdownMenuContent>
          </DropdownMenu>

          {errors.dob && <p className="text-red-500">{errors.dob}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Lieu de naissance
          </label>
          <Input
            type="text"
            name="pob"
            value={formData.pob}
            onChange={handleInputChange}
            placeholder="Entrer le lieu de naissance"
            required
          />
          {errors.pob && <p className="text-red-500">{errors.pob}</p>}
        </div>

        <div>
          <SelectField
            label="Sexe"
            placeholder="Sélectionner le sexe"
            options={genders}
            onChange={handleGenderChange}
            error={errors.gender}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Adresse
          </label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Entrer l'adresse de l'etudiant"
            required
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Numéro de téléphone
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Téléphone"
            required
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Adresse electronique
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <PictureUpload
            onUpload={() => handlePhotoUpload} // Permet le téléchargement de la photo
          />
          {formData.photo ? null : (
            <p className="text-sm text-gray-500">
              Télécharger une photo (optionnel)
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button className="bg-indigo-500 text-white" onClick={handleSubmit}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
