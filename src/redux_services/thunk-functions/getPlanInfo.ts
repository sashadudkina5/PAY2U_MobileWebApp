import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getPlanInfoRequest,
    getPlanInfoSuccess,
    getPlanInfoFailed,
} from "../slices/planInfoSlice";

/**
 * Thunk function for fetching selected plan info and dispatching it to the store.
 * If the request is successful, the fetched selected plan info
 * is dispatched to the store using the `getPlanInfoSuccess` action.
 * 
 * @param {string} serviceID - ID of selected service.
 * @param {string} planID - ID of selected service plan.
 * @example
 * // Dispatch function to selected plan info and update the state in Redux
 * dispatch(getPlanInfo('12345', '123'));
 */

export const getPlanInfo = (serviceID: string | undefined, planID: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPlanInfoRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getPlanInfoFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/services/${serviceID}/tariffs/${planID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getPlanInfoSuccess({ planId: planID, info: response }));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getPlanInfoFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getPlanInfoFailed("An unknown error occurred"));
    }
  }
};
