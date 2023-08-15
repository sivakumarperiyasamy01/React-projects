import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body.js";

import Header from "./components/Header.js";

import About from "./components/about.js";

import Contact from "./components/contact Us.js";

import Error from "./components/error.js";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";




const Applayout=()=>{
  return(
    <div id="applayout">
      <Header/>
      <Outlet/>
      </div>
  );
  
};


const approute=createBrowserRouter([
    {  
      path:"/",
      element:<Applayout/>,
      childern:[

        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
      ],
      errorElement:<Error/>,
  },
]);



    // props is endof the day  js object we are writing js object in {}


const root =ReactDOM.createRoot(document.getElementById("root"))
 
root.render(<RouterProvider router={approute}/>)






