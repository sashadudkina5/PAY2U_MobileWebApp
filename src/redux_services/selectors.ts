import { RootState } from "./store";

export const getActiceSubscriptionsList = (state: RootState) =>
  state.activeSubscriptions.activeSubscriptions.data;

export const getAuthStatus = (state: RootState) => state.authInfo.loggedIn;

export const getRegisterError = (state: RootState) => state.authInfo.registerError;

export const getLoginError = (state: RootState) => state.authInfo.loginError;

export const getCategories = (state: RootState) =>
  state.serviceCategories.serviceCategories.data;

export const getCashbackTotal = (state: RootState) =>
  state.cashback.cashbackTotal;

export const getCashbackMonthly = (state: RootState) =>
  state.cashback.cashbackPeriod;

export const getCategoryExpensesSum = (state: RootState) =>
  state.categoryExpenses.categoryExpenses;

export const getAllExpenses = (state: RootState) =>
  state.categoryExpenses.totalExpenses;


export const getAllExpensesLoading = (state: RootState) =>
state.categoryExpenses.isLoading;

export const getFutureExpensesSum = (state: RootState) =>
  state.futureExpenses.futureExpenses;

export const getSelectedPaymentData = (state: RootState) =>
  state.selectedPayment.selectedPaymentItem;

export const getAllPayments = (state: RootState) =>
  state.paymentHistory.paymentHistory.data;

  export const getSelectedPlanInfo = (state:RootState, planId: string) => state.selectedPlanInfo.plans[planId];

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

export const getInactiveServiceDetails = (state: RootState) =>
  state.inactiveServiceInfo.inactiveServiceInfo;

  export const getCatalogList = (state: RootState) =>
  state.inactiveServices.userInactiveServices.data


  export const getPopularImages = (state: RootState) =>
  state.categoryPosters.categoryPosters.dataPopular

  export const getExclusiveImages = (state: RootState) =>
  state.categoryPosters.categoryPosters.dataExclusive

  export const currentSubscription = (state: RootState) =>
  state.sunscriptionSlice

  export const addNewServiceError = (state: RootState) =>
  state.addNewServiceSlice.addedSuccess
