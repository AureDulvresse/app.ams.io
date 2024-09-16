import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/hooks/theme-provider";
import DashboardPage from "./pages/DashboardPage";
import StudentPage from "./pages/modules/StudentPage";
import StaffPage from "./pages/modules/StaffPage";

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
