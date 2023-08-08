
import { CARD_LOGO } from "./utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";

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

  const [reslist1,setreslist]= useState([]);

  const[SearchRes, setSearchRes]=useState("");


  useEffect(()=>{
    fetchdata();

  },[])

  const fetchdata= async ()=>{
    const data1= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  
  const json=await data1.json()

  console.log(json); 

setreslist(json.data.cards[5].card.card.gridElements.infoWithStyle
.restaurants);

  };

  if (reslist1.length===0){
      return <Shimmer />
  };
  return(
  <div id="container">
    <div id="Filter">
      <input type="text" className="input" value={SearchRes} onChange={(e)=>{
             setSearchRes(e.target.value);
      }}>
      </input>

     <button className="search" onClick={()=>{
            reslist1.filter((rest)=>{
             const store= rest.info.name.includes(SearchRes)
              setSearchRes(store);
            })
     }}>Search</button>
       <button className="btn" onClick={()=>{const filterlist=reslist1.filter((res)=>res.info.avgRating>4);setreslist(filterlist);

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