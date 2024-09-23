import axios from "axios";

// Créer une instance Axios
const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Ajouter un intercepteur pour ajouter le token aux en-têtes
api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
