import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { ISubscriptionInfo as addNewServiceResponse, TAddNewSubscriptionState} from "../../utils/types";


export const initialState: TAddNewSubscriptionState = {
    addedSuccess: false,
    isLoading: false,
    error: null,
    newAdded: null,
};

const addNewServiceSlice = createSlice({
  name: "addNewService",
  initialState,
  reducers: {
    addNewServiceRequest(state) {
      state.isLoading = true;
    },
    addNewServiceSuccess(
      state, action: PayloadAction<addNewServiceResponse>
    ) {
      state.addedSuccess = true;
      state.isLoading = false;
      state.newAdded = action.payload;
    },
    addNewServiceFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.addedSuccess = false;
      state.error = action.payload;
    },
    clearNewServiceError(state) {
      state.isLoading = false;
      state.addedSuccess = false;
      state.error = initialState.error;
    },
  },
});

export const {
    addNewServiceRequest,
    addNewServiceSuccess,
    addNewServiceFailed,
    clearNewServiceError
} = addNewServiceSlice.actions;

export default addNewServiceSlice.reducer;
