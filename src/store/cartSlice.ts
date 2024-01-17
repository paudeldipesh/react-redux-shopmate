import { createSlice } from "@reduxjs/toolkit";
import { Item } from "./item";

interface CartState {
  cartList: Item[];
  total: number;
}

const initialState: CartState = {
  cartList: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const updateTotal = state.total + action.payload.price;
      return { ...state, total: updateTotal, cartList: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (current) => current.id !== action.payload.id
      );
      const updateTotal = state.total - action.payload.price;
      return { ...state, total: updateTotal, cartList: updatedCartList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
