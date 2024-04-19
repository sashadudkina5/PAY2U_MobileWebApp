import React, { useEffect, useMemo } from "react";
import PaymentsHistoryListStyles from "./PaymentsHistoryList.module.scss";
import PaymentItem from "../PaymentItem/PaymentItem";
import { getPaymentHistory } from "../../../../redux_services/thunk-functions/getPaymentHistory";
import { getAllPayments } from "../../../../redux_services/selectors";
import { AppDispatch } from "../../../../redux_services/store";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { IPaymentItem } from "../../../../utils/types";
import { format, getMonth } from "date-fns";
import { ru } from "date-fns/locale";
import { months } from "../../../../utils/monthsStrings";

interface iPaymentsHistoryListProps {
  title: string;
  expenses: boolean;
  cashback: boolean
}

type PaymentsByMonth = {
  [month: string]: IPaymentItem[];
};

const PaymentsHistoryList = ({ title, expenses, cashback }: iPaymentsHistoryListProps) => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaymentHistory());
  }, [dispatch]);

  const payments = useAppSelector(getAllPayments);

  const sortedPayments = useMemo(() => {
    return payments
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [payments]);

  const paymentsByMonth = useMemo(() => {
    return sortedPayments.reduce<PaymentsByMonth>((acc, payment) => {
      const monthIndex = getMonth(new Date(payment.date));
      const year = format(new Date(payment.date), "yyyy", { locale: ru });
      const month = months[monthIndex];
      const monthYear = `${month} ${year}`;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(payment);
      return acc;
    }, {});
  }, [sortedPayments]);

  return (
    <div className={PaymentsHistoryListStyles.historyListWrapper}>
      <h1 className={PaymentsHistoryListStyles.historyListTitle}>{title}</h1>
      {Object.keys(paymentsByMonth).map((month) => (
        <div key={month}>
          <h2 className={PaymentsHistoryListStyles.historyListMonth}>
            {month.toUpperCase()}
          </h2>
          <ul className={PaymentsHistoryListStyles.historyList}>
            {paymentsByMonth[month].map((payment) => (
              <li key={payment.id}>
                <PaymentItem
                  cashback={cashback ? true : false}
                  logo={payment.logo}
                  serviceTitle={payment.service_name}
                  tariffTitle={payment.tariff_name}
                  paymentDate={payment.date}
                  cashbackSum={cashback ? payment.cashback : payment.price}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PaymentsHistoryList;
