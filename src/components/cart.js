import Listitems from "./listitems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearcart } from "../utills/createslice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handelclearcart = () => {
    dispatch(clearcart());
  };

  return (
    <div className="text-center my-6 p-5">
      <h1 className="font-bold  text-lg">Cart items</h1>
      <button
        className="bg-slate-300 m-2 w-24 h-10 font-bold  rounded-full"
        onClick={handelclearcart}
      >
        ClearCart
      </button>
      {cartitems.length === 0 && (
        <h1 className="font-bold text-lg my-48">Add items cart is empty</h1>
      )}

      <div className="w-6/12 m-auto">
        <Listitems items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
