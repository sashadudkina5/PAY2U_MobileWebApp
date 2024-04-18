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

    const notActivatedServices = await fetchWithRefresh(`${BASE_URL}/services/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getInactiveServicesSuccess(notActivatedServices));

    if (!notActivatedServices.ok) {
      const errorResponse = await notActivatedServices.json();
      let errorMessages = "";

      if (errorResponse.code) {
        errorMessages.concat(errorResponse.code);
      }
      dispatch(getInactiveServicesFailed(errorMessages));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred';
    dispatch(getInactiveServicesFailed(errorMessage));
  }
};
