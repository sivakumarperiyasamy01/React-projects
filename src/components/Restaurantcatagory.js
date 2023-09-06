import Listitems from "./listitems";


const Restaurantcatagory=({data,showlistitems,setshowindex})=>{


    const handleclick=()=>{
        setshowindex();
    }
    
    return(
      <div className="w-6/12 mx-auto  bg-gray-50 shadow-lg my-4">
      <div className="flex justify-between mr-15 cursor-pointer" onClick={handleclick}>
          <h1 className="font-bold text-base">{data.title} ({data.itemCards.length}) </h1>
          <span>⬇️</span>
      </div>
      <div>
         {showlistitems && <Listitems items={data.itemCards}/>}
      </div>

      </div>
      
    )

}

export default Restaurantcatagory;