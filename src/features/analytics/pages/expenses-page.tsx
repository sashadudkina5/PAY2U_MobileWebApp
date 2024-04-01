import React from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList";
import Chart from "../components/Chart/Chart";
import PeriodSelect from "../components/PeriodSelect/PeriodSelect";

const ExpensesPage = () => {
  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} />
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.expensesBrief}>
        <PeriodSelect />
        <Chart />
      </div>

      <section>
        <PaymentsHistoryList title="История списаний" />
      </section>
    </div>
  );
};

export default ExpensesPage;
