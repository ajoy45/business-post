import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BusinessList from "../pages/BusinessList";
import Sell from "../pages/Sell";
import BrokersDirector from "../pages/BrokersDirector";
import BusinessSells from "../pages/BusinessSells";
import BusinessWanted from "../pages/BusinessWanted";
import FranchisorsDirectory from "../pages/FranchisorsDirectory";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'businessList',
          element: <BusinessList></BusinessList>
        },
        {
          path: 'sell',
          element: <Sell></Sell>
        },
        {
          path: 'brokersDirector',
          element: <BrokersDirector></BrokersDirector>
        },
        {
          path: 'businessSells',
          element: <BusinessSells></BusinessSells>
        },
        {
          path: 'businessWanted',
          element: <BusinessWanted></BusinessWanted>
        },
        {
          path: 'FranchisorsDirectory',
          element: <FranchisorsDirectory></FranchisorsDirectory>
        }
    ]
    },
  ]);  