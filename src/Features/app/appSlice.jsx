import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isNavbarOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isNavbarOpen = true;
    },
    closeNavbar: (state) => {
      state.isNavbarOpen = false;
    },
  },
});
export const { openNavbar, closeNavbar } = appSlice.actions;
export default appSlice.reducer;
