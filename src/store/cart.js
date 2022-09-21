import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [], totalAmount: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      const payloadAmount = action.payload.amount;
      state.totalAmount += payloadAmount;
      state.totalPrice += action.payload.price * payloadAmount;

      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.amount += payloadAmount;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeProduct(state, action) {
      state.totalAmount--;
      state.totalPrice -= action.payload.price;

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
