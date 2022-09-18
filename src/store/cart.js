import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.amount++;
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }
    },

    removeProduct(state, action) {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem.amount === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        existingCartItem.amount--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
