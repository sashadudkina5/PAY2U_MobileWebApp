import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TSuspendSubscriptionState = {
suspendedSuccess: boolean;
isLoading: boolean;
error: null | string;
}


export const initialState: TSuspendSubscriptionState = {
    suspendedSuccess: false,
    isLoading: false,
    error: null,
};

const suspendServiceSlice = createSlice({
  name: "suspendService",
  initialState,
  reducers: {
    suspendServiceRequest(state) {
      state.isLoading = true;
    },
    suspendServiceSuccess(
      state
    ) {
      state.suspendedSuccess = true;
      state.isLoading = false;
    },
    suspendServiceFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.suspendedSuccess = false;
      state.error = action.payload;
    },
  },
});

export const {
    suspendServiceRequest,
    suspendServiceSuccess,
    suspendServiceFailed,
} = suspendServiceSlice.actions;

export default suspendServiceSlice.reducer;
