import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IServicePlanInfo, IServicePlansResponse } from "../../utils/types";

type TServicePlansData = {
  data: IServicePlanInfo[];
};

type TGetServicePlansState = {
  servicePlans: TServicePlansData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TGetServicePlansState = {
  servicePlans: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const servicePlansSlice = createSlice({
  name: "servicePlans",
  initialState,
  reducers: {
    getServicePlansRequest(state) {
      state.isLoading = true;
    },
    getServicePlansSuccess(
      state,
      action: PayloadAction<IServicePlansResponse>
    ) {
      state.servicePlans.data = action.payload.data;
      state.isLoading = false;
    },
    getServicePlansFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getServicePlansRequest,
    getServicePlansSuccess,
    getServicePlansFailed,
} = servicePlansSlice.actions;

export default servicePlansSlice.reducer;
