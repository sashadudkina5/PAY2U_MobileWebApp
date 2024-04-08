import React, {useEffect} from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { getFutureExpenses } from "../../../redux_services/thunk-functions/getFutureExpenses";
import { getAllExpenses, getFutureExpensesSum } from "../../../redux_services/selectors";
import { AppDispatch } from "../../../redux_services/store";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { getTotalExpenses } from "../../../redux_services/thunk-functions/getTotalExpenses";
import { firstDayFormatted, lastDayFormatted } from "../../../utils/dates";

const ForecastPage = () => {

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFutureExpenses());
  }, [dispatch]);

  const futureExpensesSum = useAppSelector(getFutureExpensesSum)

  dispatch(getTotalExpenses(firstDayFormatted, lastDayFormatted));
  const totalExpenses = useAppSelector(getAllExpenses);
  console.log(futureExpensesSum)

  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} path="/active/main"/>
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.forecastBrief}>
        <div className={PageStyles.forecastWrapper}>
          <p className={PageStyles.forecastSum}>- {futureExpensesSum} ₽</p>
          <p className={PageStyles.forecastSumPeriod}>ещё спишется в марте</p>
        </div>
        <ProgressBar completed={totalExpenses} total={futureExpensesSum + totalExpenses} />

        <div className={PageStyles.forecastInfo}>
            <div className={PageStyles.forecastExpendses}>
          <span style={{ color: "#19B28D" }}>•</span>{" "}
          <span className={PageStyles.forecastStatus}>уже списалось</span>
          </div>
        <p className={PageStyles.forecastSpent}>{totalExpenses} ₽</p>
        </div>
      </div>

      <section>
        <PaymentsHistoryList title="История списаний" expenses={true} cashback={false}/>
      </section>
    </div>
  );
};

export default ForecastPage;
