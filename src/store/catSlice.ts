import { createSlice } from "@reduxjs/toolkit";
import { getCatagories } from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const catSlice = createSlice({
  name: "catagories",
  initialState,
  extraReducers: {
    [getCatagories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCatagories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getCatagories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default catSlice.reducer;
