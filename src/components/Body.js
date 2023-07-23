
import { CARD_LOGO } from "./utils/constant";
import { useState } from "react";
import reslist from "./utils/mockdata";

const Rescards=(props)=>{
  const {resdata}=props;
  const {name,cuisines,avgRating,cloudinaryImageId}=resdata?.info
  return(

           <div className="Rescard">
          <img className="cardlogo" src={CARD_LOGO+cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h3>{cuisines.join(",  ")}</h3>
          <h4>{avgRating}stars</h4>       
    </div>
   )
}




const Body=()=>{


  
  const [reslist1,setreslist]= useState(reslist);
  

  return(
  <div id="container">
    <div id="Filter">
       <button className="btn" onClick={()=>{const filterlist=reslist1.filter((res)=>res.info.avgRating>4.1);setreslist(filterlist);

        }}>
          Top restaurants
       </button>
    </div>


  <div id="rescontainer">
    {reslist1.map((restaurant)=>
      <Rescards key ={restaurant.info.id} resdata={restaurant}/>)}
    </div>
  </div>
  )

}

export default Body;