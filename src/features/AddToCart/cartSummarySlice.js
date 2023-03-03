import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  items: [],
  isFetching: false,
  isAdded: false,
};
const cartSummarySlice = createSlice({
  name: "cartSummarySlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
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
    addToCartSuccess: (state, action) => {
      state.productList = action.payload.addToCart;
    },
    addToCartFailure: (state) => {
      state.productList = [];
    },
    getItem: (state, action) => {
      console.log("SK@getitam", state.items);
      state.isFetching = true;
    },
    getItemSuccess: (state, action) => {
      state.isFetching = false;
      console.log("SK@slice", state.isFetching);
      state.items = action.payload.result;
    },
    getItemFailure: (state) => {
      state.isFetching = false;
      state.items = [];
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
export const {
  addToCart,
  decreaseQuantity,
  removeItem,
  getItemFailure,
  getItemSuccess,
  getItem,
} = cartSummarySlice.actions;
export default cartSummarySlice.reducer;
