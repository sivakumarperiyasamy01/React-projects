import { useEffect, useState, useContext } from "react";
import Shimmer from "../utills/Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utills/useonlinestatus";
import Rescards, { Labledcards } from "./rescards";
import Usercontext from "../utills/usercontext";
import { SWIGGY_API } from "../utills/constant";

const Body = () => {
  const [listofres, setlisofres] = useState([]);
  const [searchfilter, setsearchfilter] = useState("");
  const [filterrestaurant, setfilterrestaurant] = useState([]);
  const { loggedinuser, setusername } = useContext(Usercontext);
  const Promotedcomponent = Labledcards(Rescards);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setlisofres(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterrestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlinestatus();

  if (onlinestatus === false)
    return (
      <h1 className="font-bold w-[50%] m-auto text-2xl mt-10 ">
        Please check your internet connection{" "}
      </h1>
    );

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex w-11/12 m-auto mx-28 my-10">
        <div>
          <input
            type="text"
            data-testid="searchbtn"
            placeholder="typing..."
            className="outline-none py-1 px-2 border-2 w-80 rounded-l-full m -5"
            value={searchfilter}
            onChange={(e) => {
              setsearchfilter(e.target.value);
            }}
          />
          <button
            className="px-3 h-9 font-bold rounded-r-full bg-gray-300 hover:bg-gray-400 text-black rounded "
            onClick={() => {
              const filtersearch = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchfilter.toLowerCase())
              );
              setfilterrestaurant(filtersearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="mx-4 py-2 px-4 font-bold bg-green-500 rounded-full hover:bg-green-600 text-white "
          onClick={() => {
            const filterlist = listofres.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilterrestaurant(filterlist);
          }}
        >
          Top restaurants
        </button>

        <div>
          <label className="font-bold">Username:</label>
          <input
            type="text"
            className="border px-4 py-1 mx-2 rounded-l"
            value={loggedinuser}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-11/12 m-auto">
        {filterrestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            {restaurant.info.veg ? (
              <Promotedcomponent resdata={restaurant} />
            ) : (
              <Rescards resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
