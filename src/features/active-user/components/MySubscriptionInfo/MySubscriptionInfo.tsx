import React from "react";
import MySubscriptionInfoStyles from "./MySubscriptionInfo.module.scss";
import warningIcon from "../../images/warningIcon.svg";

interface ISubscriptionInfoProps {
  logo: string,
  title: string,
  price: number,
  period: string,
  tariffName?: string,
  paymentDate: string,
  trialEnd?: string
}

function MySubscriptionInfo({logo, title, price, period, tariffName,paymentDate, trialEnd }: ISubscriptionInfoProps) {
  return (
    <div className={MySubscriptionInfoStyles.subscriptionInfoWrapper}>
      <div className={MySubscriptionInfoStyles.logo}><img src={logo} alt={title}/></div>
      <div className={MySubscriptionInfoStyles.warningIcon}>
        {" "}
        <img src={warningIcon} alt="Действует пробный период." />
        
        <div className={MySubscriptionInfoStyles.subscriptionPrice}>
        <span className={MySubscriptionInfoStyles.price}>{price} ₽</span>{" "} <br/>
        <span className={MySubscriptionInfoStyles.period}>за 1 {period}</span>
      </div>

      </div>
      <div className={MySubscriptionInfoStyles.userName}>{tariffName}</div>
      <div className={MySubscriptionInfoStyles.trialPeriod}>
        Пробный период до: {trialEnd}
      </div>
      <div className={MySubscriptionInfoStyles.subscriptionDate}>
        Списание: {paymentDate}
      </div>
    </div>
  );
}

export default MySubscriptionInfo;
