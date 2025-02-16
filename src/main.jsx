import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./components/Root/Root";
import { ToastContainer } from 'react-toastify';
import Coffees from "./pages/Coffees";
import CoffeeDetails from "./pages/CoffeeDetails";
import Dashboard from "./pages/Dashboard";
import CoffeeCards from "./components/CoffeeCards/CoffeeCards";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/categories.json'),
        children: [
          {
            path: '/category/:category',
            element: <CoffeeCards/>,
            loader: () => fetch('../public/coffees.json'),
          }
        ]
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
       
      }, 

      {
        path: '/coffeesdetails',
        element: <CoffeeDetails></CoffeeDetails>
      }, 

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
     
     

     

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
   
    />
  </React.StrictMode>
);