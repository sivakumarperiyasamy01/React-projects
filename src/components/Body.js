import reslist from "./utils/mockdata";
import { CARD_LOGO } from "./utils/constant";

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
  return(
  <div id="container">
    <div id="search">
        Search </div>
    <div id="rescontainer">
      {/* <Rescards resdata={reslist[0]}/> */}

    {/* function data(restaurant){
        <Rescards resdata={restaurant}>
    
      
     const resdata= reslist.map(data) */}
     

    {reslist.map((restaurant)=><Rescards resdata={restaurant}/>)}
    </div>
  </div>
  )

}

export default Body;