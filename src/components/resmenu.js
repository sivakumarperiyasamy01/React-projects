
import Shimmer from "./utils/Shimmer";

import { Form, useParams } from "react-router-dom"

import useresmenu from "./utils/useresmenu";

import Restaurantcatagory from "./Restaurantcatagory";


const Resmenu=()=>{

   
  const{id}=useParams();
    
  const rescardinfo=useresmenu(id)

    
  if(rescardinfo===null){
      return(<Shimmer/>)
  }

  const {name,avgRating,cuisines,costForTwoMessage}=rescardinfo?.cards[0]?.card?.card?.info;

  const {itemCards}=rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


  // filter from menu catagerious data
  const Menucatagerious = rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  );


//   console.log(Menucatagerious)

  return(
        <div>
        <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg" >
            <h3 className="font-bold text-lg my-6">{name}</h3>
            <p className="text-base px-10">{cuisines.join(",")}-{costForTwoMessage}</p>
            <p className="text-base my-4 px-10">{avgRating},Rating</p>
        </div>
        <div className="m-10 w-6/12 mx-auto ">
          <button className="p-2 w-40 bg-white text-lg font-normal shadow-lg"> Veg</button>
        </div>
        <div>
            {Menucatagerious.map((catagory)=>
                <Restaurantcatagory key={catagory.card.card.title} data={catagory.card.card}/>
            )}

        </div> 
        </div>
      )

};

export default Resmenu;

