import { configureStore } from "@reduxjs/toolkit"

import cartreducer from "./createslice"

const Appstore=configureStore({

      reducer:{
          cart:cartreducer

       }

})

export default Appstore;