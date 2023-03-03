import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  isFetching: false,
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumbers: (state, action) => {
      state.isFetching = true;
    },
    addNumbersSuccess: (state, action) => {
      console.log("SK@", action);
      state.isFetching = false;
      state.result = action.payload;
    },
    addNumbersFailed: (state, action) => {
      console.log("SK@", action);
      state.isFetching = false;
    },
    minusNumbers: (state, action) => {
      state.isFetching = true;
    },
    minusNumberSuccess: (state, action) => {
      state.isFetching = false;
      state.result = action.payload;
    },
    minusNumberFailed: (state) => {
      state.isFetching = false;
    },
  },
});
export const {
  addNumbers,
  addNumbersSuccess,
  addNumbersFailed,
  minusNumberFailed,
  minusNumberSuccess,
  minusNumbers,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
