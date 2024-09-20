import React, { useState } from "react";
import { Input } from "../ui/input";

interface PhotoUploadProps {
  label?: string;
  onUpload: (file: File) => void;
  error?: string;
}

const PictureUpload: React.FC<PhotoUploadProps> = ({
  label,
  onUpload,
  error,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      onUpload(file); // Appel du callback pour transmettre le fichier uploadé
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label || "Télécharger une photo"}
      </label>
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-600 hover:file:bg-indigo-200 dark:file:bg-gray-700 dark:file:text-gray-300 dark:hover:file:bg-gray-600"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Prévisualisation"
            className="w-32 h-32 object-cover rounded-md border"
          />
        </div>
      )}
    </div>
  );
};

export default PictureUpload;
