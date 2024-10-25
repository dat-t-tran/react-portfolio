import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./dashboard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export default function Router() {
    return useRoutes([
        ...dashboardRoutes,
        { path: 'login', element: <Login /> },
        { element: <Outlet />, children: [{ path: "404", element: <NotFound /> }] },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}