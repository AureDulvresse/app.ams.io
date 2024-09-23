import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  logout: () => void;
  token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // Vérifier le token au chargement initial
  useEffect(() => {
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      // Remplacez l'URL par celle de votre endpoint d'authentification
      const response = await axios.post("https://votre-api.com/login", {
        email,
        password,
      });

      const receivedToken = response.data.token; // Supposons que l'API retourne un token

      // Stocker le token selon le choix de l'utilisateur
      if (rememberMe) {
        localStorage.setItem("token", receivedToken);
      } else {
        sessionStorage.setItem("token", receivedToken);
      }

      setToken(receivedToken);
      setIsAuthenticated(true);
      navigate("/"); // Rediriger vers la page d'accueil
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Gérer les erreurs d'authentification
      throw new Error(`Email ou mot de passe incorrect ${error.message}`);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/login"); // Rediriger vers la page de connexion
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur de AuthProvider");
  }
  return context;
};
