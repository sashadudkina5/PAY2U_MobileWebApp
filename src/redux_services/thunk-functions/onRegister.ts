import {
    getRegisterRequest, getRegisterSuccess, getRegisterFailed
  } from "../slices/authSlice";
  import { BASE_URL } from "../../utils/api";
  import { AppDispatch } from "../store";
  import { checkResponse } from "../../utils/api";
  
  interface IRegisterData {
    password: string;
    email: string;
  }
  
  /**
   * This function takes user register data (email and password), dispatches a register request action, and attempts to log the user in
   * by making a POST request to the register endpoint with the provided credentials.
   *
   * @param {IRegisterData} loginData - Object containing the user's email and password.
   * 
   * @example
   * // Dispatch the register thunk with user's login data to initiate the login process
   * dispatch(registerThunk({ email: 'user@example.com', password: 'password123' }));
   */
  export const registerThunk = (registerData: IRegisterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getRegisterRequest());
  
      const response = await fetch(`${BASE_URL}/registration/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
  
      const registerResponse = await checkResponse(response);
  
      dispatch(getRegisterSuccess());

    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        dispatch(getRegisterFailed(message));
      }
  };
  