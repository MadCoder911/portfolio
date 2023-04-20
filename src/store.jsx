import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../src/Features/app/appSlice";
export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
