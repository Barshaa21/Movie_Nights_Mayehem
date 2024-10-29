// reducer
import { configureStore } from "@reduxjs/toolkit";
import MovieNightsSlice from "../features/MovieNightsSlice";
import TotalProductsSlice from "../features/TotalProducts";
import ThemeSlice from "../features/Theme";
import IdSlice from "../features/IdSlice";

export const store = configureStore({
  reducer: {
    count: TotalProductsSlice,
    theme: ThemeSlice,
    id: IdSlice,
    movieNights: MovieNightsSlice,
  },
});
