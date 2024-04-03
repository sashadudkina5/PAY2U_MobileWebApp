import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IPaymentItem } from "../../utils/types";

type TPaymentItemData = {
    data: IPaymentItem;
  };

type ISelectedPaymentState = {
    selectedPaymentItem: TPaymentItemData;
  isLoading: boolean;
  error: null | any;
};


export const initialState: ISelectedPaymentState = {
  selectedPaymentItem: {
    data: {
        id: "",
        logo: "",
        service_name: "",
        tariff_name: "",
        cashback: 0,
        price: 0,
        status_cashback: true,
        date: "",
    }
  },
  isLoading: false,
  error: null,
};

const selectedPaymentSlice = createSlice({
  name: "selectedPayment",
  initialState,
  reducers: {
    getSelectedPaymentRequest(state) {
      state.isLoading = true;
    },
    getSelectedPaymentSuccess(
      state,
      action: PayloadAction<IPaymentItem>
    ) {
      state.selectedPaymentItem.data = action.payload;
      state.isLoading = false;
    },
    getSelectedPaymentFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getSelectedPaymentRequest,
    getSelectedPaymentSuccess,
    getSelectedPaymentFailed,
} = selectedPaymentSlice.actions;

export default selectedPaymentSlice.reducer;
