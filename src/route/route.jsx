import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // ✅ FIXED
        children: [
            {
                path: "/",
                element: <Home />, // ✅ FIXED
            }
        ]
    }
]);
