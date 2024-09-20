import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Définition des props pour rendre le composant flexible
interface SelectFieldProps {
  label: string; // Label du groupe
  placeholder: string; // Placeholder dans le SelectTrigger
  options: Array<{ label: string; value: string }>; // Options disponibles dans le Select
  onChange?: (value: string) => void; // Optionnel : Fonction pour capturer la sélection
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  options,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
