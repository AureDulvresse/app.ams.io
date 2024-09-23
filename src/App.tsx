import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/students/StudentPage";
import StaffPage from "./pages/modules/hr/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/auth/Login";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "@/hooks/theme-provider"; // Si tu utilises un ThemeProvider
import PrivateRoute from "./routes/PrivateRoute";

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
    path: "/hr",
    element: (
      <PrivateRoute>
        <StaffPage />
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
