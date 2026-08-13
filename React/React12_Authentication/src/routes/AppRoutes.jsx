import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/AuthPages/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../pages/AuthPages/RegisterPage";
import MainLayout from "../layouts/MainLayout";

import ProtectedRoutes from "./ProtectedRoutes";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
