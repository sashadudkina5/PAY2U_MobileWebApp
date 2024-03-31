import React from "react";
import SubscriptionListItemStyles from "./SubscriptionListItem.module.scss";

function SubscriptionListItem() {
  return (
    <div className={SubscriptionListItemStyles.subscriptionItemWrapper}>
        <div className={SubscriptionListItemStyles.subscriptionItemLogoWrapper}>
            logo
        </div>
        <div className={SubscriptionListItemStyles.subscriptionInfoWrapper}>
            <h2 className={SubscriptionListItemStyles.serviceTitle}>Яндекс Плюс</h2>
            <p className={SubscriptionListItemStyles.serviceInfo}>12 месяцев подписки</p>
        </div>
        <div className={SubscriptionListItemStyles.subscriptionTrialWrapper}>
            <p className={SubscriptionListItemStyles.serviceTrial}>Срок действия истек: 14.05.2023</p>
        </div>
        <div className={SubscriptionListItemStyles.subscriptionPriceWrapper}>
            <p className={SubscriptionListItemStyles.subscriptionPrice}>459 ₽</p>
            <p className={SubscriptionListItemStyles.subscriptionPeriod}>за год</p>
        </div>
    </div>
  );
}

export default SubscriptionListItem;
