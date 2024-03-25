import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getInactiveServiceInfoRequest,
    getInactiveServiceInfoSuccess,
    getInactiveServiceInfoFailed,
} from "../slices/userInactiveServiceSlice";

/**
 * Thunk function for fetching user's selected inactive service info and dispatching it to the store.
 * If the request is successful, the fetched inactive service info
 * is dispatched to the store using the `getInactiveServiceInfoSuccess` action.
 * 
 * @param {string} inactiveServiceID - ID of selected service.
 * 
 * @example
 * // Dispatch function to get user's inactive service info and update the state in Redux
 * dispatch(getInactiveServiceInfo('12345'));
 */

export const getInactiveServiceInfo = (inactiveServiceID: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getInactiveServiceInfoRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getInactiveServiceInfoFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/services/${inactiveServiceID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const inactiveServiceInfo = await checkResponse(response);
    dispatch(getInactiveServiceInfoSuccess(inactiveServiceInfo));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getInactiveServiceInfoFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getInactiveServiceInfoFailed("An unknown error occurred"));
    }
  }
};
