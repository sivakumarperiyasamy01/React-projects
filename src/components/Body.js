
import { CARD_LOGO } from "./utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";
import reslist from "./utils/mockdata";


// rescards in rescontainer 
const Rescards=(props)=>{
  const {resdata}=props;
  const {name,cuisines,avgRating,cloudinaryImageId}=resdata?.info
  return(

          <div className="Rescard">
              <img className="cardlogo" src={CARD_LOGO+cloudinaryImageId}></img>
              <h3>{name}</h3>
              <h3>{cuisines.join(",  ")}</h3>
              <h4>{avgRating}stars</h4>       
          </div> ) }

const Body=()=>{
    // usestate used in filter onclick and search
      const[listofres,setlisofres]=useState([])

  // use effect  1.connecting useeffect and use state 
      useEffect(()=>{
            fetchdata();
      },[])
      
  // fetch the data from api 
      const fetchdata=async()=>{
          const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

    // convert the fecth data to json format

          const json= await data.json()

    // we need to update the statevaraible in usestate. we need to use portion of requried data from json
    // optional chaining 
            setlisofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

    // shimmer UI it gives better user experience it will use before the execution of rescontainer
        if(listofres.length===0){
            return <Shimmer/>
        }

   // filter button 

  return(   
      <div className="body">
          <div>
            <button className="btn" onClick={()=>{
              const filterlist=listofres.filter((res)=>
                res.info.avgRating>4.3);
                setlisofres(filterlist)
                
            }}>Top restaurants</button>
          </div>
      

  
      
                  










       <div id="rescontainer">
            {listofres.map((restaurant)=>
            <Rescards key ={restaurant.info.id} resdata={restaurant}/>)}
       </div>
        
   </div> 
  )      
}
       
    

  
export default Body;