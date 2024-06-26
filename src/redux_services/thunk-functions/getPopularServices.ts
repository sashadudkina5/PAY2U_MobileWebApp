import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getPopularServicesRequest,
    getPopularServicesSuccess,
    getPopularServicesFailed,
} from "../slices/popularServicesSlice";

/**
 * Thunk function for fetching a list of popular services and dispatching it to the store.
 * If the request is successful, the fetched list of popular services
 * are dispatched to the store using the `getPopularServicesSuccess` action.
 *
 * @example
 * // Dispatch function to get list of popular services and update the state in Redux
 * dispatch(getPopularServices());
 */

export const getPopularServices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPopularServicesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getPopularServicesFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/popular-services/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getPopularServicesSuccess(response));
    
    if (!response.ok) {
      const errorResponse = await response.json();
      let errorMessages = "";

      if (errorResponse.code) {
        errorMessages.concat(errorResponse.code);
      }
      dispatch(getPopularServicesFailed(errorMessages));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred';
    dispatch(getPopularServicesFailed(errorMessage));
  }
};
