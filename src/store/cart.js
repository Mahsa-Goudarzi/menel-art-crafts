import { createSlice } from "@reduxjs/toolkit";

const initialCartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
