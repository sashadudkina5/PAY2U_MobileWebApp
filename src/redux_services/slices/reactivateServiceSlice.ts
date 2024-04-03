import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TReactivateSubscriptionState = {
reactivatedSuccess: boolean;
isLoading: boolean;
error: null | string;
}


export const initialState: TReactivateSubscriptionState = {
    reactivatedSuccess: false,
    isLoading: false,
    error: null,
};

const reactivateServiceSlice = createSlice({
  name: "reactivateService",
  initialState,
  reducers: {
    reactivateServiceRequest(state) {
      state.isLoading = true;
    },
    reactivateServiceSuccess(
      state
    ) {
      state.reactivatedSuccess = true;
      state.isLoading = false;
    },
    reactivateServiceFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.reactivatedSuccess = false;
      state.error = action.payload;
    },
  },
});

export const {
    reactivateServiceRequest,
    reactivateServiceSuccess,
    reactivateServiceFailed,
} = reactivateServiceSlice.actions;

export default reactivateServiceSlice.reducer;
