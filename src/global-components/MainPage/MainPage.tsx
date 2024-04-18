import React from "react";
import PageStyles from "../../features/subscribtion-process/styles/global-styles.module.scss";
import { ReactComponent as ErrorIcon } from "../../features/subscribtion-process/images/errorIcon.svg";
import Info from "../../features/subscribtion-process/components/Info/Info";
import Navigation from "../Navigation/Navigation";
import CustomButton from "../Button/Button";
import variables from "../../styles-utils/variables.scss";
import { Link } from "react-router-dom";
import ActiveUserMainPage from "../../features/active-user/pages/active-user-main";
import NewUserMainPage from "../../features/new-user-process/pages/main-page";
import { useAppSelector } from "../../utils/hooks";
import { getActiceSubscriptionsList, getAllExpenses } from "../../redux_services/selectors";

function MainPage() {
    const totalExpenses = useAppSelector(getAllExpenses);
    const isAuthenticated = useAppSelector((state) => state.authInfo.loggedIn);

  const activeSubscriptions = useAppSelector(getActiceSubscriptionsList);
    
  return (

    <div>
            {isAuthenticated ? (activeSubscriptions.length ? <ActiveUserMainPage /> : <NewUserMainPage />) : null}
        </div>
  );
}

export default MainPage;
