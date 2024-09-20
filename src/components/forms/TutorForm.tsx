import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface TutorFormProps {
  initialData?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
  isSubmitting?: boolean; // Pour indiquer si l'enregistrement est en cours
}

const TutorForm: React.FC<TutorFormProps> = ({
  initialData = { name: "", phone: "", email: "" },
  onSubmit,
  isSubmitting = false,
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    phone: initialData.phone || "",
    email: initialData.email || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.email) {
      onSubmit(formData);
    } else {
      console.log("Form validation failed: Please fill in all fields.");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        Tuteur Étudiant
      </h2>
      <Input
        name="name"
        className="w-full"
        placeholder="Nom complet du tuteur"
        value={formData.name}
        onChange={handleChange}
        required
        aria-label="Nom complet du tuteur"
      />
      <Input
        type="tel"
        name="phone"
        className="w-full"
        placeholder="Numéro de téléphone du tuteur"
        value={formData.phone}
        onChange={handleChange}
        required
        aria-label="Numéro de téléphone du tuteur"
      />
      <Input
        type="email"
        name="email"
        className="w-full"
        placeholder="Adresse e-mail du tuteur"
        value={formData.email}
        onChange={handleChange}
        required
        aria-label="Adresse e-mail du tuteur"
      />
      <div className="text-right mt-3">
        <Button
          type="button"
          onClick={handleSubmit}
          className="w-48 bg-gradient-to-tr from-indigo-400 to-indigo-500 px-3 py-2 rounded-md shadow-sm text-white dark:text-gray-950 font-semibold hover:scale-105 transition-transform"
          disabled={isSubmitting} // Désactiver le bouton pendant la soumission
        >
          {isSubmitting ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </div>
    </div>
  );
};

export default TutorForm;
