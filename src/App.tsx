import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/hooks/theme-provider";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/students/StudentPage";
import StaffPage from "./pages/modules/hr/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentDetailPage from "./pages/modules/students/StudentDetailsPage";

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
    path: "/hr",
    element: <StaffPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
