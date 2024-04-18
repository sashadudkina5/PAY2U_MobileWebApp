import React, { useState } from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import { Link } from "react-router-dom";
import sampleBackground from "../images/sampleBackground.png";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { paymentData } from "../../../utils/billingData";

function SuspendedSubscription() {
  const paymentItem = paymentData[0];

  const sectionStyle = {
    backgroundImage: `url(${sampleBackground})`,
  };

 

  return (
    <div className={PageStyles.suspendSubscriptionPageWrapper}>
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
            path="/active/main/subscriptions"
          />
        </div>
      </section>

      <section className={PageStyles.suspendSubscriptionMainContent}>
      <div className={PageStyles.activeSubscriptionBasicWrapper}>
        <div className={PageStyles.activeSubscriptionBasicInfo}>
          <h1 className={PageStyles.activeSubscriptionTitle}>Иви</h1>
          <p className={PageStyles.activeSubscriptionPlan}>Подписка Изи Иви</p>
        </div>

        <div className={PageStyles.activeSubscriptionCashback}>
          <span className={PageStyles.activeSubscriptionCashbackSum}>
            кешбэк 10 %
          </span>
        </div>

        <div className={PageStyles.activeSubscriptionNext}>
          <p className={PageStyles.activeSubscriptionNextPeriod}>
          Отключена 10.04.2024 
          </p>
        </div>
      </div>

      <div className={PageStyles.activeSubscriptionDetailsWrapper}>
        <dl className={`${PageStyles.activeSubscriptionDetails} + ${PageStyles.suspendedSubscriptionDetails}`}>
          <div className={PageStyles.detailsWrapper}>
            <dt>Стоимость подписки</dt>
            <dd>200 ₽</dd>
          </div>
          <div
            className={PageStyles.detailsWrapper}
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


      <Link to="/subscription">
      <CustomButton
          buttonName={"Возобновить за 199 ₽"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>

      <Link to="/main/card">
      <CustomButton
          buttonName={"Смотреть все тарифы"}
          backgroundColor={variables.mainBackgroundColor}
          color={variables.mainTextFontColor}
          borderColor={variables.buttonBorderColor}
        />
      </Link>

      </div>
    </div>
  );
}

export default SuspendedSubscription;
