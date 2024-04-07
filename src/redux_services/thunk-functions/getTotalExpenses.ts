
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getTotlaExpensesRequest,
    getTotalExpensesSuccess,
    getTotalExpensesFailed,
} from "../slices/categoryExpensesSlice";


/**
 * Thunk function for fetching totalexpenses and dispatching it them the store.
 * If the request is successful, the fetched expenses
 * are dispatched to the store using the `getTotalExpensesSuccess` action.
 * 
 * @param {string} startDate - start date.
 * @param {string} endDate - end date.
 *
 * @example
 * // Dispatch function to get expenses and update the state in Redux
 * dispatch(getTotalExpenses('2024-01-02', '2024-01-02'));
 */

export const getTotalExpenses = (startDate: string, endDate: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getTotlaExpensesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getTotalExpensesFailed("AccessToken is missing"));
      return;
    }

    const totalExpenses = await fetchWithRefresh(`${BASE_URL}/analytics/expenses/?start_date=${startDate}&end_date=${endDate}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    dispatch(getTotalExpensesSuccess(totalExpenses));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(getTotalExpensesFailed(err.message));
    } else {
      dispatch(getTotalExpensesFailed("An unknown error occurred"));
    }
  }
};
