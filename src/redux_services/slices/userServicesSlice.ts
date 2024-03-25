import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  IUserInactiveServiceCard,
  IUserInactiveServicesResponse,
} from "../../utils/types";

type TUserInactiveServicesData = {
  data: IUserInactiveServiceCard[];
};

type TGetUserInactiveServicesState = {
  userInactiveServices: TUserInactiveServicesData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TGetUserInactiveServicesState = {
  userInactiveServices: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const userInactiveServicesSlice = createSlice({
  name: "inactiveServices",
  initialState,
  reducers: {
    getInactiveServicesRequest(state) {
      state.isLoading = true;
    },
    getInactiveServicesSuccess(
      state,
      action: PayloadAction<IUserInactiveServicesResponse>
    ) {
      state.userInactiveServices.data = action.payload.data;
      state.isLoading = false;
    },
    getInactiveServicesFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getInactiveServicesRequest,
  getInactiveServicesSuccess,
  getInactiveServicesFailed,
} = userInactiveServicesSlice.actions;

export default userInactiveServicesSlice.reducer;
