import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  item: "",
  price: 0,
  productList: [],
};
export const cartSummarySlice = createSlice({
  name: "cartSummarySlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("SK@13");

      state.item = action.payload.product;
      state.price = action.payload.price;
      state.productList = [
        ...state.productList,
        { productName: state.item, productPrice: state.price },
      ];
      state.total += Math.floor(Number(action.payload.price));
    },
  },
});
export const { addToCart } = cartSummarySlice.actions;
export default cartSummarySlice.reducer;
