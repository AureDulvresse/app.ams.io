import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/hooks/theme-provider";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/StudentPage";
import StaffPage from "./pages/modules/StaffPage";
import NotFoundPage from "./pages/NotFoundPage";

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
