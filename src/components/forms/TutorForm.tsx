import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { title } from "process";

interface TutorFormProps {
  title?: string;
  initialData?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  onSubmit: (data: { name: string; phone: string; email?: string }) => void;
  isSubmitting?: boolean;
  nextStep?: () => void; 
  prevStep?: () => void;
  showNavigation?: boolean;
}

const TutorForm: React.FC<TutorFormProps> = ({
  initialData = { name: "", phone: "", email: "" },
  onSubmit,
  isSubmitting = false,
  nextStep,
  prevStep,
  showNavigation = false, // Valeur par défaut
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
    if (formData.name && formData.phone) {
      onSubmit(formData);
      if (isSubmitting && nextStep) {
        nextStep(); // Passer à l'étape suivante si isSubmitting est true
      }
    } else {
      console.log(
        "Form validation failed: Please fill in the required fields."
      );
    }
  };

  return (
    <div>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="flex flex-col gap-4">
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
          placeholder="Adresse e-mail du tuteur (facultatif)"
          value={formData.email}
          onChange={handleChange}
          aria-label="Adresse e-mail du tuteur"
        />

        {showNavigation ? (
          <div className="flex justify-between mt-3">
            {prevStep && (
              <Button
                type="button"
                onClick={prevStep}
                className="w-48 bg-gray-400 text-white"
              >
                Précédent
              </Button>
            )}
            <Button
              type="button"
              onClick={handleSubmit}
              className="w-48 bg-gradient-to-tr from-indigo-400 to-indigo-500 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enregistrement..." : "Suivant"}
            </Button>
          </div>
        ) : (
          <div className="text-right mt-3">
            <Button
              type="button"
              onClick={handleSubmit}
              className="w-48 bg-gradient-to-tr from-indigo-400 to-indigo-500 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enregistrement..." : "Enregistrer"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorForm;
