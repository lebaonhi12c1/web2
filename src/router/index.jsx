import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/root";
import Home from "@/page/home";
import Product from "@/page/product";
import Login from "@/page/login";
import NotFound from "@/page/not-found";

export default createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "product/:id",
                element: <Product />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
      },
]);
