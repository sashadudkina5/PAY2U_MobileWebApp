import React from "react";
import PageStyles from "../../features/subscribtion-process/styles/global-styles.module.scss";
import { ReactComponent as ErrorIcon } from "../../features/subscribtion-process/images/errorIcon.svg";
import Info from "../../features/subscribtion-process/components/Info/Info";
import Navigation from "../Navigation/Navigation";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={""} />
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<ErrorIcon />}
          title="Страница не найдена"
          description=""
        />
      </div>
      <Link to="/main">
        <CustomButton
          buttonName={"Вернуться на главную страницу"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>
    </div>
  );
}

export default Page404;
