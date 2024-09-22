import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/hooks/theme-provider";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/students/StudentPage";
import StaffPage from "./pages/modules/hr/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentDetailPage from "./pages/modules/students/StudentDetailsPage";
import StudentRegisterPage from "./pages/modules/students/StudentRegisterPage";
import { Toaster } from "./components/ui/toaster";
import StaffRegisterPage from "./pages/modules/hr/StaffRegisterPage";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/students",
    element: <StudentPage />,
  },
  {
    path: "/students/:id",
    element: <StudentDetailPage />,
  },
  {
    path: "/students/create",
    element: <StudentRegisterPage />,
  },
  {
    path: "/hr",
    element: <StaffPage />,
  },
  {
    path: "/staff/create",
    element: <StaffRegisterPage />,
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
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
