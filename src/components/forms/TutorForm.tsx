import React from "react";
import { StudentTutor } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "react-day-picker";

const TutorForm: React.FC<StudentTutor> = ({
  name = "",
  phone = "",
  email = "",
}) => {
    
  const handleSubmit = () => {
    console.log("Save");
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        name="name"
        className="w-full"
        placeholder="Entrer le nom complet du tuteur"
        value={name ?? null}
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Entrer le numéro de téléphone du tuteur"
        value={phone ?? null}
      />
      <Input
        name="email"
        placeholder="Entrer l'addresse mail du tuteur"
        value={email ?? null}
      />
      <Button type="button" onClick={handleSubmit} className="bg-indigo-500">
        Enregistrer
      </Button>
    </div>
  );
};

export default TutorForm;
