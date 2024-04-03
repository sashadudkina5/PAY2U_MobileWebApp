import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    ISuspendedSubscriptionItem,
    ISuspendedSubscriptionResponse,
} from "../../utils/types";

type TSuspendedSubscriptionsData = {
  data: ISuspendedSubscriptionItem[];
};

type TSuspendedSubscriptionsState = {
    suspendedSubscriptions: TSuspendedSubscriptionsData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TSuspendedSubscriptionsState = {
    suspendedSubscriptions: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const suspendedSubscriptionsSlice = createSlice({
  name: "suspendedSubscriptions",
  initialState,
  reducers: {
    getSuspendedSubscriptionsRequest(state) {
      state.isLoading = true;
    },
    getSuspendedSubscriptionsSuccess(
      state,
      action: PayloadAction<ISuspendedSubscriptionResponse>
    ) {
      state.suspendedSubscriptions.data = action.payload.data;
      state.isLoading = false;
    },
    getSuspendedSubscriptionsFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getSuspendedSubscriptionsRequest,
    getSuspendedSubscriptionsSuccess,
    getSuspendedSubscriptionsFailed,
} = suspendedSubscriptionsSlice.actions;

export default suspendedSubscriptionsSlice.reducer;
