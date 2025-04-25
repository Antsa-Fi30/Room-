import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
