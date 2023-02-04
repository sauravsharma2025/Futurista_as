import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  productList: [],
  quantity: 0,
};
const cartSummarySlice = createSlice({
  name: "cartSummarySlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("SK@13");

      const { id, product, price } = action.payload;
      if (!state.productList.find((item) => item.id === id)) {
        state.productList = [
          ...state.productList,
          {
            id: id,
            quantity: 1,
            productName: product,
            productPrice: Math.ceil(price),
          },
        ];
      } else {
        const x = state.productList.find((item) => item.id === id);
        x.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const test = state.productList.find((item) => item.id === action.payload);
      if (test.quantity <= 1) {
        test.quantity = 1;
      } else {
        test.quantity--;
      }
    },
    removeItem: (state, action) => {
      const filteredData = state.productList.filter(
        (item) => item.id !== action.payload
      );
      state.productList = filteredData;
    },
  },
});
export const { addToCart, decreaseQuantity, removeItem } =
  cartSummarySlice.actions;
export default cartSummarySlice.reducer;
