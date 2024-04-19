import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    getServicePlansRequest,
    getServicePlansSuccess,
    getServicePlansFailed,
} from "../slices/servicePlansSlice";

/**
 * Thunk function for fetching selected service's plans and dispatching it to the store.
 * If the request is successful, the fetched service's plans
 * are dispatched to the store using the `getServicePlansSuccess` action.
 * 
 * @param {string} serviceID - ID of selected service.
 *
 * @example
 * // Dispatch function to get service's plans and update the state in Redux
 * dispatch(getServicePlans('12345'));
 */

export const getServicePlans = (serviceID: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getServicePlansRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(getServicePlansFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/services/${serviceID}/tariffs/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getServicePlansSuccess(response));
  } catch (err) {
    if (err instanceof Error) {
      console.error("An unexpected error occurred:", err.message);
      dispatch(getServicePlansFailed(err.message));
    } else {
      console.error("An unexpected error occurred:", err);
      dispatch(getServicePlansFailed("An unknown error occurred"));
    }
  }
};
