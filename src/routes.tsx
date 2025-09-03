


import React from "react";
import App from "./App";
import Home from "./pages/Home";

interface Route {
    path: string;
    element: React.ReactElement;
    children: {}[];
}

const routes: Route[] = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            }
        ]
    }
];

export default routes;