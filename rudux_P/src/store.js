import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import calculator from "./features/counter/calculatorSlice";
export const store = configureStore({
  reducer: {
    calculator: calculator,
  },
});
