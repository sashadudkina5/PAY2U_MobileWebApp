import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TCashbackResponse = {
    cashback: number;
}

type TCashbackState = {
  cashbackTotal: number;
  cashbackPeriod: number;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TCashbackState = {
  cashbackTotal: 0,
  cashbackPeriod: 0,
  isLoading: false,
  error: null,
};

const cashbackSlice = createSlice({
  name: "cashback",
  initialState,
  reducers: {
    getTotalCashbackRequest(state) {
      state.isLoading = true;
    },
    getPeriodCashbackRequest(state) {
      state.isLoading = true;
    },
    getTotalCashbackSuccess(state, action: PayloadAction<TCashbackResponse>) {
      state.cashbackTotal = action.payload.cashback;
      state.isLoading = false;
    },

    getPeriodCashbackSuccess(state, action: PayloadAction<TCashbackResponse>) {
      state.cashbackPeriod = action.payload.cashback;
      state.isLoading = false;
    },

    getTotalCashbackFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getPeriodCashbackFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getTotalCashbackRequest,
    getPeriodCashbackRequest,
    getTotalCashbackSuccess,
    getPeriodCashbackSuccess,
    getTotalCashbackFailed,
    getPeriodCashbackFailed
} = cashbackSlice.actions;

export default cashbackSlice.reducer;
