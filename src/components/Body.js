
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";
import reslist from "./utils/mockdata";
import { Link } from "react-router-dom";
import useonlinestatus from "./utils/useonlinestatus";
import Rescards,{Labledcards} from "./rescards";

const Body=()=>{
    // usestate used in filter onclick and search   1.connecting useeffect and use state 

      const[listofres,setlisofres]=useState([])
  // built for search filter copy 
      const [filterrestaurant,setfilterrestaurant]=useState([])

      console.log(listofres);

  // search filter combine with state variable 
  const [searchfilter,setsearchfilter]=useState("")

  const Promotedcomponent= Labledcards(Rescards)

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

      const  onlinestatus=useonlinestatus()
      
      if (onlinestatus===false)return(
        <h1>check internet connection </h1>
      )


    // shimmer UI it gives better user experience it will use before the execution of rescontainer
   // filter button 
  return listofres.length===0?<Shimmer/>:
       ( <div className="body">

          <div className="flex p-2">
              <div >
                <input type="text" className="bg-slate-400 m-5" value={searchfilter} onChange={(e)=>{
                    setsearchfilter(e.target.value)
                }}/>
                <button className="px-4 font-bold  bg-slate-400" onClick={()=>{
                const filtersearch= listofres.filter((res)=>
                      res.info.name.toLowerCase().includes(searchfilter.toLowerCase())
                  )
                  setfilterrestaurant(filtersearch)       
                }}>
                    search
                </button>

              </div>
            
                  
            <button className="mx-5 bg-slate-400 " onClick={()=>{   // top restaurants filter logic
              const filterlist=listofres.filter((res)=>
                res.info.avgRating>4.3);
                setlisofres(filterlist)
                
            }}>Top restaurants</button>
          </div>
      
    

       <div className="flex flex-wrap ">
            {filterrestaurant.map((restaurant)=>
           <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> {restaurant.info.veg
            ?<Promotedcomponent resdata={restaurant} />:<Rescards resdata={restaurant}/>}
              

           </Link>)
          

           }
       </div>
        
   </div> 
  )      
}
       
    
export default Body;