import React from 'react';
import AppStyles from "./App.module.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PhoneNumberSubscription from './features/subscribtion-process/pages/phone-number';
import PaymentConfirm from "./features/subscribtion-process/pages/payment-confirm";
import SubscriptionWarning from "./features/subscribtion-process/pages/warning";
import SubscriptionSuccess from "./features/subscribtion-process/pages/success";
import ServicePage from "./features/new-user-process/pages/service-card";

function App() {
  return (
    <div className={AppStyles.page_wrapper}>
      <Routes>
      <Route path="/subscription" element={<PhoneNumberSubscription />} />
      <Route path="/subscription/confirm" element={<PaymentConfirm />} />
      <Route path="/subscription/warning" element={<SubscriptionWarning />} />
      <Route path="/subscription/success" element={<SubscriptionSuccess />} />
      <Route path="/main/card" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
