import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitStateBasket, BasketItem } from "../../../types/product";

const initialState: InitStateBasket = {
  totalPrice: 0,
  items: [],
  showModal: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    addItem(state, action: PayloadAction<BasketItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<{ id: number | string }>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter(
            (obj) => obj.id !== action.payload.id
          );
        }
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, setShowModal } =
  basketSlice.actions;
export default basketSlice.reducer;
