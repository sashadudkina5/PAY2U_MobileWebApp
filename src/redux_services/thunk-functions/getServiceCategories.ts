import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getServiceCategoriesRequest,
    getServiceCategoriesSuccess,
    getServiceCategoriesFailed,
} from "../slices/serviceCategoriesSlice";

/**
 * Thunk function for fetching service available categories and dispatching it to the store.
 * If the request is successful, the fetched categories
 * are dispatched to the store using the `getServiceCategoriesSuccess` action.
 * 
 * @param {string} serviceID - ID of selected service.
 *
 * @example
 * // Dispatch function to get service available categories and update the state in Redux
 * dispatch(getServiceCategories('12345'));
 */

export const getServiceCategories = (serviceID: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getServiceCategoriesRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getServiceCategoriesFailed("AccessToken is missing"));
      return;
    }

    const serviceCategories = await fetchWithRefresh(`${BASE_URL}/services/${serviceID}/image-categories/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getServiceCategoriesSuccess(serviceCategories));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getServiceCategoriesFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getServiceCategoriesFailed("An unknown error occurred"));
    }
  }
};
