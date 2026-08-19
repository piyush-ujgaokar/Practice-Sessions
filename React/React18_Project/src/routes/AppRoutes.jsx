import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";
import { useEffect } from "react";
// import AuthLayout from "../layouts/AuthLayout";
// import LoginPage from "../pages/Loginpage";
// import RegisterPage from "../pages/RegisterPage";
// import HomePage from "../pages/HomePage";
// import PublicProtected from "./protected/PublicProtected";
// import MainProtected from "./protected/MainProtected";
// import MainLayout from "../layouts/MainLayout";
// import AboutPage from "../pages/AboutPage";
// import ShopPage from "../pages/ShopPage";

import { lazy } from "react";
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const LoginPage = lazy(() => import("../pages/Loginpage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const PublicProtected = lazy(() => import("./protected/PublicProtected"));
const MainProtected = lazy(() => import("./protected/MainProtected"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));

const AppRoutes = () => {

    const dispatch=useDispatch()

    const hydrateUser=()=>{
        const loginUser=JSON.parse(localStorage.getItem('loginUser'))

        if(!loginUser){
            toast.error("Unauthorized, Please login")
            return <Navigate to={'/auth/login'}/> 
        }

        dispatch(addUser(loginUser))

    }

    useEffect(()=>{
        hydrateUser()
    },[])


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
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
