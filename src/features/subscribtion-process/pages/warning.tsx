import React, {useEffect} from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as ToggleIcon } from "../images/toggle.svg";
import smallToggle from "../images/small-toggle.svg";
import Info from "../components/Info/Info";
import Navigation from "../../../global-components/Navigation/Navigation";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import { currentSubscription } from "../../../redux_services/selectors";
import { AppDispatch } from "../../../redux_services/store";
import { addNewService } from "../../../redux_services/thunk-functions/addNewService";
import { usePhoneNumber } from "../../../context/PhoneNumberContext";
import { addNewServiceError } from "../../../redux_services/selectors";
import { clearNewServiceError } from "../../../redux_services/slices/addNewServiceSlice";

function SubscriptionWarning() {
  const { phoneNumber } = usePhoneNumber();
  const dispatch: AppDispatch = useAppDispatch();

  const formatPhoneNumber = (phoneNumber: string) => {
    phoneNumber = phoneNumber.replace(/[\s-]/g, '');
    return phoneNumber;
  };
  const navigate = useNavigate();

  const paymentSuccess = useAppSelector(addNewServiceError);

  const handleButtonClick = () => {
   dispatch(addNewService(CurrentData.tariffID, formatPhoneNumber(phoneNumber)));
   navigate("/subscription/success");
   dispatch(clearNewServiceError())
  };

  const CurrentData = useAppSelector(currentSubscription);


  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={""} path="/subscription/confirm"/>
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
        <CustomButton
          buttonName={"Далее"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
          onClick={handleButtonClick}
        />
    </div>
  );
}

export default SubscriptionWarning;
