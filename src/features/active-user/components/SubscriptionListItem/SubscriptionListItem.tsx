import React from "react";
import SubscriptionListItemStyles from "./SubscriptionListItem.module.scss";

interface ISubscriptionListItemProps {
    logo: string,
    serviceTitle: string,
    trialEnd?: string,
    period: string,
    tariffTitle?: string,
    price: number,
    paymentDate: string,
    isActive: boolean
}

function SubscriptionListItem({logo, serviceTitle, trialEnd, period, tariffTitle, price, paymentDate, isActive}: ISubscriptionListItemProps) {
  return (
    <div className={SubscriptionListItemStyles.subscriptionItemWrapper}>
        <div className={SubscriptionListItemStyles.subscriptionItemLogoWrapper}>
            <img src={logo} alt={serviceTitle}/>
        </div>
        <div className={SubscriptionListItemStyles.subscriptionInfoWrapper}>
            <h2 className={SubscriptionListItemStyles.serviceTitle}>{serviceTitle}</h2>
            <p className={SubscriptionListItemStyles.serviceInfo}>{tariffTitle}</p>
        </div>
        <div className={SubscriptionListItemStyles.subscriptionTrialWrapper}>
            {isActive ?         <p className={SubscriptionListItemStyles.serviceTrial}>Списание: {paymentDate}</p> : 
                    <p className={SubscriptionListItemStyles.serviceTrial}>Срок действия истек: {paymentDate}</p>}
        </div>
        <div className={SubscriptionListItemStyles.subscriptionPriceWrapper}>
            <p className={SubscriptionListItemStyles.subscriptionPrice}>{price} ₽</p>
            <p className={SubscriptionListItemStyles.subscriptionPeriod}>за {period.toLowerCase()}</p>
        </div>
    </div>
  );
}

export default SubscriptionListItem;
