// project 1 
// creating food order app 

// first we need to do proper plannnig 
      - header component
      -body component 
      -footer component 

  1. header component 
        -  logo 
        -  links 

  2. body componet 
      - search 
      - card container 
            - rescards 
                - restaurant name 
                - rating 
                - cusines 
                - delivery time 

  3. footer compnoent 
        - copy right symbol
        - links 
        -contact information

// create over all component 

// create separate componenet for all header, body,
- combine all componnets by component composition by following \

const Applayout=()=>{
  return(
    <div id="applayout">
      <Header/> // componenet composition 
      <Body/>
    </div>
  )
}
const root =ReactDOM.createRoot(document.getElementById("root"))
 
-  resualbe cards need to have separate componentes


*** in body component****
  - create a separate component for cards 
  - fetch data from api/ in real world we will get data from back end like js array file

  - use array map to loop mulitiple objects in array to the card component 
  by following 

   {reslist.map((restaurant)=><Rescards resdata={restaurant}/>)}


/{/* <Rescards resdata={reslist[0]}/> */}


/* returning piece of jsx code when we do array.map*/ 
/*array.map used for looping 


/ sent data as a props (object) to component
/ props need to define by 
      - const {resdata}=props;

  - next clean all datas by 
   put in to 
     const {name,cuisines,avgRating,cloudinaryImageId}=resdata?.info

****
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

******


******   put all components and logo , links in to separate files 

import reslist from "./utils/mockdata";
import { CARD_LOGO } from "./utils/constant";

import Body from "./components/Body.js";

import Header from "./components/Header.js";

export default Body;
export default reslist;


*** when exporting  multiple files use 
export const LOGO_URL="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"

export const CARD_LOGO="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"