import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { ISubscriptionInfo } from "../../utils/types";

type TSubscriptionInfo = {
    data: ISubscriptionInfo;
  };

type ISelectedSubscriptionInfoState = {
  selectedSubscriptionInfo: TSubscriptionInfo;
  isLoading: boolean;
  error: null | any;
};

export const initialState: ISelectedSubscriptionInfoState = {
    selectedSubscriptionInfo: {
    data: {
        id: "",
        logo:  "",
        service_name:  "",
        tariff_name:  "",
        cashback: 0,
        payment_date:  "",
        end_date:  "",
        trial_period_end_date:  "",
        phone_number:  "",
        price: 0
    }
  },
  isLoading: false,
  error: null,
};

const selectedSubscriptionInfoState = createSlice({
  name: "selectedSubscriptionInfo",
  initialState,
  reducers: {
    getSubscriptionInfoRequest(state) {
      state.isLoading = true;
    },
    getSubscriptionInfoSuccess(
      state,
      action: PayloadAction<ISubscriptionInfo>
    ) {
      state.selectedSubscriptionInfo.data = action.payload;
      state.isLoading = false;
    },
    getSubscriptionInfoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getSubscriptionInfoRequest,
    getSubscriptionInfoSuccess,
    getSubscriptionInfoFailed,
} = selectedSubscriptionInfoState.actions;

export default selectedSubscriptionInfoState.reducer;
