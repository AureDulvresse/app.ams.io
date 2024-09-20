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

interface SelectFieldProps {
  label: string;
  placeholder: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
  error?: string; // Simplifié en string pour afficher un message d'erreur clair
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  options,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full border-gray-300 dark:border-gray-700">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-gray-500">{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default SelectField;
