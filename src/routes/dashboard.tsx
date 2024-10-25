
import { Outlet } from 'react-router-dom';
import About from '../pages/About';
import Appointment from '../pages/Appointment';
import Contact from '../pages/Contact';
// import DashboardLayout from '../pages/DashboardLayout';
import Doctors from '../pages/Doctors';
import Home from '../pages/Home/Home';
import MyAppointments from '../pages/MyAppointments';
import MyProfile from '../pages/MyProfile';
import Layout from '../pages/Layout/Layout';

export const dashboardRoutes = [
    {
        path: '',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            { element: <Home />, index: true },
            {
                path: 'doctors',
                children: [
                    { element: <Doctors />, index: true },
                    { path: ':speciality', element: <Doctors /> }
                ]
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'my-profile',
                element: <MyProfile />
            },
            {
                path: 'my-appointments',
                element: <MyAppointments />
            },
            {
                path: 'appointment',
                element: <Appointment />
            },
        ]
    }
]