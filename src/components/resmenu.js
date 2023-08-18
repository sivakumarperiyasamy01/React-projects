import {useState, useEffect } from "react";
import Shimmer from "./utils/Shimmer";

const Resmenu=()=>{
//create a state variable 
  const[resinfo,setresinfo]=useState(null);

// fetch the data from api call 
useEffect(()=>{
  fetchmenu();
},[]);

const fetchmenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER")

    const json=await data.json();
    

   // update the fetch data from api call to the state variable 
    // setresinfo(json.data.cards[2],card.card.info)
};
// call shimmer UI if state variable is null otherwise call the below
if(resinfo===null)return<Shimmer/>

// const{name,avgRating,costForTwo}=resinfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return(      
     
     <div>
        <h1>name</h1>
        <h3>avgRating</h3>
        <h3>costForTwo</h3>
        
      <ul>
        <li>birayani</li>
        <li>burger</li>
        <li>colddrinks</li>    
      </ul>

      </div>
  )
};

export default Resmenu;