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
import activeSubscriptionsReducer from "./slices/activeSubscriptions"

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
    activeSubscriptions: activeSubscriptionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch