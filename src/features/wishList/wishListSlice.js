import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};
const WishListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { id, product, price } = action.payload;
      if (!state.wishList.find((item) => item.id === id))
        state.wishList = [
          ...state.wishList,
          {
            id: id,
            product: product,
            price: price,
            quantity: 1,
          },
        ];
    },
    removeFromWishList: (state, action) => {
      const filteredWishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
      state.wishList = filteredWishList;
    },
  },
});
export const { addToWishList, removeFromWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
