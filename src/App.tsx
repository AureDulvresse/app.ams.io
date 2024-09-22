import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthProvider"; // Assurez-vous que AuthProvider est configuré
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/students/StudentPage";
import StaffPage from "./pages/modules/hr/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentDetailPage from "./pages/modules/students/StudentDetailsPage";
import StudentRegisterPage from "./pages/modules/students/StudentRegisterPage";
import StaffRegisterPage from "./pages/modules/hr/StaffRegisterPage";
import Login from "./pages/auth/Login";
import { ThemeProvider } from "@/hooks/theme-provider";
import { Toaster } from "./components/ui/toaster";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/students",
    element: (
      <PrivateRoute>
        <StudentPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/students/:id",
    element: (
      <PrivateRoute>
        <StudentDetailPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/students/create",
    element: (
      <PrivateRoute>
        <StudentRegisterPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/hr",
    element: (
      <PrivateRoute>
        <StaffPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/staff/create",
    element: (
      <PrivateRoute>
        <StaffRegisterPage />
      </PrivateRoute>
    ),
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
