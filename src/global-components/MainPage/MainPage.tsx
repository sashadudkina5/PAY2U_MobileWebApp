import React from "react";
import ActiveUserMainPage from "../../features/active-user/pages/active-user-main";
import NewUserMainPage from "../../features/new-user-process/pages/main-page";
import { useAppSelector } from "../../utils/hooks";
import { getActiceSubscriptionsList } from "../../redux_services/selectors";

function MainPage() {
    const isAuthenticated = useAppSelector((state) => state.authInfo.loggedIn);

  const activeSubscriptions = useAppSelector(getActiceSubscriptionsList);
    
  return (

    <div>
            {isAuthenticated ? (activeSubscriptions.length ? <ActiveUserMainPage /> : <NewUserMainPage />) : null}
        </div>
  );
}

export default MainPage;
