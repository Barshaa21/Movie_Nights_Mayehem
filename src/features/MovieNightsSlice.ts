import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { value: [] };

export const MovieNightsSlice = createSlice({
  name: "movieNights",
  initialState,
  reducers: {
    setMovieNights: (state, action) => {
      state.value.push(action.payload);
      return state;
    },
  },
});
export const { setMovieNights } = MovieNightsSlice.actions;
export default MovieNightsSlice.reducer;
