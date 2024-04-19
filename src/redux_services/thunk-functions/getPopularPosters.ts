import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getCategoryPostersRequest,
    getPopularPostersSuccess,
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

export const getPopularPosters = (serviceID: string | undefined, categoryID: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getCategoryPostersRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getCategoryPostersFailed("AccessToken is missing"));
      return;
    }

    const posters = await fetchWithRefresh(`${BASE_URL}/services/${serviceID}/image-categories/${categoryID}/images`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getPopularPostersSuccess(posters));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(getCategoryPostersFailed(err.message));
    } else {
      dispatch(getCategoryPostersFailed("An unknown error occurred"));
    }
  }
};
