import React from 'react';
import AppStyles from "./App.module.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className={AppStyles.page_wrapper}>
      <Routes>
      <Route path="/subscription" element={<PhoneNumberSubscription />} />
      <Route path="/subscription/confirm" element={<PaymentConfirm />} />
      <Route path="/subscription/warning" element={<SubscriptionWarning />} />
      <Route path="/subscription/success" element={<SubscriptionSuccess />} />
      <Route path="/main/card" element={<ServicePage />} />
      <Route path="/main" element={<NewUserMainPage />} />
      <Route path="/main/details" element={<DetailsPage />} />
      <Route path="/active/main" element={<ActiveUserMainPage />} />
      <Route path="/active/main/subscriptions" element={<MySubscriptionsPage />} />
      <Route path="/active/main/subscriptions/activated" element={<ActiveSubscription />} />
      <Route path="/active/main/subscriptions/suspended" element={<SuspendedSubscription />} />
      </Routes>
    </div>
  );
}

export default App;
