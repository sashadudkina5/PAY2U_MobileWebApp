import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getActiveSubscriptionsRequest,
    getActiveSubscriptionsSuccess,
    getActiveSubscriptionsFailed,
} from "../slices/activeSubscriptions";

/**
 * Thunk function for fetching user's active subscriptions and dispatching it to the store.
 * If the request is successful, the fetched user's active subscriptions
 * are dispatched to the store using the `getActiveSubscriptionsSuccess` action.
 * 
 * @param {boolean} isActive - true if we request active subscriptions, otherwise deactivated.
 *
 * @example
 * // Dispatch function to get user's active subscriptions and update the state in Redux
 * dispatch(getActiveSubscriptions('isActive'));
 */

export const getActiveSubscriptions = (isActive:boolean) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getActiveSubscriptionsRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getActiveSubscriptionsFailed("AccessToken is missing"));
      return;
    }
//const isActive = 1; // This could be dynamic based on your application's state or props
//const queryParams = new URLSearchParams({ is_active: isActive }).toString();

    const response = await fetchWithRefresh(`${BASE_URL}/subscriptions/??is_active=${isActive}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const activeSubscriptions = await checkResponse(response);
    dispatch(getActiveSubscriptionsSuccess(activeSubscriptions));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getActiveSubscriptionsFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getActiveSubscriptionsFailed("An unknown error occurred"));
    }
  }
};
