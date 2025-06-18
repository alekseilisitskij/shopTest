import { configureStore } from "@reduxjs/toolkit";
import products from "../features/catalog/slice/ProductsSlice";
import basket from "../features/basket/slice/BasketSlice";
import filterProducts from "../features/catalog/slice/FilterSlice";

export const store = configureStore({
  reducer: {
    products,
    basket,
    filterProducts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
