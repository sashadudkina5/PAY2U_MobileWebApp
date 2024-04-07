import {
    getLogoutSuccess, getLogoutFailed, getLogoutRequest
  } from "../slices/authSlice";
  import { AppDispatch } from "../store";

import { deleteCookie } from "../../utils/api";
  /**
   * This function deletes token from local storage and updates redux store. It logs the user out without making API requst
   * 
   * @example
   * // Dispatch the logout thunk to initiate the logout process
   * dispatch(logoutThunk());
   */
  export const logoutThunk = () => (dispatch: AppDispatch) => {
    try {
      dispatch(getLogoutRequest());
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      dispatch(getLogoutSuccess());
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        dispatch(getLogoutFailed(message));
      }
  };
  