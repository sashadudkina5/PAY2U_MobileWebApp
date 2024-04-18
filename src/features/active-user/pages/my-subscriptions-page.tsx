import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import SubscriptionList from "../components/SubscriptionList/SubscriptionList";

function MySubscriptionsPage() {
  return (
    <div>
      <div className={PageStyles.navWrapperMySubscriptions}>
        <Navigation color="primary" pageName={"Мои подписки"} path="/main"/>
        <div className={PageStyles.searchWrapper}>
        </div>
      </div>
      <div className={PageStyles.ativeSubscriptionsWrapper}>
        <h1 className={PageStyles.mySubscriptionsTitle}>Активные</h1>
      <SubscriptionList isActive={true}/>
      </div>

      <div className={PageStyles.suspendedSubscriptionsWrapper}>
      <h1 className={PageStyles.mySubscriptionsTitle}>Недействующие</h1>
      <SubscriptionList isActive={false}/>
      </div>

    </div>
  );
}

export default MySubscriptionsPage;
