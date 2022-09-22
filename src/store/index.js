import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer, auth: authReducer },
});

export default store;
