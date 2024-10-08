import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // État pour le chargement
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  // Si l'utilisateur est déjà connecté, rediriger automatiquement
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/"); // Redirection vers la page d'accueil ou tableau de bord
    }
  }, [isAuthenticated, navigate]);

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Soumission du formulaire");
    setLoading(true); // Démarrer le chargement
    setError(null); // Réinitialiser l'erreur

    try {
      await login(formData.email, formData.password, rememberMe);
      // Redirection après le succès de l'authentification
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Échec de la connexion. Veuillez vérifier vos identifiants."
      );
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Connexion</h1>
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
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
          className={`bg-indigo-500 text-white w-full hover:bg-indigo-400 focus:bg-indigo-500 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Se connecter"} {/* Texte dynamique */}
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
      </form>
    </div>
  );
};

export default Login;
