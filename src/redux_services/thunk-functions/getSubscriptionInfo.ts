import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getSubscriptionInfoRequest,
    getSubscriptionInfoSuccess,
    getSubscriptionInfoFailed,
} from "../slices/subsrcriptionInfoSlice";

/**
 * Thunk function for fetching selected subscription info and dispatching it to the store.
 * If the request is successful, the fetched selected subscription info
 * is dispatched to the store using the `getSubscriptionInfoSuccess` action.
 * 
 * @param {string} subscriptionID - ID of selected subscription.
 * @example
 * // Dispatch function to selected subscription info and update the state in Redux
 * dispatch(getSubscriptionInfo('12345'));
 */

export const getSubscriptionInfo = (subscriptionID: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getSubscriptionInfoRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getSubscriptionInfoFailed("AccessToken is missing"));
      return;
    }

    const subscriptionInfo = await fetchWithRefresh(`${BASE_URL}/subscriptions/${subscriptionID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getSubscriptionInfoSuccess(subscriptionInfo));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getSubscriptionInfoFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getSubscriptionInfoFailed("An unknown error occurred"));
    }
  }
};
