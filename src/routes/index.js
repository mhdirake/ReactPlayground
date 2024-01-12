
import React from "react";
import Layout from "../layout";
import Home from "../pages/Home";
import NeumorphismForm from "../pages/Neumorphism-form";
import GlassmorphismClock from "../pages/Glassmorphism-clock";


const routes = () => {
  return [
    {
      element: <Layout />,
      order: 0,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/neumorphism-form", element: <NeumorphismForm /> },
        { path: "/glassmorphism-form", element: <GlassmorphismClock /> },
      ],
    },
  ];
};

export default routes;
