import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IUserInactiveServiceInfo } from "../../utils/types";

type IInactiveServiceInfoState = {
  inactiveServiceInfo: IUserInactiveServiceInfo;
  isLoading: boolean;
  error: null | any;
};

export const initialState: IInactiveServiceInfoState = {
  inactiveServiceInfo: {
    id: "",
    name: "",
    logo: "",
    full_name: "",
    short_description: "",
    description: "",
    cashback: 0,
    url: "",
  },
  isLoading: false,
  error: null,
};

const inactiveServiceInfoSlice = createSlice({
  name: "inactiveServiceInfo",
  initialState,
  reducers: {
    getInactiveServiceInfoRequest(state) {
      state.isLoading = true;
    },
    getInactiveServiceInfoSuccess(
      state,
      action: PayloadAction<IUserInactiveServiceInfo>
    ) {
      state.inactiveServiceInfo = action.payload;
      state.isLoading = false;
    },
    getInactiveServiceInfoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getInactiveServiceInfoRequest,
  getInactiveServiceInfoSuccess,
  getInactiveServiceInfoFailed,
} = inactiveServiceInfoSlice.actions;

export default inactiveServiceInfoSlice.reducer;
