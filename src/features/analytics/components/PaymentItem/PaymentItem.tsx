import React from "react";
import PaymentItemStyles from "./PaymentItem.module.scss";
import variables from "../../../../styles-utils/variables.scss"
import { formatDate } from "../../../../utils/formats";

interface iPaymentItemProps {
  cashback: boolean,
  logo: string,
  serviceTitle: string,
  tariffTitle: string,
  paymentDate: string,
  cashbackSum: number
}

const PaymentItem = ({ cashback, logo, serviceTitle, tariffTitle, paymentDate, cashbackSum}: iPaymentItemProps) => {

    const priceStyle = {
        color: cashback ? variables.priceIconColor : variables.mainTextFontColor,
      };

  return (
    <div className={PaymentItemStyles.historyItemWrapper}>
        <div className={PaymentItemStyles.historyItemLogoWrapper}><img src={logo} alt={serviceTitle}/></div>
        <div className={PaymentItemStyles.historyItemInfoWrapper}>
            <p className={PaymentItemStyles.historyItemServiceTitle}>{serviceTitle}</p>
            <p className={PaymentItemStyles.historyItemPlan}>{tariffTitle}</p>
            <p className={PaymentItemStyles.historyItemDate}>{formatDate(paymentDate)}</p>
        </div>
        <div className={PaymentItemStyles.historyItemPriceWrapper}>
            <p style={priceStyle } className={PaymentItemStyles.historyItemPrice}>{`${cashback ? "+" : "-"} ${cashbackSum} ₽`}</p>
        </div>
    </div>
  );
};

export default PaymentItem;
