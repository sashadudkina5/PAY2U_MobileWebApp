import React from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const ForecastPage = () => {
  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} />
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.forecastBrief}>
        <div className={PageStyles.forecastWrapper}>
          <p className={PageStyles.forecastSum}>- 557 ₽</p>
          <p className={PageStyles.forecastSumPeriod}>ещё спишется в марте</p>
        </div>
        <ProgressBar completed={557} total={856} />

        <div className={PageStyles.forecastInfo}>
            <div className={PageStyles.forecastExpendses}>
          <span style={{ color: "#19B28D" }}>•</span>{" "}
          <span className={PageStyles.forecastStatus}>уже списалось</span>
          </div>
        <p className={PageStyles.forecastSpent}>299 ₽</p>
        </div>
      </div>

      <section>
        <PaymentsHistoryList title="История списаний" />
      </section>
    </div>
  );
};

export default ForecastPage;
