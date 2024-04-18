import React, { useState, useEffect } from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as SuccessIcon } from "../images/success.svg";
import Info from "../components/Info/Info";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";
import Modal from "../../../global-components/Modal/Modal";
import { usePhoneNumber } from "../../../context/PhoneNumberContext";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import {
  currentSubscription,
  getCatalogList,
  getInactiveServiceDetails,
} from "../../../redux_services/selectors";
import { getInactiveServiceInfo } from "../../../redux_services/thunk-functions/getInactiveServiceInfo";
import { AppDispatch } from "../../../redux_services/store";

function SubscriptionSuccess() {
  const CurrentData = useAppSelector(currentSubscription);
  let { phoneNumber } = usePhoneNumber();
  const dispatch: AppDispatch = useAppDispatch();

  const selectedService = useAppSelector((state) =>
    getCatalogList(state).filter((item) => item.name === CurrentData.name.title)
  );
  const serviceInfo = useAppSelector(getInactiveServiceDetails);

  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (selectedService[0]?.id && !hasFetched) {
      dispatch(getInactiveServiceInfo(selectedService[0].id));
      setHasFetched(true);
    }
  }, [dispatch, selectedService, hasFetched]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formattedMessage = (
    <div>
      <h2 className={PageStyles.modalTitle}>Как пользоваться?</h2>
      <p className={PageStyles.modalDescription}>
        Инструкция по работе с сервисом
      </p>
      <div className={PageStyles.modalContentWrapper}>
        <p className={PageStyles.modalContent}>
          1. После подключения подписки, перейдите на страницу входа
          <a href={serviceInfo.url} className={PageStyles.linkPolicy}>
            {" "}
            на сайте {CurrentData.name.title}
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
        onClick={() => setSnackbarOpen(false)}
      />
    </div>
  );

  return (
    <div className={PageStyles.page_wrapper}>
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<SuccessIcon />}
          title={`Подписка ${CurrentData.name.title} оплачена`}
          description={
            <span style={{ color: variables.additionalTextColor }}>
              {`Логин и пароль для входа в сервис отправили вам в СМС на номер: ${phoneNumber}`}
            </span>
          }
        />
      </div>

      <section className={PageStyles.bottomNavWrapper}>
        <Link to="/">
          <CustomButton
            buttonName={"Чек"}
            backgroundColor="transparent"
            color={variables.mainTextFontColor}
            borderColor={variables.buttonBorderColor}
          />
        </Link>
        <Link to="/main">
          <CustomButton
            buttonName={"В главное меню"}
            backgroundColor={variables.mainButtonColor}
            color={variables.mainTextFontColor}
          />
        </Link>
        <span
          onClick={() => setSnackbarOpen(true)}
          className={PageStyles.usageLink}
        >
          Как пользоваться?
        </span>
        <Modal
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          message={formattedMessage}
        />
      </section>
    </div>
  );
}

export default SubscriptionSuccess;
