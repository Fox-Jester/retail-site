


import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

interface Route {
    path: string;
    element: React.ReactElement;
    children?: {}[];
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
    },
    {
        path: "/login",
        element: <Login/>
    }
    // {
    //     path: "profile",
    //     element: <Profile/>
    // }

];

export default routes;