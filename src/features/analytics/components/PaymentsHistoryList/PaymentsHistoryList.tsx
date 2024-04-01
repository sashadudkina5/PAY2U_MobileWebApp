import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentsHistoryListStyles from "./PaymentsHistoryList.module.scss";
import PaymentItem from "../PaymentItem/PaymentItem"

interface iPaymentsHistoryListProps {
  title: string;
}

const PaymentsHistoryList = ({ title }: iPaymentsHistoryListProps) => {

  // const payments = [
  //   { service: 'Spotify', plan: 'Индивидуальная подписка', amount: 250, date: '2024-02-27', cashback: true },
  //   // ... other payments
  // ];

  // // Group payments by month
  // const paymentsByMonth = payments.reduce((acc, payment) => {
  //   const month = new Date(payment.date).toLocaleString('default', { month: 'long' });
  //   if (!acc[month]) {
  //     acc[month] = [];
  //   }
  //   acc[month].push(payment);
  //   return acc;
  // }, {});

  return (
    <div className={PaymentsHistoryListStyles.historyListWrapper}>
    {/* //   <h1 className={PaymentsHistoryListStyles.historyListTitle}>{title}</h1>
    //   <input type="search" />
    //   {Object.entries(paymentsByMonth).map(([month, payments]) => (
    //     <div key={month}>
    //       <h2 className={PaymentsHistoryListStyles.historyListMonth}>{month.toUpperCase()}</h2>
    //       <ul className={PaymentsHistoryListStyles.historyList}>
    //         {payments.map((payment, index) => (
    //           <li key={index}>
    //             <PaymentItem cashback={payment.cashback} />
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))} */}
    </div>
  );
};

export default PaymentsHistoryList;
