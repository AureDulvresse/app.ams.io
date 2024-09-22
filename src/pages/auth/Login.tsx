// Login.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Logique de connexion (appel API pour vérifier les identifiants)
    const isAuthenticated = true; // Simuler une authentification réussie
    if (isAuthenticated) {
      navigate("/dashboard"); // Redirection vers le tableau de bord ou la page principale
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Connexion</h1>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Entrer votre email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Mot de passe</label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Entrer votre mot de passe"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button
          className="bg-indigo-500 text-white w-full"
          onClick={handleSubmit}
        >
          Se connecter
        </Button>
        <p className="mt-4 text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <span
            className="text-indigo-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Créer un compte
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
