
import { LOGO_URL } from "./utils/constant";
import { useState } from "react";

const Header=()=>{

 
  const[btnNameReact, setbtnNameReact]= useState("login");

  return(
    <div id="header">
      <div id="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div id="links">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="btn1" onClick={()=>{
                btnNameReact==="login"?setbtnNameReact("logout"):setbtnNameReact("login")
        }}>{btnNameReact}</button>
        
        
        </ul>
        
      </div>

    </div>
  )
}




 export default Header;