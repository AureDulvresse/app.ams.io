import axios from "axios";

// Créer une instance Axios
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Remplace par l'URL de ton backend
});

// Intercepteur pour ajouter le token aux en-têtes des requêtes
api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token && config.headers) {
      // S'assurer que les en-têtes existent avant d'ajouter le token
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Gestion des erreurs lors de l'ajout du token
    return Promise.reject(error);
  }
);

export default api;
