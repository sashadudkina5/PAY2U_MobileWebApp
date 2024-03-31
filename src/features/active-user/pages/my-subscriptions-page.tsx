import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import SubscriptionList from "../components/SubscriptionList/SubscriptionList";

function MySubscriptionsPage() {
  return (
    <div>
      <div className={PageStyles.navWrapperMySubscriptions}>
        <Navigation color="primary" pageName={"Мои подписки"} />
        <div className={PageStyles.searchWrapper}>
          search
          <label htmlFor="gsearch"></label>
          <input type="search" id="gsearch" name="gsearch"></input>
        </div>
      </div>
      <div className={PageStyles.ativeSubscriptionsWrapper}>
        <h1 className={PageStyles.mySubscriptionsTitle}>Активные</h1>
      <SubscriptionList linkNext="*"/>
      </div>

      <div className={PageStyles.suspendedSubscriptionsWrapper}>
      <h1 className={PageStyles.mySubscriptionsTitle}>Недействующие</h1>
      <SubscriptionList linkNext="*"/>
      </div>

    </div>
  );
}

export default MySubscriptionsPage;
