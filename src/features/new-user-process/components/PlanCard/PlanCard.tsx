import React, { useState } from "react";
import giftIcon from "../../images/priceGiftIcon.svg";
import CustomButton from "../../../../global-components/Button/Button";
import variables from "../../../../styles-utils/variables.scss";
import PlanCardStyles from "./PlanCard.module.scss";
import infoIcon from "../../images/planInfoIcon.svg";
import Modal from "../../../../global-components/Modal/Modal";

function PlanCard() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [buttonSelectColor, setButtonColor] = useState(variables.mainBackgroundColor);
  const [buttonTextColor, setButtonTextColor] = useState(variables.mainTextFontColor);
  const [buttonBorderColor, setBorderTextColor] = useState(variables.buttonBorderColor);
  const [buttonMessage, setButtonMessage] = useState("Выбрать");

  function selectPlan () {
    setButtonColor(variables.mainBackgroundColor);
    setButtonTextColor(variables.mainTextFontColor);
    setBorderTextColor(variables.buttonBorderColor);
    setButtonMessage("Выбрано")
  }

  const formattedMessage = (
    <div className={PlanCardStyles.modalWrapper}>
      <h5 className={PlanCardStyles.modalTitle}>Что входит в подписку?</h5>
      <p className={PlanCardStyles.planTitle}>Название тарифа</p>
      <ul className={PlanCardStyles.includesList}>
        <li> 
          <p>
            Более 70 000 фильмов, сериалов и мультфильмов Прямые трансляции Okko
            Sport Детский профиль и родительский контроль Загрузка и просмотр
            без интернета Музыка, подкасты и аудиокниги от Звука
          </p>
        </li>
      </ul>
      <CustomButton
        buttonName={"Выбрать"}
        backgroundColor={variables.mainBackgroundColor}
        color={variables.mainTextFontColor}
        borderColor={variables.buttonBorderColor}
        onClick={() => setSnackbarOpen(false)}
      />
    </div>
  );

  return (
    <div className={PlanCardStyles.planItemWrapper}>
      <button
        type="button"
        className={PlanCardStyles.infoButton}
        onClick={() => setSnackbarOpen(true)}
      >
        <img src={infoIcon} alt="Информация о тарифе." />
      </button>
      <h2 className={PlanCardStyles.planTitle}>title</h2>
      <span className={PlanCardStyles.totalPriceWrapper}>
        <p className={PlanCardStyles.priceTitle}>99 ₽</p>
        <p className={PlanCardStyles.pricePeriod}>за месяц</p>
      </span>
      <p className={PlanCardStyles.priceDescription}>
        первый месяц за 99 ₽, далее — 199 ₽⁠/⁠месяц
      </p>

      <span className={PlanCardStyles.giftDescription}>
        <img src={giftIcon} alt="" />
        30 дней за 1 ₽
      </span>

      <CustomButton
        buttonName={buttonMessage}
        backgroundColor={buttonSelectColor}
        color={buttonTextColor}
        borderColor={buttonBorderColor}
        onClick={selectPlan}
      />

      <Modal
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={formattedMessage}
      />
    </div>
  );
}

export default PlanCard;
