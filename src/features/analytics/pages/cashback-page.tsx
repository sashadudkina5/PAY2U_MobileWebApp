import React from "react";
import PageStyles from "../styles/analytics-pages.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import Pagination from "../components/Pagination/Pagination";
import { analyticsPages } from "../../../utils/analyticsPages";
import PaymentsHistoryList from "../components/PaymentsHistoryList/PaymentsHistoryList"

const CashbackPage = () => {
  return (
    <div className={PageStyles.analyticsPageWrapper}>
      <div className={PageStyles.analyticsNavWrapper}>
        <Navigation color="#FFFFFF" pageName={"Аналитика"} />
      </div>
      <Pagination pages={analyticsPages} />
      <div className={PageStyles.analyticsBrief}>
        <div className={PageStyles.analyticsCashbackPeriodWrapper}>
          <span className={PageStyles.analyticsCashbackFutureSum}>+ 550 ₽</span> {" "}
          <span className={PageStyles.analyticsCashbackFuturePeriod}>
            за март
          </span>
        </div>
        <p className={PageStyles.analyticsCashbackFutureDate}>
          Зачислим 25 марта
        </p>
        <p className={PageStyles.analyticsCashbackTotal}>
          1 496 ₽ сэкономлено за весь период
        </p>
      </div>

      <section>
        <PaymentsHistoryList title="История поступлений" />
      </section>
    </div>
  );
};

export default CashbackPage;
