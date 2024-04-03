import {
    getLoginRequest,
    getLoginSuccess,
    getLoginFailed,
  } from "../slices/authSlice";
  import { BASE_URL } from "../../utils/api";
  import { AppDispatch } from "../store";
  import { setCookie } from "../../utils/api";
  import { checkResponse } from "../../utils/api";
  
  interface ILoginData {
    password: string;
    email: string;
  }
  
  /**
   * This function takes user login data (email and password), dispatches a login request action, and attempts to log the user in
   * by making a POST request to the login endpoint with the provided credentials. If the login is successful, it processes the response
   * to dispatch a login success action with the user data, and stores the access and refreshToken in cookies.
   *
   * @param {ILoginData} loginData - Object containing the user's email and password.
   * 
   * @example
   * // Dispatch the login thunk with user's login data to initiate the login process
   * dispatch(loginThunk({ email: 'user@example.com', password: 'password123' }));
   */
  export const loginThunk = (loginData: ILoginData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getLoginRequest());
  
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      const loginResponse = await checkResponse(response);
  
      dispatch(getLoginSuccess());
      setCookie("accessToken", loginResponse.access);
      setCookie("refreshToken", loginResponse.refresh);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        dispatch(getLoginFailed(message));
      }
  };
  