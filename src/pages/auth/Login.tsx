import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Gestion des champs de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion du "se souvenir de moi"
  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = () => {
    // Logique de connexion (simuler un appel API pour vérifier les identifiants)
    login();

    if (isAuthenticated) {
      // Si "se souvenir de moi" est activé, on stocke dans localStorage
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(formData)); // Stocke l'utilisateur
      } else {
        sessionStorage.setItem("user", JSON.stringify(formData)); // Stocke uniquement pour la session
      }
      alert("Bienvenue");
      navigate("/"); // Redirection vers le tableau de bord ou la page principale
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
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Se souvenir de moi
          </label>
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
