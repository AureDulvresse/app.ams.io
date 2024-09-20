import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import SelectField from "../common/SelectField";

interface AcademicInfoFormProps {
  initialData?: {
    schoolName?: string;
    classId?: number; // ID de la classe sélectionnée
    year?: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (data: {
    schoolName: string;
    classId: number;
    year?: string;
  }) => void;
  isSubmitting?: boolean; // Pour indiquer si l'enregistrement est en cours
}

const classOptions = [
  { label: "CM2", value: "6" },
  { label: "CM1", value: "5" },
  { label: "CE2", value: "4" },
  { label: "CE1", value: "3" },
  { label: "CP2", value: "2" },
  { label: "CP1", value: "1" },
];

const AcademicInfoForm: React.FC<AcademicInfoFormProps> = ({
  initialData = { schoolName: "", classId: 0, year: "" },
  onSubmit,
  isSubmitting = false,
  handleInputChange,
}) => {
  const [formData, setFormData] = useState({
    schoolName: initialData.schoolName || "",
    classId: initialData.classId || 0,
    year: initialData.year || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClassChange = (value: number) => {
    setFormData((prevData) => ({ ...prevData, classId: value }));
    handleInputChange({
      target: { name: "classId", value: String(value) }, // Convertir en string
    } as unknown as React.ChangeEvent<HTMLInputElement>); // Utiliser unknown pour contourner l'erreur de typage
  };

  const handleSubmit = () => {
    if (formData.schoolName && formData.classId) {
      onSubmit(formData);
    } else {
      console.log(
        "Form validation failed: Please fill in the required fields."
      );
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Étape 3 : Informations academique
      </h2>
      <div className="flex flex-col gap-4">
        <Input
          name="schoolName"
          className="w-full"
          placeholder="Nom de l'établissement"
          value={formData.schoolName}
          onChange={handleChange}
          required
          aria-label="Nom de l'établissement"
        />

        <SelectField
          label="Sélectionner la classe"
          placeholder="Choisissez une classe"
          options={classOptions}
          onChange={() => handleClassChange}
        />

        <Input
          name="year"
          className="w-full"
          placeholder="Année académique (facultatif)"
          value={formData.year}
          onChange={handleChange}
          aria-label="Année académique"
        />

        <div className="text-right mt-3">
          <Button
            type="button"
            onClick={handleSubmit}
            className="w-48 bg-gradient-to-tr from-indigo-400 to-indigo-500 px-3 py-2 rounded-md shadow-sm text-white dark:text-gray-950 font-semibold hover:scale-105 transition-transform"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enregistrement..." : "Enregistrer"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfoForm;
