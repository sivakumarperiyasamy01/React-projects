
import { CARD_LOGO } from "./utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";
import reslist from "./utils/mockdata";
import { Link } from "react-router-dom";


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
    // usestate used in filter onclick and search   1.connecting useeffect and use state 

      const[listofres,setlisofres]=useState([])
  // built for search filter copy 
      const [filterrestaurant,setfilterrestaurant]=useState([])

  // search filter combine with state variable 
  const [searchfilter,setsearchfilter]=useState("")

  // use effect  1.connecting useeffect and use state
  // if no depedancy array use effect will be called every componenet renders 
  // if depadency array empty - useeffect is called on only intial render   
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
            setfilterrestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

    // shimmer UI it gives better user experience it will use before the execution of rescontainer
   // filter button 
  return listofres.length===0?<Shimmer/>:
       ( <div className="body">

          <div className="filter">
              <div className="search filte ">
                <input type="text" className="search" value={searchfilter} onChange={(e)=>{
                    setsearchfilter(e.target.value)
                }}/>
                <button className="btn" onClick={()=>{
                const filtersearch= listofres.filter((res)=>
                      res.info.name.toLowerCase().includes(searchfilter.toLowerCase())
                  )
                  setfilterrestaurant(filtersearch)       
                }}>
                    search
                </button>

              </div>
            
                  
            <button className="btn" onClick={()=>{   // top restaurants filter logic
              const filterlist=listofres.filter((res)=>
                res.info.avgRating>4.3);
                setlisofres(filterlist)
                
            }}>Top restaurants</button>
          </div>
      
    

       <div id="rescontainer">
            {filterrestaurant.map((restaurant)=>
           <Link key={restaurant.info.id} to={"/restaurant/" }> <Rescards resdata={restaurant}/></Link>)}
       </div>
        
   </div> 
  )      
}
       
    
export default Body;