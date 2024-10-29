// reducer
import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "../features/ShowSlice";
import TotalProductsSlice from "../features/TotalProducts";
import ThemeSlice from "../features/Theme";
import IdSlice from "../features/IdSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    count: TotalProductsSlice,
    theme: ThemeSlice,
    id: IdSlice,
  },
});
