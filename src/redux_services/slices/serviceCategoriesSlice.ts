import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  IServiceCategory,
  IServiceCategoriesResponse,
} from "../../utils/types";

type TServiceCategoriesData = {
  data: IServiceCategory[];
};

type TServiceCategoriesState = {
  serviceCategories: TServiceCategoriesData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TServiceCategoriesState = {
  serviceCategories: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const serviceCategoriesSlice = createSlice({
  name: "serviceCategories",
  initialState,
  reducers: {
    getServiceCategoriesRequest(state) {
      state.isLoading = true;
    },
    getServiceCategoriesSuccess(
      state,
      action: PayloadAction<IServiceCategoriesResponse>
    ) {
      state.serviceCategories.data = action.payload.data;
      state.isLoading = false;
    },
    getServiceCategoriesFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearServiceCategories(state) {
      state.serviceCategories.data = initialState.serviceCategories.data;
    },
  },
});

export const {
  getServiceCategoriesRequest,
  getServiceCategoriesSuccess,
  getServiceCategoriesFailed,
  clearServiceCategories
} = serviceCategoriesSlice.actions;

export default serviceCategoriesSlice.reducer;
