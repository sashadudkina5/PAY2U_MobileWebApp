import React, {useEffect, useLayoutEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import AppStyles from "./App.module.scss";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PhoneNumberSubscription from './features/subscribtion-process/pages/phone-number';
import PaymentConfirm from "./features/subscribtion-process/pages/payment-confirm";
import SubscriptionWarning from "./features/subscribtion-process/pages/warning";
import SubscriptionSuccess from "./features/subscribtion-process/pages/success";
import ServicePage from "./features/new-user-process/pages/service-card";
import NewUserMainPage from "./features/new-user-process/pages/main-page";
import DetailsPage from "./features/new-user-process/pages/details";
import ActiveUserMainPage from "./features/active-user/pages/active-user-main";
import MySubscriptionsPage from "./features/active-user/pages/my-subscriptions-page";
import ActiveSubscription from "./features/active-user/pages/active-subscription";
import SuspendedSubscription from "./features/active-user/pages/suspended-supscription";
import Authorization from "./global-components/Authorization/Authorization";
import CashbackPage from "./features/analytics/pages/cashback-page";
import ExpensesPage from "./features/analytics/pages/expenses-page";
import ForecastPage from "./features/analytics/pages/forecast-page";
import SubscriptionError from "./features/subscribtion-process/pages/error";
import Page404 from "./global-components/Page404/Page404";
import { getPopularServices } from "./redux_services/thunk-functions/getPopularServices";
import {AppDispatch} from "./redux_services/store"
import { useAppDispatch } from "./utils/hooks";
import { getUserInactiveServices } from "./redux_services/thunk-functions/getUserInactiveServices";
import ProtectedRoute from './global-components/ProtectedRoute/ProtectedRpute';
import { useAppSelector } from './utils/hooks';
import { getTotalExpenses } from './redux_services/thunk-functions/getTotalExpenses';
import { firstDayLastYear, lastDayThisYear } from './utils/dates';
import { getActiveSubscriptions } from './redux_services/thunk-functions/getActiveSubscriptions';
import { getLoginSuccess } from './redux_services/slices/authSlice';
import { getCookie } from './utils/api';
import { getActiceSubscriptionsList, getAllExpenses } from './redux_services/selectors';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
  
    if (accessToken) {
      dispatch(getLoginSuccess());
    }
  }, [dispatch, accessToken]);

  const isAuthenticated = useAppSelector(state => state.authInfo.loggedIn);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getPopularServices());
      dispatch(getUserInactiveServices());
      dispatch(getActiveSubscriptions(1));
      dispatch(getTotalExpenses(firstDayLastYear, lastDayThisYear));
    }
  }, [dispatch, isAuthenticated]);

  console.log(isAuthenticated)



  return (
    <div className={AppStyles.page_wrapper}>
        <Routes>
          <Route path="/auth" element={<Authorization />} />
          <Route path="/subscription" element={<ProtectedRoute element={<PhoneNumberSubscription />} />} />
          <Route path="/subscription/confirm" element={<ProtectedRoute element={<PaymentConfirm />} />} />
          <Route path="/subscription/warning" element={<ProtectedRoute element={<SubscriptionWarning />} />} />
          <Route path="/subscription/success" element={<ProtectedRoute element={<SubscriptionSuccess />} />} />
          <Route path="/subscription/error" element={<ProtectedRoute element={<SubscriptionError />} />} />
          <Route path="/main/card/:id" element={<ProtectedRoute element={<ServicePage />} />} />
          <Route path="/main" element={<ProtectedRoute element={<NewUserMainPage />} />} />
          <Route path="/main/details" element={<ProtectedRoute element={<DetailsPage />} />} />
          <Route path="/active/main" element={<ProtectedRoute element={<ActiveUserMainPage />} />} />
          <Route path="/active/main/subscriptions" element={<ProtectedRoute element={<MySubscriptionsPage />} />} />
          <Route path="/active/main/subscriptions/activated/:id" element={<ProtectedRoute element={<ActiveSubscription />} />} />
          <Route path="/active/main/subscriptions/suspended" element={<ProtectedRoute element={<SuspendedSubscription />} />} />
          <Route path="/analytics/cashback" element={<ProtectedRoute element={<CashbackPage />} />} />
          <Route path="/analytics/expenses" element={<ProtectedRoute element={<ExpensesPage />} />} />
          <Route path="/analytics/forecast" element={<ProtectedRoute element={<ForecastPage />} />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default App;
