import React from "react";
import ReactDOM from "react-dom";

import Body from "./components/Body.js";

import Header from "./components/Header.js";







    // props is endof the day  js object we are writing js object in {}


const Applayout=()=>{
  return(
    <div id="applayout">
      <Header/>
      <Body/>
    </div>
  )


}

const root =ReactDOM.createRoot(document.getElementById("root"))
 
root.render(<Applayout/>)






