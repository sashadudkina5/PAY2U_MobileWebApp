import React, { useEffect, useState } from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import PlanCard from "../components/PlanCard/PlanCard";
import ServiceIncludes from "../components/serviceIncludes/serviceIncludes";
import Faq from "../components/FAQ/Faq";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link, useParams } from "react-router-dom";
import {
  getInactiveServiceDetails,
  getSelectedServicePlans,
  getCategories,
} from "../../../redux_services/selectors";
import { useAppSelector } from "../../../utils/hooks";
import { getInactiveServiceInfo } from "../../../redux_services/thunk-functions/getInactiveServiceInfo";
import { getServicePlans } from "../../../redux_services/thunk-functions/getServicePlans";
import { useAppDispatch } from "../../../utils/hooks";
import { AppDispatch } from "../../../redux_services/store";
import { getServiceCategories } from "../../../redux_services/thunk-functions/getServiceCategories";
import { getPopularPosters } from "../../../redux_services/thunk-functions/getPopularPosters";
import { getExclusivePosters } from "../../../redux_services/thunk-functions/getExclusivePosters";
import { clearAllPosters } from "../../../redux_services/slices/categoryPostersSlice";
import CircularProgress from "../../../global-components/Loading/Loading";
import { clearInactiveServiceInfo } from "../../../redux_services/slices/userInactiveServiceSlice";
import { clearServiceCategories } from "../../../redux_services/slices/serviceCategoriesSlice";
import { IPlanCondition } from "../../../utils/types";
import { clearAllPlanInfo } from "../../../redux_services/slices/planInfoSlice";
import { getClearServicePlans } from "../../../redux_services/slices/servicePlansSlice";

function ServicePage() {
  const dispatch: AppDispatch = useAppDispatch();

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [selectedPlanDetails, setSelectedPlanDetails] =
    useState<IPlanCondition | null>(null);

  const handlePlanSelect = (planDetails: IPlanCondition) => {
    setSelectedPlanDetails(planDetails);
  };

  const serviceInfo = useAppSelector(getInactiveServiceDetails);
  const servicePlans = useAppSelector(getSelectedServicePlans);
  const categories = useAppSelector(getCategories);

  const isLoadingInactiveServiceInfo = useAppSelector(
    (state) => state.inactiveServiceInfo.isLoading
  );
  const isLoadingServicePlans = useAppSelector(
    (state) => state.servicePlans.isLoading
  );
  const isLoadingServiceCategories = useAppSelector(
    (state) => state.serviceCategories.isLoading
  );

  const [errorMessage, setErrorMessage] = useState<string>("");

  const isLoading =
    isLoadingInactiveServiceInfo &&
    isLoadingServicePlans &&
    isLoadingServiceCategories;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getInactiveServiceInfo(id));
    dispatch(getServicePlans(id));
    dispatch(getServiceCategories(id));

    return () => {
      dispatch(clearAllPosters());
      dispatch(clearInactiveServiceInfo());
      dispatch(clearServiceCategories());
      dispatch(clearAllPlanInfo());
      dispatch(getClearServicePlans());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (categories.length > 0) {
      const exclusiveID = categories.find((category) =>
        category.name.includes("Эксклюзивы")
      )?.id;
      const popularID = categories.find((category) =>
        category.name.includes("Популярное")
      )?.id;

      if (exclusiveID) {
        dispatch(getExclusivePosters(id, exclusiveID));
      }
      if (popularID) {
        dispatch(getPopularPosters(id, popularID));
      }
    }
  }, [id, dispatch, categories]);
  

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className={PageStyles.page_wrapperCard}>
      <div className={PageStyles.navWrapper}>
        <Navigation color="primary" pageName={serviceInfo.name} path="/main" />
      </div>
      <div className={PageStyles.basicInfoWrapper}>
        <div className={PageStyles.logoWrapper}>
          <img alt={`Логотип ${serviceInfo.name}`} src={serviceInfo.logo} />
        </div>
        <div className={PageStyles.namePriceInfoWrapper}>
            <h1 className={PageStyles.serviceTitle}>{serviceInfo.full_name}</h1>
            <p
  className={PageStyles.serviceBrief}> {serviceInfo.short_description} </p>
          <ul className={PageStyles.pricesWrapper}>
            <li className={`${PageStyles.pricesItem} ${PageStyles.cashback}`}>
              <span className={PageStyles.cashbackText}>
                кешбек {serviceInfo.cashback}%
              </span>
            </li>
          </ul>
        </div>
      </div>

      <ul className={PageStyles.plansList}>
        {servicePlans.map((plan) => (
          <li key={plan.id}>
            <PlanCard
              planTitle={plan.name}
              logo={serviceInfo.logo}
              title={serviceInfo.name}
              planDescription={plan.description}
              planId={plan.id}
              serviceID={id}
              isSelected={plan.id === selectedPlanId}
              onSelect={() => {
                setSelectedPlanId(plan.id);
              }}
              onPlanSelect={(planDetails) => {
                setSelectedPlanId(plan.id);
                handlePlanSelect(planDetails);
                setErrorMessage("");
              }}
            />
          </li>
        ))}
      </ul>

      <ServiceIncludes includesDescription={serviceInfo.description} />
      <Faq />

      <div className={PageStyles.forwardButtonWrapper}>
        {selectedPlanId !== null ? (
          <Link to="/subscription">
            <CustomButton
              buttonName={
                selectedPlanDetails
                  ? `Подключить ${
                      selectedPlanDetails.count
                    } ${selectedPlanDetails.period?.toLocaleLowerCase()} за ${
                      selectedPlanDetails.price
                    } ₽`
                  : "Подключить"
              }
              backgroundColor={variables.mainButtonColor}
              color={variables.mainTextFontColor}
            />
          </Link>
        ) : (
          <div>
            {errorMessage ? (
              <div className={PageStyles.forwardButtonError}>
                {errorMessage}
              </div>
            ) : null}
            <CustomButton
              buttonName={
                selectedPlanDetails
                  ? `Подключить ${
                      selectedPlanDetails.count
                    } ${selectedPlanDetails.period?.toLocaleLowerCase()} за ${
                      selectedPlanDetails.price
                    } ₽`
                  : "Подключить"
              }
              backgroundColor={variables.mainButtonColor}
              color={variables.mainTextFontColor}
              onClick={() => setErrorMessage("Сначала выберите тариф")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicePage;
