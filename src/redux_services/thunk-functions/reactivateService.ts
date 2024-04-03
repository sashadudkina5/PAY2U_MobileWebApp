import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    reactivateServiceRequest,
    reactivateServiceSuccess,
    reactivateServiceFailed,
} from "../slices/reactivateServiceSlice";

  /**
   * This function takes selected service ID, dispatches a reactivateServiceRequest request action.
   *
   * @param {string} serviceId - Id of selected subscription.
   *  @param {boolean} autoPay - need to be true to reactivate a subscription.
   * 
   * @example
   * // Dispatch the thunk with selected plan ID and phone number.
   * dispatch(reactivateService("123", autoPay));
   */

export const reactivateService = (serviceId: string, autoPay: boolean) => async (dispatch: AppDispatch) => {
  try {
    dispatch(reactivateServiceRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(reactivateServiceFailed("AccessToken is missing"));
      return;
    }

    const response = await fetchWithRefresh(`${BASE_URL}/subscriptions/${serviceId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ auto_pay: autoPay}),
    });

    const reactivateServiceResponse = await checkResponse(response);
    dispatch(reactivateServiceSuccess());

} catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    dispatch(reactivateServiceFailed(message));
  }
};
