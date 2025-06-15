import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { getAllProducts } from "../../../api/productsApi";
import type { Product } from "../../../types/product";
import type {
  PaginatedResponse,
  GetAllProductsParams,
} from "../../../types/product";

interface IinitialState {
  products: Product[];
  isLoading: "idle" | "loading" | "succeeded" | "failed";
  searchQuery: string;
  category: string;
  currentPage: number;
  sortProperty: string;
  showModal: boolean;
}

const initialState: IinitialState = {
  products: [],
  isLoading: "idle",
  searchQuery: "",
  category: "",
  currentPage: 1,
  sortProperty: "",
  showModal: false,
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
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setChangeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSortProperty: (state, action: PayloadAction<string>) => {
      state.sortProperty = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
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

export const {
  setSearchQuery,
  setChangeCategory,
  setCurrentPage,
  setSortProperty,
  setShowModal,
} = productsSlice.actions;
export default productsSlice.reducer;
