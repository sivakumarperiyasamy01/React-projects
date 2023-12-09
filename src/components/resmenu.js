import Shimmer from "../utills/Shimmer";
import { Form, useParams } from "react-router-dom";
import useresmenu from "../utills/useresmenu";
import Restaurantcatagory from "./Restaurantcatagory";
import { useState } from "react";

const Resmenu = () => {
  const { id } = useParams();

  const rescardinfo = useresmenu(id);

  const [showindex, setshowindex] = useState();

  if (rescardinfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage } =
    rescardinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const Menucatagerious =
    rescardinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg">
        <h3 className="font-bold text-lg my-6">{name}</h3>
        <p className="text-base px-10">
          {cuisines.join(",")}-{costForTwoMessage}
        </p>
        <p className="text-base my-4 px-10">{avgRating},Rating</p>
      </div>
      <div className="m-10 w-6/12 mx-auto ">
        <button className="px-4 py-1 rounded-full bg-slate-200 text-lg font-normal shadow-lg">
          {" "}
          Veg
        </button>
      </div>
      <div>
        {Menucatagerious.map((catagory, index) => (
          <Restaurantcatagory
            key={catagory.card.card.title}
            data={catagory.card.card}
            showlistitems={index === showindex ? true : false}
            setshowindex={() => setshowindex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Resmenu;
