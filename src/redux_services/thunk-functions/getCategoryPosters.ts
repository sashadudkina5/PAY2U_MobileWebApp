import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getCategoryPostersRequest,
    getCategoryPostersSuccess,
    getCategoryPostersFailed,
} from "../slices/categoryPostersSlice";

/**
 * Thunk function for fetching posters and dispatching it to the store.
 * If the request is successful, the fetched posters
 * are dispatched to the store using the `getCategoryPostersSuccess` action.
 * 
 * @param {string} serviceID - ID of selected service.
 * @param {string} categoryID - ID of selected category.
 *
 * @example
 * // Dispatch function to get posters and update the state in Redux
 * dispatch(getCategoryPosters('12345', '123'));
 */

export const getCategoryPosters = (serviceID: string, categoryID: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getCategoryPostersRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getCategoryPostersFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/services/${serviceID}/image-categories/${categoryID}/images`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const posters = await checkResponse(response);
    dispatch(getCategoryPostersSuccess(posters));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getCategoryPostersFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getCategoryPostersFailed("An unknown error occurred"));
    }
  }
};
