import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  aboutPersonal,
  aboutHobbies,
  aboutProfessional,
} from "../../Utils/data";
import { projectss } from "../../Utils/projects";
import axios from "axios";
const initialState = {
  isNavbarOpen: false,
  activePage: "",
  activeAbouTab: "professional",
  activeSubData:
    "experience I have always been passionate about lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  data: { ...aboutProfessional },
  lines: 0,
  codeLines: 0,
  activeProject: "all",
  allProjects: [...projectss],
  displayedProjects: [],
  name: "",
  email: "",
  message: "",
  showResp: false,
  formResponse: "submit-button",
};

export const submitForm = async (data) => {
  fetch("https://api.sheetmonkey.io/form/5zaEzoNftNLeUa5HFEAziV", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((result) => {
    console.log(result);
    return result.message;
  });
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
    changePage: (state, { payload }) => {
      state.activePage = payload;
    },
    changeAboutTab: (state, { payload }) => {
      state.activeAbouTab = payload;
    },
    updateData: (state, { payload }) => {
      state.data = { ...payload };
      if (payload.experience) {
        state.activeSubData = payload.experience;
      } else if (payload.bio) {
        state.activeSubData = payload.bio;
      } else {
        state.activeSubData = payload.sports;
      }
    },
    updateActiveSubData: (state, { payload }) => {
      if (payload === "favorite-games") {
        let x = "favouriteGames";
        state.activeSubData = state.data[x];
        return;
      }
      state.activeSubData = state.data[payload];
    },
    setLines: (state, { payload }) => {
      state.lines = payload;
    },
    setCodeLines: (state, { payload }) => {
      state.codeLines = payload;
    },
    handleActiveProject: (state, { payload }) => {
      state.activeProject = payload;
    },
    handleFormChange: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
    },
    setFormResp: (state, { payload }) => {
      state.formResponse = payload;
    },
    showFormResp: (state, { payload }) => {
      state.showResp = payload;
    },
  },
});
export const {
  openNavbar,
  closeNavbar,
  changePage,
  changeAboutTab,
  updateData,
  updateActiveSubData,
  setLines,
  handleActiveProject,
  handleFormChange,
  clearForm,
  setCodeLines,
  setFormResp,
  showFormResp,
} = appSlice.actions;
export default appSlice.reducer;
