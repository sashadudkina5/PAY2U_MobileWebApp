import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    IPopularService,
    IPopularServicesResponse,
} from "../../utils/types";

type TPopularServicesData = {
  data: IPopularService[];
};

type TPopularServicesState = {
  popularServices: TPopularServicesData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TPopularServicesState = {
    popularServices: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const popularServicesSlice = createSlice({
  name: "popularServices",
  initialState,
  reducers: {
    getPopularServicesRequest(state) {
      state.isLoading = true;
    },
    getPopularServicesSuccess(
      state,
      action: PayloadAction<IPopularServicesResponse>
    ) {
      state.popularServices.data = action.payload.data;
      state.isLoading = false;
    },
    getPopularServicesFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getPopularServicesRequest,
    getPopularServicesSuccess,
    getPopularServicesFailed,
} = popularServicesSlice.actions;

export default popularServicesSlice.reducer;
