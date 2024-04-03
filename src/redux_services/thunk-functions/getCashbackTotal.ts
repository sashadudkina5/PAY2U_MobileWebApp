import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getTotalCashbackRequest,
    getTotalCashbackSuccess,
    getTotalCashbackFailed,
} from "../slices/cashbackSlice";

/**
 * Thunk function for fetching total cashback sum and dispatching it them the store.
 * If the request is successful, the fetched total cashback sum
 * are dispatched to the store using the `getTotalCashbackSuccess` action.
 *
 * @example
 * // Dispatch function to get total cashback sum and update the state in Redux
 * dispatch(getTotalCashback());
 */

export const getTotalCashback = (startDate: string, endDate: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getTotalCashbackRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getTotalCashbackFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/analytics/cashback`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const totalCashback = await checkResponse(response);
    dispatch(getTotalCashbackSuccess(totalCashback));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getTotalCashbackFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getTotalCashbackFailed("An unknown error occurred"));
    }
  }
};
