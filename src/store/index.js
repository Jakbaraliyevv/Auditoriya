import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import korzinaReducer from "../store/korzina-slice"; // Fayl nomi bo'yicha import qiling

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    korzina: korzinaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
