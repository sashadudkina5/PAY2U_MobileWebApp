import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getCategoryExpensesRequest,
    getCategoryExpensesSuccess,
    getCategoryExpensesFailed,
} from "../slices/categoryExpensesSlice";


/**
 * Thunk function for fetching expenses and dispatching it them the store.
 * If the request is successful, the fetched expenses
 * are dispatched to the store using the `getCategoryExpensesSuccess` action.
 * 
 * @param {string} startDate - start date.
 * @param {string} endDate - end date.
 *
 * @example
 * // Dispatch function to get expenses and update the state in Redux
 * dispatch(getCategoryExpenses('2024-01-02', '2024-01-02'));
 */

export const getCategoryExpenses = (startDate: string, endDate: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getCategoryExpensesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getCategoryExpensesFailed("AccessToken is missing"));
      return;
    }

    const expenses = await fetchWithRefresh(`${BASE_URL}/analytics/expenses-by-category/?start_date=${startDate}&end_date=${endDate}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getCategoryExpensesSuccess(expenses));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getCategoryExpensesFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getCategoryExpensesFailed("An unknown error occurred"));
    }
  }
};
