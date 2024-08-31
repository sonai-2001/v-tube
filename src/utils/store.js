import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import categorySlice from "./categorySlice";

const store =configureStore(
    {
      reducer:{
           toggle:toggleSlice,
           category:categorySlice
           
      }
    }
)
export default store;