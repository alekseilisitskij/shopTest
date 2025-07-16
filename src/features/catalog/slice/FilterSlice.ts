import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialStateFilter {
  searchQuery: string;
  category: string;
}

const initialState: InitialStateFilter = {
  searchQuery: "",
  category: "all",
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
  },
});

export const { setSearchQuery, setChangeCategory } = filterSlice.actions;
export default filterSlice.reducer;
