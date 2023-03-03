import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import calculator from "./features/counter/calculatorSlice";
import calculator from "../features/learnSaga/calculatorSlice";
import products from "../features/learnSaga2/product.slice";
import addToCart from "../features/AddToCart/cartSummarySlice";
import addToWishList from "../features/wishList/wishListSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    calculator: calculator,
    addToCart: addToCart,
    addToWishList: addToWishList,
    products: products,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);
