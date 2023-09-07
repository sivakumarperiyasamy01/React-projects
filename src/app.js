import React, {useEffect } from "react";

import { useState } from "react";

import { lazy,Suspense } from "react";

import ReactDOM from "react-dom/client";

import Body from "./components/Body.js";

import Header from "./components/Header.js";

import About from "./components/about.js";

import Contact from "./components/contact.js";

import Error from "./components/error.js";

import Resmenu from "./components/resmenu.js";

import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";

import Usercontext from "./components/utils/usercontext.js";
import Appstore from "./components/utils/appstore.js";
import { Provider } from "react-redux";

// import Usercontext from "./components/utils/usercontext.js"


// chunking 
// lazy loading 
// ondemand loading 
// dynamic import 

const Grocery=lazy(()=>
   import("./components/grocerry.js")
)


const Applayout=()=>{
  
const[username,setusername]=useState()


  useEffect(()=>{
    const data={
      name:"siva"
    }
    setusername(data.name)
  
    },[]) 

  return(
    <Provider store={Appstore}>
    <Usercontext.Provider value={{loggedinuser:username,setusername}}>
    <div id="applayout">
    <Usercontext.Provider value={{loggedinuser:"gowtham"}}>
        <Header/>
      </Usercontext.Provider>
      <Outlet/>

      </div>
     </Usercontext.Provider>
     </Provider>
  );
  
};



const approuter=createBrowserRouter([
      {
        path:"/",
        element:<Applayout/>,
        children:[
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
             {
              path:"/restaurant/:id",
              element:<Resmenu/>
      
             },
             {
              path:"/Grocerry",
              element:<Suspense fallbakc={<h1>welcome loding...</h1>}>< Grocery/></Suspense>
      
             },

        ],
        errorElement:<Error/>
      
      }
     
]);


    // props is endof the day  js object we are writing js object in {}


const root =ReactDOM.createRoot(document.getElementById("root"))
 
root.render(<RouterProvider router={approuter}/>)






