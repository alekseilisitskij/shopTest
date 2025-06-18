import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialStateFilter {
  searchQuery: string;
  category: string;
  currentPage: number;
  sortProperty: string;
}

const initialState: InitialStateFilter = {
  searchQuery: "",
  category: "all",
  currentPage: 1,
  sortProperty: "id",
};

const filterSlice = createSlice({
  name: "filter",
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
  },
});

export const {
  setSearchQuery,
  setChangeCategory,
  setCurrentPage,
  setSortProperty,
} = filterSlice.actions;
export default filterSlice.reducer;
