import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    IActiveSubscriptionItem,
    IActiveSubscriptionResponse,
} from "../../utils/types";

type TActiveSubscriptionsData = {
  data: IActiveSubscriptionItem[];
};

type TActiveSubscriptionsState = {
  activeSubscriptions: TActiveSubscriptionsData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TActiveSubscriptionsState = {
    activeSubscriptions: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const activeSubscriptionsSlice = createSlice({
  name: "activeSubscriptions",
  initialState,
  reducers: {
    getActiveSubscriptionsRequest(state) {
      state.isLoading = true;
    },
    getActiveSubscriptionsSuccess(
      state,
      action: PayloadAction<IActiveSubscriptionResponse>
    ) {
      state.activeSubscriptions.data = action.payload.data;
      state.isLoading = false;
    },
    getActiveSubscriptionsFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getActiveSubscriptionsRequest,
    getActiveSubscriptionsSuccess,
    getActiveSubscriptionsFailed,
} = activeSubscriptionsSlice.actions;

export default activeSubscriptionsSlice.reducer;
