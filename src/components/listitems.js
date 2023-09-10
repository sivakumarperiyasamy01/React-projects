
 import { CARD_LOGO } from "./utils/constant";
 import { useDispatch } from "react-redux";
 import { addItem } from "./utils/createslice";

const Listitems=({items})=>{
  console.log(items)

  
  const dispatch=useDispatch()

  const handelClick=(item)=>{
     console.log(dispatch( addItem(item)))

  }


  return(
    <div className="text-left my-6" >
             {items.map((item)=>(
                 
          <div className="my-4 border-b-2 border-gray-200 flex justify-between " key={item.card.info.id}>
            
          <div className="w-9/12">
             <h1 className="font-bold">{item.card.info.name}</h1>
              <p className="font-bold">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</p>  
              <h3 className="text-sm">{item.card.info.description}</h3>
          </div>
            
         <div className="w-3/12"> 
          <button className="p-2 w-15 h-10 bg-white text-lg font-normal shadow-lg absolute "onClick={()=>handelClick(item)}> Add+</button>
              <div>
              <img className="p-3" src={CARD_LOGO+item.card.info.imageId }></img>
              </div>
        </div>

        </div>)

        )}
        

        


    </div>

  )
}

export default Listitems;