import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import calculator from "./features/counter/calculatorSlice";
import addToCart from "./features/AddToCart/cartSummarySlice";
import addToWishList from "./features/wishList/wishListSlice";
export const store = configureStore({
  reducer: {
    calculator: calculator,
    addToCart: addToCart,
    addToWishList: addToWishList,
  },
});
