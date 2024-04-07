import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getActiveSubscriptionsRequest,
    getActiveSubscriptionsSuccess,
    getActiveSubscriptionsFailed,
} from "../slices/activeSubscriptionsSlice";

/**
 * Thunk function for fetching user's active subscriptions and dispatching it to the store.
 * If the request is successful, the fetched user's active subscriptions
 * are dispatched to the store using the `getActiveSubscriptionsSuccess` action.
 * 
 * @param {number} isActive - 1 if we request active subscriptions, otherwise deactivated.
 *
 * @example
 * // Dispatch function to get user's active subscriptions and update the state in Redux
 * dispatch(getActiveSubscriptions('isActive'));
 */

export const getActiveSubscriptions = (isActive:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getActiveSubscriptionsRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getActiveSubscriptionsFailed("AccessToken is missing"));
      return;
    }

    const activeSubscriptions = await fetchWithRefresh(`${BASE_URL}/subscriptions/?is_active=${isActive}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getActiveSubscriptionsSuccess(activeSubscriptions));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(getActiveSubscriptionsFailed(err.message));
    } else {
      dispatch(getActiveSubscriptionsFailed("An unknown error occurred"));
    }
  }
};

