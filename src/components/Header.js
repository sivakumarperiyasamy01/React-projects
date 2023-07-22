
import { LOGO_URL } from "./utils/constant";

const Header=()=>{
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
        </ul>
      </div>

    </div>
  )
}




 export default Header;