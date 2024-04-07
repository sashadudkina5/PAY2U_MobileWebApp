import React, { useState, useEffect } from "react";
import giftIcon from "../../images/priceGiftIcon.svg";
import CustomButton from "../../../../global-components/Button/Button";
import variables from "../../../../styles-utils/variables.scss";
import PlanCardStyles from "./PlanCard.module.scss";
import infoIcon from "../../images/planInfoIcon.svg";
import Modal from "../../../../global-components/Modal/Modal";
import { getPlanInfo } from "../../../../redux_services/thunk-functions/getPlanInfo";
import { getSelectedPlanInfo } from "../../../../redux_services/selectors";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { AppDispatch } from "../../../../redux_services/store";
import { IPlanCondition} from "../../../../utils/types";
import { getSubscription } from "../../../../redux_services/slices/subscriptionProcessSlice"; 

interface IPlanCardProps {
  planTitle?: string;
  planDescription?: string;
  planPrice?: number;
  planPeriod?: string;
  pricePeriod?: string;
  planId: string;
  serviceID: string | undefined;
  isSelected: boolean;
  logo: string;
  title: string;
  onSelect: (trialPeriodDetails: { count: number; period: string; price: number }) => void;
  onPlanSelect: (planDetails: IPlanCondition) => void;
}

function PlanCard({
  planTitle,
  planDescription,
  planId,
  title,
  serviceID,
  isSelected,
  onSelect,
  onPlanSelect,
  logo
}: IPlanCardProps) {
  const dispatch: AppDispatch = useAppDispatch();
  const planInfo = useAppSelector((state) =>
    getSelectedPlanInfo(state, planId)
  );


  const handlePlanSelect = () => {
    if (planInfo) {
      dispatch(getSubscription({
        logo: {logo}, 
        price: planInfo.condition?.price,
        period: planInfo.condition?.period,
        trialPeriod: planInfo.trial_period?.period,
        trialCount: planInfo.trial_period?.count,
        trialPrice: planInfo.trial_period?.price,
        tariffID: planInfo.id,
        name: {title},
      }));
    }
  
    onPlanSelect({
      count: planInfo?.trial_period?.count,
      period: planInfo?.trial_period?.period,
      price: planInfo?.trial_period?.price,
    });

  };

  useEffect(() => {
    dispatch(getPlanInfo(serviceID, planId));
  }, [serviceID, dispatch, planId]);

  const isLoading = useAppSelector((state) => state.selectedPlanInfo.isLoading);

  const hasSpecialCondition =
    planInfo?.special_condition?.count !== undefined &&
    planInfo.special_condition.count !== 0;

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formattedMessage = (
    <div className={PlanCardStyles.modalWrapper}>
      <h5 className={PlanCardStyles.modalTitle}>Что входит в подписку?</h5>
      <p className={PlanCardStyles.planTitle}>{planTitle}</p>
      <ul className={PlanCardStyles.includesList}>
        <li>
          <p>
            {planInfo?.description}
          </p>
        </li>
      </ul>
      <CustomButton
        buttonName={"Понятно"}
        backgroundColor={variables.mainBackgroundColor}
        color={variables.mainTextFontColor}
        borderColor={variables.buttonBorderColor}
        onClick={() => setSnackbarOpen(false)}
      />
    </div>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={PlanCardStyles.planItemWrapper}>
      <button
        type="button"
        className={PlanCardStyles.infoButton}
        onClick={() => setSnackbarOpen(true)}
      >
        <img src={infoIcon} alt="Информация о тарифе." />
      </button>
      <h2 className={PlanCardStyles.planTitle}>{planTitle}</h2>
      {planInfo?.condition && (
        <span className={PlanCardStyles.totalPriceWrapper}>
          <p className={PlanCardStyles.priceTitle}>
            {planInfo.condition.price} ₽
          </p>
          <p className={PlanCardStyles.pricePeriod}>
            за {planInfo.condition.count}{" "}
            {planInfo.condition?.period?.toLowerCase()}
          </p>
        </span>
      )}

      {hasSpecialCondition ? (
        <p className={PlanCardStyles.priceDescription}>
          первый {planInfo.special_condition?.period?.toLocaleLowerCase()} за 
          {planInfo.special_condition?.price} ₽, далее —{" "}
          {planInfo.condition?.price} ₽⁠/
          {planInfo.condition?.period?.toLowerCase()}
        </p>
      ) : null}

      {planInfo?.trial_period && (
        <span className={PlanCardStyles.giftDescription}>
          <img src={giftIcon} alt="" />
          {planInfo.trial_period?.count}{" "}
          {planInfo.trial_period?.period?.toLocaleLowerCase()} за{" "}
          {planInfo.trial_period?.price} ₽
        </span>
      )}

<CustomButton
        buttonName={isSelected ? "Выбрано" : "Выбрать"}
        backgroundColor={isSelected ? variables.planSelectedBackground : variables.mainBackgroundColor}
        color={isSelected ? variables.planSelectedTextColor : variables.mainTextFontColor}
        borderColor={isSelected ? variables.planSelectedBackground : variables.buttonBorderColor}
        onClick={handlePlanSelect}
        style={{ padding: '10px 20px' }}
      />

      <Modal
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={formattedMessage}
      />
    </div>
  );
}

export default PlanCard;
