import { BASE_URL } from "../../utils/api";
import { AppDispatch } from "../store";
import { getCookie, fetchWithRefresh } from "../../utils/api";
import {
    addNewServiceRequest,
    addNewServiceSuccess,
    addNewServiceFailed,
} from "../slices/addNewServiceSlice";
import { getActiveSubscriptions } from "./getActiveSubscriptions";

  /**
   * This function takes selected plan ID and phone number, dispatches a addNewService request action.
   *
   * @param {string} tariffId - Id of selected plan.
   * @param {string} phoneNumber - Phone number.
   * 
   * @example
   * // Dispatch the thunk with selected plan ID and phone number.
   * dispatch(addNewService("123", "213"));
   */

export const addNewService = (tariffId: string, phoneNumber: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addNewServiceRequest());
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      console.error("AccessToken is missing");
      dispatch(addNewServiceFailed("AccessToken is missing"));
      return;
    }

    const addNewServiceResponse = await fetchWithRefresh(`${BASE_URL}/subscriptions/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ tariff: tariffId, phone_number: phoneNumber }),
    });
  
    dispatch(addNewServiceSuccess(addNewServiceResponse));
    dispatch(getActiveSubscriptions(1));

} catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    dispatch(addNewServiceFailed(message));
  }
};
