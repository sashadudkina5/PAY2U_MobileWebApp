import React, { useEffect } from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList";
import Chart from "../components/Chart/Chart";
import PeriodSelect from "../components/PeriodSelect/PeriodSelect";
import { AppDispatch } from "../../../redux_services/store";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { getTotalExpenses } from "../../../redux_services/thunk-functions/getTotalExpenses";
import { firstDayLastYear, lastDayThisYear } from "../../../utils/formats";
import { getCategoryExpenses } from "../../../redux_services/thunk-functions/getCategoryExpenses";
import {
  getAllExpenses,
  getAllExpensesLoading,
} from "../../../redux_services/selectors";
import Loading from "../../../global-components/Loading/Loading";

const ExpensesPage = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalExpenses(firstDayLastYear, lastDayThisYear));
    dispatch(getCategoryExpenses(firstDayLastYear, lastDayThisYear));
  }, [dispatch]);

  const totalExpenses = useAppSelector(getAllExpenses);
  const totalExpensesLoading = useAppSelector(getAllExpensesLoading);

  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} path="/main" />
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.expensesBrief}>
        <PeriodSelect />
        {totalExpensesLoading ? (
          <Loading />
        ) : totalExpenses ? (
          <Chart />
        ) : (
          <p>
            У вас еще не было трат. Здесь будут отображаться ваши траты по
            категориям.
          </p>
        )}
      </div>

      <section>
        <PaymentsHistoryList
          title="История списаний"
          expenses={true}
          cashback={false}
        />
      </section>
    </div>
  );
};

export default ExpensesPage;
