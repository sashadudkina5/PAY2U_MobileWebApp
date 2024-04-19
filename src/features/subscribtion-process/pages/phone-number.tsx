import React, { useState } from "react";
import PageStyles from "../styles/global-styles.module.scss";
import { ReactComponent as PhoneNumberIcon } from "../images/phone-number-icon.svg";
import Info from "../components/Info/Info";
import Navigation from "../../../global-components/Navigation/Navigation";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import PhoneInput from "../components/PhoneInput/PhoneInput";
import { useNavigate } from "react-router-dom";
import { TSubmitHandler } from "../../../utils/types";
import { phoneNumberSchema } from "../../../utils/formValidations";
import { usePhoneNumber } from "../../../context/PhoneNumberContext";

function PhoneNumberSubscription() {
  const navigate = useNavigate();
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();
  

  const [error, setError] = useState("");

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleFocus = () => {
    if (!isFocused) {
      setPhoneNumber("");
      setIsFocused(true);
    }
  };

  const handleFormSubmit: TSubmitHandler = (e) => {
    e.preventDefault();
    try {
      phoneNumberSchema.parse(phoneNumber);
      setError("");
      navigate("/subscription/confirm");
    } catch (validationError) {
      setError("Введите номер телефона");
    }
  };

  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={"Номер телефона"} path="/main"/>
      <div className={PageStyles.contentWrapper}>
        <Info
          icon={<PhoneNumberIcon />}
          title="Оформим подписку на указанный телефон"
          description="Если подписка уже есть — привяжем телефон для получения кешбэка"
        />
        <form onSubmit={handleFormSubmit} className={PageStyles.formWrapper} id="phoneForm">
          <label htmlFor="phoneNumber" className={PageStyles.formLabel}>
            Номер телефона
          </label>
          <PhoneInput
            value={phoneNumber}
            onChange={handlePhoneChange}
            onFocus={handleFocus}
            inputID="phoneNumber"
            inputName="phoneNumber"
            inputClass={
              isFocused || phoneNumber !== "000 000-00-00"
                ? PageStyles.activeClass
                : PageStyles.defaultClass
            }
          />
          <p className={PageStyles.formErrorAlert}>{error}</p>
          <button type="submit" form="phoneForm" style={{ display: "none" }}>
            Далее
          </button>{" "}
        </form>
      </div>
      <div
        onClick={() =>
          document
            .getElementById("phoneForm")!
            .dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
      >
      <CustomButton
        buttonName={"Далее"}
        backgroundColor={variables.mainButtonColor}
        color={variables.mainTextFontColor}
      />
      </div>
    </div>
  );
}

export default PhoneNumberSubscription;
