import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getFutureExpensesRequest,
    getFutureExpensesSuccess,
    getFutureExpensesFailed,
} from "../slices/futureExpensesSlice";

/**
 * Thunk function for fetching future expenses in the curerent month and dispatching it them the store.
 * If the request is successful, the fetched future expenses
 * are dispatched to the store using the `getFutureExpensesSuccess` action.
 *
 * @example
 * // Dispatch function to get future expenses and update the state in Redux
 * dispatch(getFutureExpenses());
 */

export const getFutureExpenses= () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getFutureExpensesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getFutureExpensesFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/analytics/future-expenses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const futureExpenses = await checkResponse(response);
    dispatch(getFutureExpensesSuccess(futureExpenses));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getFutureExpensesFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getFutureExpensesFailed("An unknown error occurred"));
    }
  }
};
