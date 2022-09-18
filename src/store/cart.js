import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
