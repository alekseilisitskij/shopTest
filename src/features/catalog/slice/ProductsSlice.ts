import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../api/productsApi";
import type {
  PaginatedResponse,
  GetAllProductsParams,
  Product,
} from "../../../types/product";

interface IinitialState {
  products: Product[];
  isLoading: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: IinitialState = {
  products: [],
  isLoading: "idle",
};

export const fetchProducts = createAsyncThunk<
  PaginatedResponse,
  GetAllProductsParams
>("products/fetchProducts", async ({ category, page, limit = 4, sort }) => {
  const response = await getAllProducts({ category, page, limit, sort });
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = "loading";
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.isLoading = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = "failed";
        state.products = [];
      })
      .addDefaultCase(() => {});
  },
});

export default productsSlice.reducer;
