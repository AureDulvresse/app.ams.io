import React from "react";
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
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-inter text-indigo-500">
        Étape 1 : Informations Personnelles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <SelectField
            label="Sexe"
            placeholder="Sélectionner le sexe"
            options={genders}
            onChange={handleGenderChange}
          />
        </div>
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 border hover:dark:bg-gray-800 w-full"
            >
              <CalendarIcon />
              Date de Naissance
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white dark:bg-gray-800"
            align="end"
          >
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                className="rounded-md p-1.5"
                classNames={{
                  day_selected: "bg-indigo-500 text-white",
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

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
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="bg-indigo-500 text-white" onClick={nextStep}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
