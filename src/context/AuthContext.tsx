import api from "@/lib/api";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

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
    console.log("Traitement connexion...");
    try {
      // Remplacez l'URL par celle de votre endpoint d'authentification
      const response = await api.post("/login/", {
        email,
        password,
      });

      setToken(response.data.token); // Supposons que l'API retourne un token

      // Stocker le token selon le choix de l'utilisateur
      if (rememberMe) {
        localStorage.setItem("token", token ?? "");
      } else {
        sessionStorage.setItem("token", token ?? "");
      }

      setIsAuthenticated(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Gérer les erreurs d'authentification
      console.log("Traitement Terminé");
      console.log(error.message);
      throw new Error("Email ou mot de passe incorrect");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
