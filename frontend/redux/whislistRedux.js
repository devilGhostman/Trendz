import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
};

const whislist = createSlice({
  name: "whislist",
  initialState,
  reducers: {
    addToWhislist: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetWhislist: (state) => {
      state.products = [];
    },
  },
});

export const { addToWhislist, removeItem, resetWhislist } = whislist.actions;
export default whislist.reducer;
