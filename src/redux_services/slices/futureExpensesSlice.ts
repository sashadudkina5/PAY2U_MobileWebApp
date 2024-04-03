import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TfutureExpensesResponse = {
    future_expenses: number;
}

type TfutureExpensesState = {
    futureExpenses: number;
  isLoading: boolean;
  error: null | any;
};


export const initialState: TfutureExpensesState = {
    futureExpenses: 0,
  isLoading: false,
  error: null,
};

const futureExpensesSlice = createSlice({
  name: "futureExpenses",
  initialState,
  reducers: {
    getFutureExpensesRequest(state) {
      state.isLoading = true;
    },
    getFutureExpensesSuccess(
      state,
      action: PayloadAction<TfutureExpensesResponse>
    ) {
      state.futureExpenses = action.payload.future_expenses;
      state.isLoading = false;
    },
    getFutureExpensesFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
    getFutureExpensesRequest,
    getFutureExpensesSuccess,
    getFutureExpensesFailed,
} = futureExpensesSlice.actions;

export default futureExpensesSlice.reducer;
