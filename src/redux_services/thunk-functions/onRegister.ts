import {
    getRegisterRequest, getRegisterSuccess, getRegisterFailed
  } from "../slices/authSlice";
  import { BASE_URL } from "../../utils/api";
  import { AppDispatch } from "../store";
import { loginThunk } from "./onLogin";

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
  
      if (!response.ok) {
        const errorResponse = await response.json();
        let errorMessages = [];
  
        if (errorResponse.password) {
          errorMessages.push(...errorResponse.password);
        }
  
        if (errorResponse.email) {
          errorMessages.push(...errorResponse.email);
        }
  
        dispatch(getRegisterFailed(errorMessages.join(' ')));
      } else {
        dispatch(getRegisterSuccess());
        dispatch(loginThunk(registerData));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred';
      dispatch(getRegisterFailed(errorMessage));
    }
  };
  