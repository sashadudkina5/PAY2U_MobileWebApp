import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { TAuthState } from "../../utils/types";

export const initialState: TAuthState = {
  loggedIn: false,
  isLoading: false,
  loginError: null,
  registerError: null,
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
    },

    getRegisterSuccess(state) {
      state.loggedIn = true;
      state.isLoading = false;
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
  },
});

export const { getLoginRequest, getLoginSuccess, getLoginFailed, getRegisterRequest, getRegisterSuccess, getRegisterFailed } =
  authSlice.actions;

export default authSlice.reducer;
