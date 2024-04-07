import React, {useEffect} from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList"
import { AppDispatch } from "../../../redux_services/store";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { getCashbackPeriod } from "../../../redux_services/thunk-functions/getCashbackPeriod";
import {
  getCashbackMonthly,
  getAllExpenses,
} from "../../../redux_services/selectors";
import { getCashbackTotal } from "../../../redux_services/selectors";
import { getTotalCashback } from "../../../redux_services/thunk-functions/getCashbackTotal";
import { getTotalExpenses } from "../../../redux_services/thunk-functions/getTotalExpenses";
import {getCurrentMonth, getCurrentMonthCashback} from "../../../utils/monthsStrings";
import {firstDayFormatted, lastDayFormatted} from "../../../utils/dates"



const CashbackPage = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalCashback());
    dispatch(getCashbackPeriod(firstDayFormatted, lastDayFormatted));
    dispatch(getTotalExpenses(firstDayFormatted, lastDayFormatted));
  }, [dispatch]);



  const totalCashback = useAppSelector(getCashbackTotal);
  const monthlyCashback = useAppSelector(getCashbackMonthly);


  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} path="/active/main"/>
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.analyticsBrief}>
        <div className={PageStyles.analyticsCashbackPeriodWrapper}>
          {monthlyCashback ? <span className={PageStyles.analyticsCashbackFutureSum}>+ {monthlyCashback} ₽</span>: <span className={PageStyles.analyticsCashbackFutureSum}>0 ₽</span>}
          
          <span className={PageStyles.analyticsCashbackFuturePeriod}>
            {" "}за {getCurrentMonthCashback()}
          </span>
        </div>
        <p className={PageStyles.analyticsCashbackFutureDate}>
          Зачислим 25 {getCurrentMonth()}
        </p>
        <p className={PageStyles.analyticsCashbackTotal}>
          {totalCashback} ₽ сэкономлено за весь период
        </p>
      </div>

      <section>
        <PaymentsHistoryList title="История поступлений" expenses={false} cashback={true}/>
      </section>
    </div>
  );
};

export default CashbackPage;
