import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/store/slices/uiSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer
    }
  });

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
