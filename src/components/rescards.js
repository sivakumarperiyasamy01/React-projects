import { CARD_LOGO } from "./utils/constant";
// rescards in rescontainer 
const Rescards=(props)=>{
  const {resdata}=props;
  const {name,cuisines,avgRating,cloudinaryImageId}=resdata?.info
  return(

          <div className="m-4 p-4 w-[200px] bg-gray-300 hover:bg-red-300 shadow-slate-300">
              <img className="rounded-xl"src={CARD_LOGO+cloudinaryImageId}></img>
              <h3 className="font-bold p-2">{name}</h3>
              <h3 className="font-sans p-1">{cuisines.join(",  ")}</h3>
              <h4>{avgRating}stars</h4>       
          </div> ) }

      

  export const Labledcards=(Rescards)=>{

    return (
      (resdata)=>{
        return(
          <div>
          <label className="bg-black text-white absolute m-2 w-20">veg</label>
          <Rescards{...resdata}/>
          </div>
        )
      }


    )


  }


export default Rescards;