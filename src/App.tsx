import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@/hooks/theme-provider";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/students/StudentPage";
import StaffPage from "./pages/modules/hr/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentDetailPage from "./pages/modules/students/StudentDetailsPage";
import StudentRegisterPage from "./pages/modules/students/StudentRegisterPage";
import { Toaster } from "./components/ui/toaster";
import StaffRegisterPage from "./pages/modules/hr/StaffRegisterPage";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import Login from "./pages/auth/Login";

// Composant pour protéger les routes privées
const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<DashboardPage />} />,
  },
  {
    path: "/students",
    element: <PrivateRoute element={<StudentPage />} />,
  },
  {
    path: "/students/:id",
    element: <PrivateRoute element={<StudentDetailPage />} />,
  },
  {
    path: "/students/create",
    element: <PrivateRoute element={<StudentRegisterPage />} />,
  },
  {
    path: "/hr",
    element: <PrivateRoute element={<StaffPage />} />,
  },
  {
    path: "/staff/create",
    element: <PrivateRoute element={<StaffRegisterPage />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
