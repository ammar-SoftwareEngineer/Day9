// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToFavorites, removeFromFavorites , clear} = favoritesSlice.actions;
export default favoritesSlice.reducer;
