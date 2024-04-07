import React from "react";
import LogoutButtonStyles from "./LogoutButton.module.scss";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss";
import { logoutThunk } from "../../redux_services/thunk-functions/onLogOut";
import { useAppDispatch } from "../../utils/hooks";
import { useNavigate } from "react-router-dom"; 


/**
 * Renders a logout button using the `CustomButton` component with custom styles. When clicked, it dispatches
 * the `logoutThunk` action to handle user logout functionality. 
 *
 * @returns {JSX.Element} A styled button that, when clicked, triggers the logout process.
 */
function LogoutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/auth');
  };

  return (
    <div className={LogoutButtonStyles.logoutButton}>
      <CustomButton
        buttonName={"Выйти"}
        backgroundColor={variables.mainTextFontColor}
        color={variables.mainBackgroundColor}
        onClick={handleLogout}
      />
    </div>
  );
}

export default LogoutButton;
