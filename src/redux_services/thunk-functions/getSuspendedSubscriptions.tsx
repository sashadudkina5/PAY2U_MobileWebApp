import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getSuspendedSubscriptionsRequest,
    getSuspendedSubscriptionsSuccess,
    getSuspendedSubscriptionsFailed,
} from "../slices/suspendedSubscriptions";

/**
 * Thunk function for fetching user's suspended subscriptions and dispatching it to the store.
 * If the request is successful, the fetched user's suspended subscriptions
 * are dispatched to the store using the `getSuspendedSubscriptionsSuccess` action.
 * 
 * @param {number} isActive - 0 if we request suspended subscriptions, otherwise active.
 *
 * @example
 * // Dispatch function to get user's suspended subscriptions and update the state in Redux
 * dispatch(getSuspendedSubscriptions('isActive'));
 */

export const getSuspendedSubscriptions = (isActive:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getSuspendedSubscriptionsRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getSuspendedSubscriptionsFailed("AccessToken is missing"));
      return;
    }

    const suspendedSubscriptions = await fetchWithRefresh(`${BASE_URL}/subscriptions/?is_active=${isActive}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getSuspendedSubscriptionsSuccess(suspendedSubscriptions));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getSuspendedSubscriptionsFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getSuspendedSubscriptionsFailed("An unknown error occurred"));
    }
  }
};
