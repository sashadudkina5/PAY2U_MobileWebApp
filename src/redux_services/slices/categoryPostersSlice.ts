import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    ICategoryPoster,
    ICategoryPostersResponse,
} from "../../utils/types";

type TCategoryPostersData = {
  data: ICategoryPoster[];
};

type TCategoryPostersState = {
  categoryPosters: TCategoryPostersData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TCategoryPostersState = {
    categoryPosters: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const categoryPostersSlice = createSlice({
  name: "categoryPosters",
  initialState,
  reducers: {
    getCategoryPostersRequest(state) {
      state.isLoading = true;
    },
    getCategoryPostersSuccess(
      state,
      action: PayloadAction<ICategoryPostersResponse>
    ) {
      state.categoryPosters.data = action.payload.data;
      state.isLoading = false;
    },
    getCategoryPostersFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getCategoryPostersRequest,
    getCategoryPostersSuccess,
    getCategoryPostersFailed,
} = categoryPostersSlice.actions;

export default categoryPostersSlice.reducer;
