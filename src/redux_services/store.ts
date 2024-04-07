import { configureStore } from '@reduxjs/toolkit';
import inactiveServicesReducer from './slices/userServicesSlice'
import inactiveServiceInfoReducer from './slices/userInactiveServiceSlice'
import servicePlansReducer from './slices/servicePlansSlice'
import planInfoReducer from './slices/planInfoSlice'
import serviceCategoriesReducer from './slices/serviceCategoriesSlice'
import popularServicesReducer from './slices/popularServicesSlice'
import categoryPostersReducer from './slices/categoryPostersSlice'
import paymentHistoryReducer from './slices/paymentHistorySlice'
import selectedPaymentReducer from "./slices/paymentDetailsSlice"
import activeSubscriptionsReducer from "./slices/activeSubscriptionsSlice"
import suspendedSubscriptionsReducer from "./slices/suspendedSubscriptions"
import selectedSubscriptionInfoReducer from "./slices/subsrcriptionInfoSlice"
import addNewServiceSliceReducer from "./slices/addNewServiceSlice"
import suspendServiceReducer from "./slices/suspendServiceSlice"
import reactivateServiceReducer from "./slices/reactivateServiceSlice"
import categoryExpensesReducer from "./slices/categoryExpensesSlice";
import cashbackReducer from "./slices/cashbackSlice";
import futureExpensesReducer from "./slices/futureExpensesSlice";
import authInfoReducer from "./slices/authSlice";
import sunscriptionSliceReducer from "./slices/subscriptionProcessSlice"


export const store = configureStore({
  reducer: {
    inactiveServices: inactiveServicesReducer,
    inactiveServiceInfo: inactiveServiceInfoReducer,
    servicePlans: servicePlansReducer,
    selectedPlanInfo: planInfoReducer,
    serviceCategories: serviceCategoriesReducer,
    popularServices: popularServicesReducer,
    categoryPosters: categoryPostersReducer,
    paymentHistory: paymentHistoryReducer,
    selectedPayment: selectedPaymentReducer,
    activeSubscriptions: activeSubscriptionsReducer,
    suspendedSubscriptions: suspendedSubscriptionsReducer,
    selectedSubscriptionInfo: selectedSubscriptionInfoReducer,
    addNewServiceSlice: addNewServiceSliceReducer,
    suspendService: suspendServiceReducer,
    reactivateService: reactivateServiceReducer,
    categoryExpenses: categoryExpensesReducer,
    cashback: cashbackReducer,
    futureExpenses: futureExpensesReducer,
    authInfo: authInfoReducer,
    sunscriptionSlice: sunscriptionSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch