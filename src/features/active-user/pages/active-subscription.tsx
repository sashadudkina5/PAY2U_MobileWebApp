import React, { useState } from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import { Link } from "react-router-dom";
import sampleBackground from "../images/sampleBackground.png";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import Modal from "../../../global-components/Modal/Modal";
import { paymentData } from "../../../utils/billing-data";

function ActiveSubscription() {
  const paymentItem = paymentData[0];
  const [snackbarOpenHowTo, setSnackbarOpenHowTo] = useState(false);
  const [snackbarOpenDisable, setSnackbarDisable] = useState(false);

  const sectionStyle = {
    backgroundImage: `url(${sampleBackground})`,
  };

  const formattedMessageHowTo = (
    <div>
      <h2 className={PageStyles.modalTitle}>Как пользоваться?</h2>
      <p className={PageStyles.modalDescription}>
        Инструкция по работе с сервисом
      </p>
      <div className={PageStyles.modalContentWrapper}>
        <p className={PageStyles.modalContent}>
          1. После подключения подписки, перейдите на страницу входа{" "}
        </p>
        <a href="#" className={PageStyles.linkPolicy}>
          {" "}
          на сайте Okko
        </a>

        <p className={PageStyles.modalContent}>
          2. Авторизуйтесь по номеру телефона, который был указан при
          подключении подписки (пароль будет необходимо восстановить)
        </p>
      </div>
      <CustomButton
        buttonName={"Понятно"}
        backgroundColor={variables.mainBackgroundColor}
        color={variables.mainTextFontColor}
        borderColor={variables.buttonBorderColor}
        onClick={() => setSnackbarOpenHowTo(false)}
      />
    </div>
  );

  const formattedMessageDisable = (
    <div>
      <h2 className={PageStyles.modalTitle}>
        Отключить автопродление подписки?
      </h2>
      <div className={PageStyles.modalDisableListWrapper}>
        <div
          className={`${PageStyles.modalDisableList} + ${PageStyles.subscriptionPeriodActive}`}
        >
          <p className={PageStyles.modalContent}>
            Подписка будет действовать до 10.04.2024
          </p>
        </div>

        <div
          className={`${PageStyles.modalDisableList} + ${PageStyles.subscriptionGetBack}`}
        >
          <p className={PageStyles.modalContent}>
            Если вы захотите ее вернуть она будет доступна в разделе Мои
            подписки / Недействующие
          </p>
        </div>
      </div>

      <div className={PageStyles.modalDisableButtonsWrapper}>
        <CustomButton
          buttonName={"Пока оставить"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
          onClick={() => setSnackbarDisable(false)}
        />

        <CustomButton
          buttonName={"Все равно отключить"}
          backgroundColor={variables.mainBackgroundColor}
          color={variables.mainTextFontColor}
          // onClick={() => setSnackbarDisable(false)}
        />
      </div>
    </div>
  );

  return (
    <div className={PageStyles.activeSubscriptionPageWrapper}>
      <section
        style={sectionStyle}
        className={PageStyles.activeSubscriptionLogoSection}
      >
        <div className={PageStyles.activeSubscriptionNavWrapper}>
          <Navigation
            color="primary"
            pageName={""}
            backgroundColor="#FFFFFF"
            borderRadius="60px"
          />
        </div>
      </section>

      <section className={PageStyles.activeSubscriptionMainContent}>
        <div className={PageStyles.activeSubscriptionBasicWrapper}>
          <div className={PageStyles.activeSubscriptionBasicInfo}>
            <h1 className={PageStyles.activeSubscriptionTitle}>Иви</h1>
            <p className={PageStyles.activeSubscriptionPlan}>
              Подписка Изи Иви
            </p>
          </div>

          <div className={PageStyles.activeSubscriptionCashback}>
            <span className={PageStyles.activeSubscriptionCashbackSum}>
              кешбэк 10 %
            </span>
          </div>

          <div className={PageStyles.activeSubscriptionNext}>
            <p className={PageStyles.activeSubscriptionNextPeriod}>
              Следующее списание через 28 дней
            </p>
          </div>
        </div>

        <div className={PageStyles.activeSubscriptionDetailsWrapper}>
          <dl className={PageStyles.activeSubscriptionDetails}>
            <div className={PageStyles.detailsWrapper}>
              <dt>Стоимость подписки</dt>
              <dd>200 ₽</dd>
            </div>
            <div
              className={`${PageStyles.detailsWrapper} + ${PageStyles.detailsTrialPeriod}`}
            >
              <dt>Пробный период до</dt>
              <dd>10.03.2024</dd>
            </div>
            <div className={PageStyles.detailsWrapper}>
              <dt>Следующее списание</dt>
              <dd>10.04.2024</dd>
            </div>
            <div className={PageStyles.detailsWrapper}>
              <dt>Номер телефона</dt>
              <dd>+ 7 (900) 999-99-99</dd>
            </div>
            <div className={PageStyles.detailsWrapper}>
              <dt>Счет списания</dt>

              <dd>
                <img src={paymentItem.iconNoBackground} alt="Счет списания" />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div className={PageStyles.activeSubscriptionBottomNavWrapper}>
        <CustomButton
          buttonName={"Как пользоваться?"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
          onClick={() => setSnackbarOpenHowTo(true)}
        />

        <CustomButton
          buttonName={"Отключить автопродление"}
          backgroundColor={variables.suspendButtonBackgroundColor}
          color={variables.suspendButtonText}
          onClick={() => setSnackbarDisable(true)}
        />
      </div>

      <Modal
        open={snackbarOpenHowTo}
        onClose={() => setSnackbarOpenHowTo(false)}
        message={formattedMessageHowTo}
      />

      <Modal
        open={snackbarOpenDisable}
        onClose={() => setSnackbarDisable(false)}
        message={formattedMessageDisable}
      />
    </div>
  );
}

export default ActiveSubscription;
