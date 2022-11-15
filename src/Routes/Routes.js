import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import Appoinment from "../Pages/Appointment/Appoinment/Appoinment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
                path:'/appointment',
                element:<Appoinment></Appoinment>
            },
        ]
    }
])