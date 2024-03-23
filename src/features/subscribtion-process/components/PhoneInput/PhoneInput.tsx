import React from "react";
import InputMask from "react-input-mask";
import PhoneNumberInputStyles from "./PhoneInput.module.scss";

interface iPhoneNumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  inputID: string;
  inputName: string;
  inputClass?: string;
}

function PhoneNumberInput({
  value,
  onChange,
  onFocus,
  inputID,
  inputName,
  inputClass = "",
}: iPhoneNumberInputProps) {
  const combinedClassNames = `${PhoneNumberInputStyles.input} ${inputClass}`;

  return (
    <InputMask
      mask="+7 999 999-99-99"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      disabled={false}
      alwaysShowMask={true}
      maskChar={null}
    >
      {(inputProps: iPhoneNumberInputProps) => (
        <input
          {...inputProps}
          className={combinedClassNames}
          type="tel"
          id={inputID}
          name={inputName}
        />
      )}
    </InputMask>
  );
}

export default PhoneNumberInput;
