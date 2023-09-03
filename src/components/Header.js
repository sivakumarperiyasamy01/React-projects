
import { LOGO_URL } from "./utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

 // usestate login is inital value to state variable 
 
  const[btnNameReact, setbtnNameReact]= useState("login");

  return(
  <div className="flex bg-green-100 justify-between">
      <div id="logo">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div >
        <ul className="flex ">
          <li className="p-2 m-3"><Link to="/">Home</Link></li>
          <li className="p-2 m-3"><Link to="/About">About Us</Link></li>
          <li className="p-2 m-3"><Link to="/Contact">Contact Us</Link></li>
          <li className="p-2 m-3"><Link to="/Grocerry">grocerry</Link></li>
          <li className="p-2 m-3">Cart</li>

          <li className="p-2 m-3"> <button className="btn1" onClick={()=>{
                btnNameReact==="login"?setbtnNameReact("logout"):setbtnNameReact("login")
        }}>{btnNameReact}</button></li>
        </ul>  
      </div>

  </div>
  )
}


 export default Header;