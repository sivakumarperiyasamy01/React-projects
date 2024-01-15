import { LOGO_URL } from "../utills/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlinestatus from "../utills/useonlinestatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const cart = useSelector((store) => store.cart.items);
  const onlinestatus = useOnlinestatus();

  return (
    <div className="flex bg-green-100 justify-between items-center shadow-lg ">
      <div id="logo">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex font-bold ">
          <li className="p-2 m-3">
            <Link>Online status:{onlinestatus ? "🟢" : "🔴"}</Link>
          </li>
          <li className="p-2 m-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-3">
            <Link to="/About">About Us</Link>
          </li>
          <li className="p-2 m-3">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="p-2 m-3">
            <Link to="/Grocerry">Grocerry</Link>
          </li>
          <li className="p-2 m-3">
            <Link to="/Cart">Cart ({cart.length}items)</Link>
          </li>

          <li className="p-2 m-3">
            {" "}
            <button
              className="btn1"
              onClick={() => {
                btnNameReact === "login"
                  ? setbtnNameReact("logout")
                  : setbtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
