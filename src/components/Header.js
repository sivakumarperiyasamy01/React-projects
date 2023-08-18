
import { LOGO_URL } from "./utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{

 
  const[btnNameReact, setbtnNameReact]= useState("login");

  return(
    <div id="header">
      <div id="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div id="links">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/About">About Us</Link> </li>
          <li><Link to ="/contact">Contact Us</Link></li>
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