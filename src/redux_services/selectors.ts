import { RootState } from "./store";
import { createSelector } from "reselect";

export const getActiceSubscriptionsList = (state: RootState) =>
  state.activeSubscriptions.activeSubscriptions.data;

export const getAuthStatus = (state: RootState) => state.authInfo.loggedIn;

export const getCashbackTotal = (state: RootState) =>
  state.cashback.cashbackTotal;

export const getCashbackPeriod = (state: RootState) =>
  state.cashback.cashbackPeriod;

export const getCategoryExpenses = (state: RootState) =>
  state.categoryExpenses.categoryExpenses;

export const getTotalExpenses = (state: RootState) =>
  state.categoryExpenses.totalExpenses;

export const getFutureExpenses = (state: RootState) =>
  state.futureExpenses.futureExpenses;

export const getSelectedPaymentData = (state: RootState) =>
  state.selectedPayment.selectedPaymentItem;

export const getPaymentHistory = (state: RootState) =>
  state.paymentHistory.paymentHistory;

export const getSelectedPlanInfo = (state: RootState) =>
  state.selectedPlanInfo.selectedPlanInfo;

export const getPopularServicesList = (state: RootState) =>
  state.popularServices.popularServices.data;

export const getReactivateServiceStatus = (state: RootState) =>
  state.reactivateService.reactivatedSuccess;

export const getSuspendServiceStatus = (state: RootState) =>
  state.suspendService.suspendedSuccess;

export const getSelectedServicePlans = (state: RootState) =>
  state.servicePlans.servicePlans.data;

export const getSelectedSubscriptionInfo = (state: RootState) =>
  state.selectedSubscriptionInfo.selectedSubscriptionInfo.data;

export const getSuspendedSubscriptionsList = (state: RootState) =>
  state.suspendedSubscriptions.suspendedSubscriptions.data;

// export const getInactiveSubscriptionsList = (state: RootState) =>
//   state.inactiveServiceInfo.inactiveServiceInfo;

export const getInactiveServiceDetails = (state: RootState) =>
  state.inactiveServiceInfo.inactiveServiceInfo;
