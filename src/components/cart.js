import Listitems from "./listitems";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { clearcart } from "./utils/createslice";


const Cart=()=>{
    const cartitems= useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();

    const handelclearcart=()=>{
      dispatch(clearcart())
    }

  return(
     <div className="text-center my-6 p-5"> 
     
    <h1>Cart items</h1>
    <button className="bg-slate-300 m-2 p-3" onClick={handelclearcart}>ClearCart</button>
    {cartitems.length===0 &&(<h1>add items cart is empty</h1>)}

    <div className="w-6/12 m-auto">
    <Listitems items={cartitems}/>
    </div>
  
     </div>
    

)}

export default Cart;