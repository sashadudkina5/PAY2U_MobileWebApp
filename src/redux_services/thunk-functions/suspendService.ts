import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    suspendServiceRequest,
    suspendServiceSuccess,
    suspendServiceFailed,
} from "../slices/suspendServiceSlice";

  /**
   * This function takes selected service ID, dispatches a suspendServiceRequest request action.
   *
   * @param {string} serviceId - Id of selected subscription.
   *  @param {boolean} autoPay - need to be false to suspend a subscription.
   * 
   * @example
   * // Dispatch the thunk with selected plan ID and phone number.
   * dispatch(suspendService("123", autoPay));
   */

export const suspendService = (serviceId: string, autoPay: boolean) => async (dispatch: AppDispatch) => {
  try {
    dispatch(suspendServiceRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(suspendServiceFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/subscriptions/${serviceId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ auto_pay: autoPay}),
    });

    const suspendServiceResponse = await checkResponse(response);
    dispatch(suspendServiceSuccess());

} catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    dispatch(suspendServiceFailed(message));
  }
};
