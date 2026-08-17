import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthLayout from '../Layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/HomePage';



const AppRoutes = () => {

const router=createBrowserRouter([
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<RegisterPage/>
            }
        ]
    },
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<HomePage/>
            }
        ]
    }
])

  return <RouterProvider router={router}/>
}

export default AppRoutes;
