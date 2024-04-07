import { createSlice } from "@reduxjs/toolkit";

  interface ISubscriptionState {
    logo: {
      logo: string;
    },
    price: number,
    period: string,
    trialPeriod: string,
    trialPrice: number,
    name: {
      title: string
    },
    trialCount: number,
    tariffID: string
  }

const initialState: ISubscriptionState = {
    logo: {
      logo: ""
    },
    price: 0,
    period: "",
    trialPeriod: "",
    trialPrice: 0,
    trialCount: 0,
    name: {
      title: ""
    },
    tariffID: ""
};

const sunscriptionSlice = createSlice({
  name: "sunscription",
  initialState,
  reducers: {
    getSubscription(state, action) {
        state.logo = action.payload.logo
        state.price = action.payload.price
        state.period = action.payload.period
        state.trialPeriod = action.payload.trialPeriod
        state.trialPrice = action.payload.trialPrice
        state.name = action.payload.name
        state.trialCount = action.payload.trialCount
        state.tariffID = action.payload.tariffID
    },

    clearSubscription(state) {
        state.logo = initialState.logo 
        state.price = initialState.price
        state.period = initialState.period
        state.trialPeriod = initialState.trialPeriod
        state.trialCount = initialState.trialCount
        state.trialPrice = initialState.trialPrice
        state.name = initialState.name
        state.tariffID = initialState.tariffID
    },    
  },
});

export const {
    getSubscription,
    clearSubscription
} = sunscriptionSlice.actions;

export default sunscriptionSlice.reducer;
