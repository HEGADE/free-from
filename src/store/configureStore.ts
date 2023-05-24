import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./catSlice";

const store = configureStore({
  reducer: {
    catagories: catSlice,
  },
});

export default store;
