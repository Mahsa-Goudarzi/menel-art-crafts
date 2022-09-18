import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";
import authReducer from "./auth";

const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer, auth: authReducer },
});

export default store;
