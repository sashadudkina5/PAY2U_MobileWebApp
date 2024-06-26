import React from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as ErrorIcon } from "../images/errorIcon.svg";
import Info from "../components/Info/Info";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";

function SubscriptionError() {
  
  return (
    <div className={PageStyles.page_wrapper}>
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<ErrorIcon />}
          title="Не удалось оформить подписку"
          description=""
        />
      </div>
      <Link to="/main">
        <CustomButton
          buttonName={"Попробовать еще раз"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>
    </div>
  );
}

export default SubscriptionError;

