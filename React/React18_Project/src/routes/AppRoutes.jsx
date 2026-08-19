import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/Loginpage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../layouts/MainLayout";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";
import { useEffect } from "react";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";

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
