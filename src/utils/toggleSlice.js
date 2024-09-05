import { createSlice } from "@reduxjs/toolkit";

const toggleSlice= createSlice({
    name:"toggle",
    initialState:{
          isMenuOpen:true
    },
    reducers:{
        sideBarToggler:(state,action)=>{
                 state.isMenuOpen = !state.isMenuOpen
        },
        sideBarClose:(state,action)=>{
                 state.isMenuOpen = action.payload
        },
    }
})


export const {sideBarToggler,sideBarClose}=toggleSlice.actions

export default toggleSlice.reducer;