
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCatagories = createAsyncThunk(
  "InterestedCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);
