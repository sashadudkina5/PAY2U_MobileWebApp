import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { TAuthState } from "../../utils/types";

export const initialState: TAuthState = {
  loggedIn: false,
  isLoading: false,
  loginError: null,
  registerError: null,
  logoutError: null,
};

const authSlice = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    getLoginRequest(state) {
      state.isLoading = true;
    },

    getRegisterRequest(state) {
      state.isLoading = true;
    },

    getLoginSuccess(state) {
      state.loggedIn = true;
      state.isLoading = false;
      state.loginError = null;
    },

    getRegisterSuccess(state) {
      state.isLoading = false;
      state.registerError = null;
    },

    getLoginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.loggedIn = false;
      state.loginError = action.payload;
    },

    getRegisterFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.loggedIn = false;
      state.registerError = action.payload;
    },

    getLogoutSuccess(state) {
      state.loggedIn = false;
      state.isLoading = false;
    },

    getLogoutFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.loggedIn = true;
      state.logoutError = action.payload;
    },
    getLogoutRequest(state) {
      state.isLoading = true;
    },
  },
});

export const { getLoginRequest, getLoginSuccess, getLoginFailed, getRegisterRequest, getRegisterSuccess, getRegisterFailed, getLogoutSuccess, getLogoutFailed, getLogoutRequest } =
  authSlice.actions;

export default authSlice.reducer;
