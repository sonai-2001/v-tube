import { createSlice } from "@reduxjs/toolkit";

const commentTokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
  },
  reducers: {
    setPageToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setPageToken } = commentTokenSlice.actions;
export default commentTokenSlice.reducer;
