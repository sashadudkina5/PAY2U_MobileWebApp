import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    IPaymentItem,
    IPaymentHistoryResponse,
} from "../../utils/types";

type TPaymentHistoryData = {
  data: IPaymentItem[];
};

type TPaymentHistoryState = {
  paymentHistory: TPaymentHistoryData;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TPaymentHistoryState = {
    paymentHistory: {
    data: [],
  },
  isLoading: false,
  error: null,
};

const paymentHistorySlice = createSlice({
  name: "paymentHistory",
  initialState,
  reducers: {
    getPaymentHistoryRequest(state) {
      state.isLoading = true;
    },
    getPaymentHistorySuccess(
      state,
      action: PayloadAction<IPaymentHistoryResponse>
    ) {
      state.paymentHistory.data = action.payload.data;
      state.isLoading = false;
    },
    getPaymentHistoryFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getPaymentHistoryRequest,
    getPaymentHistorySuccess,
    getPaymentHistoryFailed,
} = paymentHistorySlice.actions;

export default paymentHistorySlice.reducer;
