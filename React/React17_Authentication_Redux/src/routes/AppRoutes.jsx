import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import { useEffect } from "react";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const hydrateUser = () => {
    let loginUser = JSON.parse(localStorage.getItem("loginUser"));

    if (!loginUser) {
      {
        toast.error("Unauthorized, Please login");
      }
      return <Navigate to={"/auth/login"} />;
    }

    dispatch(addUser(loginUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <MainProtected />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
