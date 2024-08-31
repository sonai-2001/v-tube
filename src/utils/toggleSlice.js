import { createSlice } from "@reduxjs/toolkit";

const toggleSlice= createSlice({
    name:"toggle",
    initialState:{
          isMenuOpen:true
    },
    reducers:{
        sideBarToggler:(state,action)=>{
                 state.isMenuOpen = !state.isMenuOpen
        }
    }
})


export const {sideBarToggler}=toggleSlice.actions

export default toggleSlice.reducer;