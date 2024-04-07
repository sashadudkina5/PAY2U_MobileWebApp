import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    ICategoryPoster,
    ICategoryPostersResponse,
} from "../../utils/types";

type TCategoryPostersData = {
  dataExclusive: ICategoryPoster[];
  dataPopular: ICategoryPoster[];
};

type TCategoryPostersState = {
  categoryPosters: TCategoryPostersData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TCategoryPostersState = {
    categoryPosters: {
    dataExclusive: [],
    dataPopular: [],
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
    getExclusivePostersSuccess(
      state,
      action: PayloadAction<ICategoryPostersResponse>
    ) {
      state.categoryPosters.dataExclusive = action.payload.data;
      state.isLoading = false;
    },
    getPopularPostersSuccess(
      state,
      action: PayloadAction<ICategoryPostersResponse>
    ) {
      state.categoryPosters.dataPopular = action.payload.data;
      state.isLoading = false;
    },
    getCategoryPostersFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearAllPosters(state) {
      state.categoryPosters.dataPopular = [];
      state.categoryPosters.dataExclusive = [];
    },  
  },
});

export const {
    getCategoryPostersRequest,
    getExclusivePostersSuccess,
    getPopularPostersSuccess,
    getCategoryPostersFailed,
    clearAllPosters
} = categoryPostersSlice.actions;

export default categoryPostersSlice.reducer;
