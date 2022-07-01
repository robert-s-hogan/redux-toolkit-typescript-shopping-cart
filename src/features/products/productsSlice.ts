import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductsState } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = {
  products: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receivedProducts: (state, action: PayloadAction<Products[]>) => {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;
