import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IPlanInfo } from "../../utils/types";

type PlansState = Record<string, IPlanInfo>;

  interface IPlanInfoState {
    plans: PlansState;
    isLoading: boolean;
    error: string | null;
  }

const initialState: IPlanInfoState = {
  plans: {},
  isLoading: false,
  error: null,
};

const selectedPlanInfoSlice = createSlice({
  name: "selectedPlanInfo",
  initialState,
  reducers: {
    getPlanInfoRequest(state) {
      state.isLoading = true;
    },
    getPlanInfoSuccess(state, action: PayloadAction<{ planId: string | undefined; info: IPlanInfo }>) {
      const { planId, info } = action.payload;
      state.plans[planId!] = info;
      state.isLoading = false;
    },
    getPlanInfoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearAllPlanInfo(state) {
      state.plans = {};
    },    
  },
});

export const {
    getPlanInfoRequest,
    getPlanInfoSuccess,
    getPlanInfoFailed,
    clearAllPlanInfo
} = selectedPlanInfoSlice.actions;

export default selectedPlanInfoSlice.reducer;
