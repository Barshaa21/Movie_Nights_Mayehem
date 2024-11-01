// reducer
import { configureStore } from "@reduxjs/toolkit";
import MovieNightsSlice from "../features/MovieNightsSlice";

export const store = configureStore({
  reducer: {
    movieNights: MovieNightsSlice,
  },
});
