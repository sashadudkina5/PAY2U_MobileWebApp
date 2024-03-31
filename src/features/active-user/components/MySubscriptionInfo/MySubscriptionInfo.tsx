import React from "react";
import MySubscriptionInfoStyles from "./MySubscriptionInfo.module.scss";
import warningIcon from "../../images/warningIcon.svg";

function MySubscriptionInfo() {
  return (
    <div className={MySubscriptionInfoStyles.subscriptionInfoWrapper}>
      <div className={MySubscriptionInfoStyles.logo}> logo</div>
      <div className={MySubscriptionInfoStyles.warningIcon}>
        {" "}
        <img src={warningIcon} alt="Действует пробный период." />
        
        <div className={MySubscriptionInfoStyles.subscriptionPrice}>
        <span className={MySubscriptionInfoStyles.price}>200 ₽</span>{" "} <br/>
        <span className={MySubscriptionInfoStyles.period}>за 1 месяц</span>
      </div>

      </div>
      <div className={MySubscriptionInfoStyles.userName}>Изи Иви</div>
      <div className={MySubscriptionInfoStyles.subscriptionDate}>
        Списание: 16.06.2023
      </div>
      <div className={MySubscriptionInfoStyles.trialPeriod}>
        Пробный период до: 16.09.2023
      </div>
    </div>
  );
}

export default MySubscriptionInfo;
