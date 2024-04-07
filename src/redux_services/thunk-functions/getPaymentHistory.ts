import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getPaymentHistoryRequest,
    getPaymentHistorySuccess,
    getPaymentHistoryFailed,
} from "../slices/paymentHistorySlice";

/**
 * Thunk function for fetching user's payment history and dispatching it to the store.
 * If the request is successful, the fetched payment history
 * is dispatched to the store using the `getPaymentHistorySuccess` action.
 *
 * @example
 * // Dispatch function to get user's payment history and update the state in Redux
 * dispatch(getPaymentHistory());
 */

export const getPaymentHistory = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPaymentHistoryRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getPaymentHistoryFailed("AccessToken is missing"));
      return;
    }

    const paymentHistory = await fetchWithRefresh(`${BASE_URL}/payment-history/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getPaymentHistorySuccess(paymentHistory));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getPaymentHistoryFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getPaymentHistoryFailed("An unknown error occurred"));
    }
  }
};
