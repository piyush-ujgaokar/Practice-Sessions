
import {createBrowserRouter, RouterProvider} from 'react-router'
import LoginPage from '../pages/AuthPages/LoginPage';
import AuthLayout from '../layouts/AuthLayout';
import RegisterPage from '../pages/AuthPages/RegisterPage';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
const AppRoutes = () => {

let router=createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:'',
                element:<LoginPage/>
            },
            {
                path:'register',
                element:<RegisterPage/>
            }
        ]
    },
    {
        path:"/home",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            }
        ]
    }
])


  return <RouterProvider router={router}/>
}

export default AppRoutes;
