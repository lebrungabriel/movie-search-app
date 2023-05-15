import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const moviesSlice = createSlice({
  name: "movies",

  initialState,
  reducers: {
    addMovieToStore: (state, action) => {
      state.value.push(action.payload);
    },
    removeMovieToStore: (state) => {
      state.value = [];
    },
  },
});

export const { addMovieToStore, removeMovieToStore } = moviesSlice.actions;
export default moviesSlice.reducer;
