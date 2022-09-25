import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  products: [],
  productsAreLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    handleProductsLoading(state, action) {
      state.productsAreLoading = action.payload;
    },

    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
