import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getSelectedPaymentRequest,
    getSelectedPaymentSuccess,
    getSelectedPaymentFailed,
} from "../slices/paymentDetailsSlice";

/**
 * Thunk function for fetching user's payment item and dispatching it to the store.
 * If the request is successful, the fetched payment item
 * is dispatched to the store using the `getSelectedPaymentSuccess` action.
 *
 * @param {string} paymentItemID - ID of selected payment item.
 * 
 * @example
 * // Dispatch function to get user's payment item and update the state in Redux
 * dispatch(getPaymentDetails('123'));
 */

export const getPaymentDetails = (paymentItemID: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getSelectedPaymentRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getSelectedPaymentFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/payment-history/${paymentItemID}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const selectedPeymentItem = await checkResponse(response);
    dispatch(getSelectedPaymentSuccess(selectedPeymentItem));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getSelectedPaymentFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getSelectedPaymentFailed("An unknown error occurred"));
    }
  }
};
