import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import PlanCard from "../components/PlanCard/PlanCard";
import ServiceIncludes from "../components/serviceIncludes/serviceIncludes";
import Faq from "../components/FAQ/Faq";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link, useParams } from "react-router-dom";
import {getInactiveServiceDetails} from "../../../redux_services/selectors";
import { useAppSelector } from "../../../utils/hooks";

function ServicePage() {

  const serviceInfo = useAppSelector(getInactiveServiceDetails);
  
  const { id } = useParams();
  console.log(id);

  return (
    <div className={PageStyles.page_wrapper}>
      <div className={PageStyles.navWrapper}>
        <Navigation color="primary" pageName={serviceInfo.name} />
      </div>
      <div className={PageStyles.basicInfoWrapper}>
        <div className={PageStyles.logoWrapper}><img alt={`Логотип ${serviceInfo.name}`} src={serviceInfo.logo}/>
        </div>
        <div className={PageStyles.namePriceInfoWrapper}>
          <div>
            <h1 className={PageStyles.serviceTitle}>{serviceInfo.full_name}</h1>
            <p className={PageStyles.serviceBrief}>
              {serviceInfo.short_description}
            </p>
          </div>
          <ul className={PageStyles.pricesWrapper}>
            <li className={`${PageStyles.pricesItem} ${PageStyles.cashback}`}>
              <span className={PageStyles.cashbackText}>кешбек {serviceInfo.cashback}%</span>
            </li>
            <li className={`${PageStyles.pricesItem} ${PageStyles.price}`}>
              <span className={PageStyles.priceText}>????????</span>
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

      <ServiceIncludes includesDescription={serviceInfo.description}/>
      <Faq />

      <div className={PageStyles.forwardButtonWrapper}>

      <Link to="/subscription">
      <CustomButton
        buttonName={"Подключить"}
        backgroundColor={variables.mainButtonColor}
        color={variables.mainTextFontColor}
      />
      </Link>
      </div>
    </div>
  );
}

export default ServicePage;
