import React from "react";
import giftIcon from "../../images/priceGiftIcon.svg";
import CustomButton from "../../../../global-components/Button/Button";
import variables from "../../../../styles-utils/variables.scss";
import PlanCardStyles from "./PlanCard.module.scss";

function PlanCard() {
  return (
    <div className={PlanCardStyles.planItemWrapper}>
      <h2 className={PlanCardStyles.planTitle}>title</h2>
      <span className={PlanCardStyles.totalPriceWrapper}>
        <p className={PlanCardStyles.priceTitle}>99 ₽</p>
        <p className={PlanCardStyles.pricePeriod}>за месяц</p>
      </span>
      <p className={PlanCardStyles.priceDescription}>
        первый месяц за 99 ₽, далее — 199 ₽⁠/⁠месяц
      </p>

      <span className={PlanCardStyles.giftDescription}>
        <img
          src={giftIcon}
          alt="toggle"
          style={{ transform: "translateY(25%)" }}
        />
        30 дней за 1 ₽
      </span>

      <CustomButton
        buttonName={"Выбрать"}
        backgroundColor={variables.mainBackgroundColor}
        color={variables.mainTextFontColor}
        borderColor={variables.buttonBorderColor}
      />
    </div>
  );
}

export default PlanCard;
