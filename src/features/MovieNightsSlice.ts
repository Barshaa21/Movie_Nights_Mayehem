import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { value: [] };

export const MovieNightsSlice = createSlice({
  name: "movieNights",
  initialState,
  reducers: {
    setMovieNights: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const { setMovieNights } = MovieNightsSlice.actions;
export default MovieNightsSlice.reducer;
