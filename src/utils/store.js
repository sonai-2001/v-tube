import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import categorySlice from "./categorySlice";
import commentsSlice from "./commentsSlice";
import commentTokenSlice from "./commentTokenSlice";

const store =configureStore(
    {
      reducer:{
           toggle:toggleSlice,
           category:categorySlice,
           comments:commentsSlice,
           token:commentTokenSlice
           
      }
    }
)
export default store;