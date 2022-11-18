import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import Appoinment from "../Pages/Appointment/Appoinment/Appoinment";
import Dashboard from "../Pages/Dashboard/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./Privateroute/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/appointment',
                element:<Appoinment></Appoinment>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
])