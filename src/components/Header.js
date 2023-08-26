
import { LOGO_URL } from "./utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

 // usestate login is inital value to state variable 
 
  const[btnNameReact, setbtnNameReact]= useState("login");

  return(
  <div className="flex bg-pink-50 justify-between">
      <div id="logo">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div id="links" className="flex">
        <ul className="flex px-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Grocerry">grocerry</Link></li>
          <li>Cart</li>
          <li> <button className="btn1" onClick={()=>{
                btnNameReact==="login"?setbtnNameReact("logout"):setbtnNameReact("login")
        }}>{btnNameReact}</button></li>
        </ul>  
      </div>

  </div>
  )
}


 export default Header;