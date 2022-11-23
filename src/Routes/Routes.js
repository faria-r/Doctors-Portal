import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layOuts/DashboardLayOut/DashboardLayout";
import Main from "../layOuts/Main";
import Appoinment from "../Pages/Appointment/Appoinment/Appoinment";
import Dashboard from "../Pages/Dashboard/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./Privateroute/PrivateRoutes";
import Myappointment from "../Pages/Dashboard/MyAppointment/Myappointment";
import Alluser from "../Pages/Dashboard/DashBoard/AllUsers/Alluser";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
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
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            //  {
            //     path:'/dashboard',
            //    element:<Dashboard></Dashboard>
            // },
            {
                path:'/dashboard',
               element:<Myappointment></Myappointment>
            },
            {
                path:'/dashboard/allusers',
               element:<AdminRoute><Alluser></Alluser></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
               element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
               element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
               element:<AdminRoute><Payment></Payment></AdminRoute>,
               loader:({params}) => fetch(`https://y-faria-r.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])