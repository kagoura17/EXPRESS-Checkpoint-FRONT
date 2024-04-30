import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OurServices from "./Pages/OurServices/OurServices";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/services",
    element: <OurServices></OurServices>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
