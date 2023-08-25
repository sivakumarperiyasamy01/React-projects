
import Shimmer from "./utils/Shimmer";

import { Form, useParams } from "react-router-dom"

import useresmenu from "./utils/useresmenu";


const Resmenu=()=>{

   
  const{id}=useParams();
    
  const rescardinfo=useresmenu(id)

    
  if(rescardinfo===null){
      return(<Shimmer/>)
  }

  const {name,avgRating,cuisines,costForTwoMessage}=rescardinfo?.cards[0]?.card?.card?.info;

  const {itemCards}=rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return(
        <div className="resmenupage">
            <h3>{name}</h3>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>
            <p>{avgRating},Rating</p>
            <ul>
             {itemCards.map((items)=>{
               return(<li key={items.card.info.id}>{items.card.info.name}Rs-{items.card.info.price/100}</li>)
             })}
            
            </ul>
        </div> 
      )

};

export default Resmenu;