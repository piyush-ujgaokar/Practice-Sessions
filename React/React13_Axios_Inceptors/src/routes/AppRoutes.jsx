import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
