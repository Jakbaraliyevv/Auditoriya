import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/loginPage/register";
import Layout from "../components/outlet";
import Login from "../pages/loginPage/login";
import Korzina from "../pages/korzina";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />, // Home sahifasi
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "korzina",
        element: <Korzina />,
      },
    ],
  },
]);
