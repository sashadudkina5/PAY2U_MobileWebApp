import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  TCategoryExpensesResponse,
  TTotalExpensesResponse,
} from "../../utils/types";

type TCategoryExpensesState = {
  categoryExpenses: TCategoryExpensesResponse | null;
  totalExpenses: number;
  isLoading: boolean;
  error: null | any;
};

export const initialState: TCategoryExpensesState = {
  categoryExpenses: null,
  totalExpenses: 0,
  isLoading: false,
  error: null,
};

const categoryExpensesSlice = createSlice({
  name: "categoryExpenses",
  initialState,
  reducers: {
    getCategoryExpensesRequest(state) {
      state.isLoading = true;
    },
    getTotlaExpensesRequest(state) {
      state.isLoading = true;
    },
    getCategoryExpensesSuccess(
      state,
      action: PayloadAction<TCategoryExpensesResponse>
    ) {
      state.categoryExpenses = action.payload;
      state.isLoading = false;
    },
    getTotalExpensesSuccess(
      state,
      action: PayloadAction<TTotalExpensesResponse>
    ) {
      state.totalExpenses = action.payload.expenses;
      state.isLoading = false;
    },
    getCategoryExpensesFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getTotalExpensesFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearTotalExpenses(state) {
      state.totalExpenses = initialState.totalExpenses;
    },
  },
});

export const {
  getCategoryExpensesRequest,
  getCategoryExpensesSuccess,
  getCategoryExpensesFailed,
  clearTotalExpenses,

  getTotlaExpensesRequest,
  getTotalExpensesSuccess,
  getTotalExpensesFailed,
} = categoryExpensesSlice.actions;

export default categoryExpensesSlice.reducer;
