import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getPeriodCashbackRequest,
    getPeriodCashbackSuccess,
    getPeriodCashbackFailed
} from "../slices/cashbackSlice";

/**
 * Thunk function for fetching cashback sum and dispatching it them the store.
 * If the request is successful, the fetched cashback sum
 * are dispatched to the store using the `getPeriodCashbackSuccess` action.
 * 
 * @param {string} startDate - start date.
 * @param {string} endDate - end date.
 *
 * @example
 * // Dispatch function to get cashback sum and update the state in Redux
 * dispatch(getCashbackPeriod('2024-01-02', '2024-01-02'));
 */

export const getCashbackPeriod = (startDate: string, endDate: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPeriodCashbackRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getPeriodCashbackFailed("AccessToken is missing"));
      return;
    }

    const periodCashback = await fetchWithRefresh(`${BASE_URL}/analytics/cashback/?start_date=${startDate}&end_date=${endDate}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getPeriodCashbackSuccess(periodCashback));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getPeriodCashbackFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getPeriodCashbackFailed("An unknown error occurred"));
    }
  }
};
