import React, {useEffect} from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList";
import Chart from "../components/Chart/Chart";
import PeriodSelect from "../components/PeriodSelect/PeriodSelect";
import { AppDispatch } from "../../../redux_services/store";
import { useAppDispatch } from "../../../utils/hooks";
import { getTotalExpenses } from "../../../redux_services/thunk-functions/getTotalExpenses";
import { firstDayLastYear, lastDayThisYear } from "../../../utils/dates";
import { getCategoryExpenses } from "../../../redux_services/thunk-functions/getCategoryExpenses";


const ExpensesPage = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalExpenses(firstDayLastYear, lastDayThisYear));
    dispatch(getCategoryExpenses(firstDayLastYear, lastDayThisYear));
  }, [dispatch]);


  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} path="/main"/>
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.expensesBrief}>
        <PeriodSelect />
        <Chart />
      </div>

      <section>
        <PaymentsHistoryList title="История списаний" expenses={true} cashback={false}/>
      </section>
    </div>
  );
};

export default ExpensesPage;
