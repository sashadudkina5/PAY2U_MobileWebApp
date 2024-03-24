import React from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as ToggleIcon } from "../images/toggle.svg";
import smallToggle from "../images/small-toggle.svg";
import Info from "../components/Info/Info";
import Navigation from "../../../global-components/Navigation/Navigation";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";

function SubscriptionWarning() {
  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={""} />
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<ToggleIcon />}
          title="Не забудьте привязать счёт"
          description={
            <span style={{ color: variables.additionalTextColor }}>
              На экране оплаты нажмите на{" "}
              <img
                src={smallToggle}
                alt="toggle"
                style={{ transform: "translateY(25%)" }}
              />{" "}
              и вы привяжите счёт для автоматических списаний.
            </span>
          }
        />
      </div>
      <Link to="/subscription/success">
        <CustomButton
          buttonName={"Далее"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>
    </div>
  );
}

export default SubscriptionWarning;
