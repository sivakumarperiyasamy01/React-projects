import { CARD_LOGO } from "../utills/constant";
import { useContext } from "react";
import Usercontext from "../utills/usercontext";

const Rescards = (props) => {
  const { resdata } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resdata?.info;
  const { loggedinuser } = useContext(Usercontext);

  return (
    <div
      data-testid="rescardss"
      className="m-4 p-4 w-[200px] h-[450px] bg-#282c3f overflow-hidden shadow-lg"
    >
      <img className="rounded-xl" src={CARD_LOGO + cloudinaryImageId}></img>
      <h3 className="font-bold p-2">{name}</h3>
      <h3 className="font-sans p-1 ">{cuisines.join(",")}</h3>
      <h4 className="px-1">{avgRating} Stars</h4>
    </div>
  );
};

export const Labledcards = (Rescards) => {
  return (resdata) => {
    return (
      <div>
        <label className="bg-red-400 text-white absolute px-3 py-1 text-center mx-2 w-24">
          Promoted
        </label>
        <Rescards {...resdata} />
      </div>
    );
  };
};

export default Rescards;
