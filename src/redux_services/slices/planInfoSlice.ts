import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IPlanInfo } from "../../utils/types";

type TPlanInfoData = {
    data: IPlanInfo;
  };

type ISelectedPlanInfoState = {
  selectedPlanInfo: TPlanInfoData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: ISelectedPlanInfoState = {
  selectedPlanInfo: {
    data: {
        id: "",
        name: "",
        description: "",
        condition: {
            count: 0,
            period:  "",
            price: 0,
        },
        special_condition: {
            count: 0,
            period:  "",
            price: 0,
        },
        trial_period: {
            count: 0,
            period:  "",
            price: 0,
        }
    }
  },
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
    getPlanInfoSuccess(
      state,
      action: PayloadAction<IPlanInfo>
    ) {
      state.selectedPlanInfo.data = action.payload;
      state.isLoading = false;
    },
    getPlanInfoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getPlanInfoRequest,
    getPlanInfoSuccess,
    getPlanInfoFailed,
} = selectedPlanInfoSlice.actions;

export default selectedPlanInfoSlice.reducer;
