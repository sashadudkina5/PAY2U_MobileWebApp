import React, { useState, useEffect } from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import Modal from "../../../global-components/Modal/Modal";
import { paymentData } from "../../../utils/billing-data";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { AppDispatch } from "../../../redux_services/store";
import {
  getCatalogList,
  getInactiveServiceDetails,
} from "../../../redux_services/selectors";
import { useParams } from "react-router-dom";
import { getSubscriptionInfo } from "../../../redux_services/thunk-functions/getSubscriptionInfo";
import { getSelectedSubscriptionInfo } from "../../../redux_services/selectors";
import { calculateDaysUntil, formatDate } from "../../../utils/dates";
import { getInactiveServiceInfo } from "../../../redux_services/thunk-functions/getInactiveServiceInfo";

function ActiveSubscription() {
  const dispatch: AppDispatch = useAppDispatch();

  const { id } = useParams();

  const selectedSubscription = useAppSelector(getSelectedSubscriptionInfo);
  console.log(selectedSubscription);

  useEffect(() => {
    dispatch(getSubscriptionInfo(id));
  }, [dispatch, id]);

  const selectedService = useAppSelector((state) =>
    getCatalogList(state).filter(
      (item) => item.name === selectedSubscription.service_name
    )
  );
  const [hasFetched, setHasFetched] = useState(false);

  const serviceInfo = useAppSelector(getInactiveServiceDetails);

  useEffect(() => {
    if (selectedService[0]?.id && !hasFetched) {
      dispatch(getInactiveServiceInfo(selectedService[0].id));
      setHasFetched(true);
    }
  }, [dispatch, selectedService, hasFetched]);

  const paymentItem = paymentData[0];
  const [snackbarOpenHowTo, setSnackbarOpenHowTo] = useState(false);
  const [snackbarOpenDisable, setSnackbarDisable] = useState(false);

  const sectionStyle = {
    backgroundImage: `url(${selectedSubscription.logo})`,
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
          <a href={serviceInfo.url} className={PageStyles.linkPolicy}>
            {" "}
            на сайте {selectedSubscription.service_name}
          </a>
        </p>

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
            Подписка будет действовать до {selectedSubscription.end_date}
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
            path="/active/main/subscriptions"
          />
        </div>
      </section>

      <section className={PageStyles.activeSubscriptionMainContent}>
        <div className={PageStyles.activeSubscriptionBasicWrapper}>
          <div className={PageStyles.activeSubscriptionBasicInfo}>
            <h1 className={PageStyles.activeSubscriptionTitle}>
              {selectedSubscription.service_name}
            </h1>
            <p className={PageStyles.activeSubscriptionPlan}>
              {selectedSubscription.tariff_name}
            </p>
          </div>

          <div className={PageStyles.activeSubscriptionCashback}>
            <span className={PageStyles.activeSubscriptionCashbackSum}>
              кешбэк {selectedSubscription.cashback} %
            </span>
          </div>

          <div className={PageStyles.activeSubscriptionNext}>
            <p className={PageStyles.activeSubscriptionNextPeriod}>
              Следующее списание{" "}
              {calculateDaysUntil(selectedSubscription.payment_date)} дней
            </p>
          </div>
        </div>

        <div className={PageStyles.activeSubscriptionDetailsWrapper}>
          <dl className={PageStyles.activeSubscriptionDetails}>
            <div className={PageStyles.detailsWrapper}>
              <dt>Стоимость подписки</dt>
              <dd> {selectedSubscription.price} ₽</dd>
            </div>
            <div
              className={`${PageStyles.detailsWrapper} + ${PageStyles.detailsTrialPeriod}`}
            >
              <dt>Пробный период до</dt>
              <dd>{formatDate(selectedSubscription.trial_period_end_date)}</dd>
            </div>
            <div className={PageStyles.detailsWrapper}>
              <dt>Следующее списание</dt>
              <dd>{formatDate(selectedSubscription.payment_date)}</dd>
            </div>
            <div className={PageStyles.detailsWrapper}>
              <dt>Номер телефона</dt>
              <dd>{selectedSubscription.phone_number}</dd>
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
