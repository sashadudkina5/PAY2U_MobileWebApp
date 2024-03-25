import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
  getInactiveServicesRequest,
  getInactiveServicesSuccess,
  getInactiveServicesFailed,
} from "../slices/userServicesSlice";

/**
 * Thunk function for fetching user's inactive services and dispatching them to the store.
 * If the request is successful, the fetched inactive services
 * are dispatched to the store using the `getInactiveServicesSuccess` action.
 *
 * @example
 * // Dispatch function to get user's inactive services and update the state in Redux
 * dispatch(getUserInactiveServices());
 */

export const getUserInactiveServices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getInactiveServicesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getInactiveServicesFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/services/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const notActivatedServices = await checkResponse(response);
    dispatch(getInactiveServicesSuccess(notActivatedServices));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getInactiveServicesFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getInactiveServicesFailed("An unknown error occurred"));
    }
  }
};
