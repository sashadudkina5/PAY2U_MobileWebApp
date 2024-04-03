import React, { useState } from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as SuccessIcon } from "../images/success.svg";
import Info from "../components/Info/Info";
import Navigation from "../../../global-components/Navigation/Navigation";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";
import Modal from "../../../global-components/Modal/Modal";

function SubscriptionSuccess() {
  let serviceTitle = "Okko";
  let phoneNumber = "+7 000 000-00-00";

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formattedMessage = (
    <div>
      <h2 className={PageStyles.modalTitle}>Как пользоваться?</h2>
      <p className={PageStyles.modalDescription}>
        Инструкция по работе с сервисом
      </p>
      <div className={PageStyles.modalContentWrapper}>
        <p className={PageStyles.modalContent}>
          1. После подключения подписки, перейдите на страницу входа </p>
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
        onClick={() => setSnackbarOpen(false)}
      />
    </div>
  );

  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={""} />
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<SuccessIcon />}
          title={`Подписка ${serviceTitle} оплачена`}
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
        <Link to="/">
          <CustomButton
            buttonName={"В главное меню"}
            backgroundColor={variables.mainButtonColor}
            color={variables.mainTextFontColor}
          />
        </Link>
        <span onClick={() => setSnackbarOpen(true)} className={PageStyles.usageLink}>Как пользоваться?</span>
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
