import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import PlanCard from "../components/PlanCard/PlanCard";
import ServiceIncludes from "../components/serviceIncludes/serviceIncludes";
import Faq from "../components/FAQ/Faq";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss"

function ServicePage() {
  return (
    <div className={PageStyles.page_wrapper}>
      <div className={PageStyles.navWrapper}>
        <Navigation color="primary" pageName={"Okko"} />
      </div>
      <div className={PageStyles.basicInfoWrapper}>
        <div className={PageStyles.logoWrapper}>pic</div>
        <div className={PageStyles.namePriceInfoWrapper}>
          <div>
            <h1 className={PageStyles.serviceTitle}>Okko: онлайн кинотеатр</h1>
            <p className={PageStyles.serviceBrief}>
              Фильмы и сериалы в отличном качестве
            </p>
          </div>
          <ul className={PageStyles.pricesWrapper}>
            <li className={`${PageStyles.pricesItem} ${PageStyles.cashback}`}>
              <span className={PageStyles.cashbackText}>кешбек 10 %</span>
            </li>
            <li className={`${PageStyles.pricesItem} ${PageStyles.price}`}>
              <span className={PageStyles.priceText}>30 дней за 1 ₽</span>
            </li>
          </ul>
        </div>
      </div>

      <ul className={PageStyles.plansList}>
        <li>
          <PlanCard />
        </li>
        <li>
          <PlanCard />
        </li>
        <li>
          <PlanCard />
        </li>
        <li>
          <PlanCard />
        </li>
      </ul>

      <ServiceIncludes />
      <Faq />

      <div className={PageStyles.forwardButtonWrapper}>
      <CustomButton
        buttonName={"Подключить"}
        backgroundColor={variables.mainButtonColor}
        color={variables.mainTextFontColor}
      />
      </div>
    </div>
  );
}

export default ServicePage;
