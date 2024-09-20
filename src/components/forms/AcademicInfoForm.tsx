import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import SelectField from "../common/SelectField";
import { academicInfoSchema } from "@/schemas/academicInfoSchema";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

interface AcademicInfoFormProps {
  initialData?: {
    schoolName?: string;
    classId?: number;
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
  isSubmitting?: boolean;
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClassChange = (value: number) => {
    setFormData((prevData) => ({ ...prevData, classId: value }));
    handleInputChange({
      target: { name: "classId", value: String(value) },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSubmit = () => {
    // Validation des données avec Zod
    const result = academicInfoSchema.safeParse(formData);

    if (!result.success) {
      // Extraire les erreurs de validation de Zod et les afficher
      const validationErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          validationErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(validationErrors);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      // Réinitialiser les erreurs si la validation passe
      setErrors({});
      onSubmit(formData);

      toast({
        variant: "default",
        title: "Informations",
        description: "Informations enregistrées avec succès !",
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Étape 3 : Informations académiques
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            name="schoolName"
            className="w-full"
            placeholder="Nom de l'établissement"
            value={formData.schoolName}
            onChange={handleChange}
            required
            aria-label="Nom de l'établissement"
          />
          {errors.schoolName && (
            <p className="text-red-500 mt-1 text-sm">{errors.schoolName}</p>
          )}
        </div>

        <div>
          <SelectField
            label="Sélectionner la classe"
            placeholder="Choisissez une classe"
            options={classOptions}
            onChange={(value) => handleClassChange(Number(value))}
          />
          {errors.classId && (
            <p className="text-red-500 mt-1 text-sm">{errors.classId}</p>
          )}
        </div>

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
