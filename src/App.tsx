import React from 'react';
import AppStyles from "./App.module.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PhoneNumberSubscription from './features/subscribtion-process/pages/phone-number';
import PaymentConfirm from "./features/subscribtion-process/pages/payment-confirm";
import SubscriptionWarning from "./features/subscribtion-process/pages/warning";
import SubscriptionSuccess from "./features/subscribtion-process/pages/success";

function App() {
  return (
    <div className={AppStyles.page_wrapper}>
      <Routes>
      <Route path="/subscription" element={<PhoneNumberSubscription />} />
      <Route path="/subscription/confirm" element={<PaymentConfirm />} />
      <Route path="/subscription/warning" element={<SubscriptionWarning />} />
      <Route path="/subscription/success" element={<SubscriptionSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
