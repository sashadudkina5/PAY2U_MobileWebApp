import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentItemStyles from "./PaymentItem.module.scss";
import variables from "../../../../styles-utils/variables.scss"

interface iPaymentItemProps {
  cashback: boolean;
}

const PaymentItem = ({ cashback }: iPaymentItemProps) => {

    const priceStyle = {
        color: cashback ? variables.priceIconColor : variables.mainTextFontColor,
      };

  return (
    <div className={PaymentItemStyles.historyItemWrapper}>
        <div className={PaymentItemStyles.historyItemLogoWrapper}>logo</div>
        <div className={PaymentItemStyles.historyItemInfoWrapper}>
            <p className={PaymentItemStyles.historyItemServiceTitle}>Spotify</p>
            <p className={PaymentItemStyles.historyItemPlan}>Индивидуальная подписка</p>
            <p className={PaymentItemStyles.historyItemDate}>27.02.2024</p>
        </div>
        <div className={PaymentItemStyles.historyItemPriceWrapper}>
            <p style={priceStyle } className={PaymentItemStyles.historyItemPrice}>{`${cashback ? "+" : "-"} 250 ₽`}</p>
        </div>
    </div>
  );
};

export default PaymentItem;
