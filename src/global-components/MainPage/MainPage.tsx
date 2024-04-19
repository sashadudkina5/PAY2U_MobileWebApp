import React, { useEffect } from "react";
import ActiveUserMainPage from "../../features/active-user/pages/active-user-main";
import NewUserMainPage from "../../features/new-user-process/pages/main-page";
import { useAppSelector } from "../../utils/hooks";
import { getActiceSubscriptionsList } from "../../redux_services/selectors";
import { AppDispatch } from "../../redux_services/store";
import { getCashbackPeriod } from "../../redux_services/thunk-functions/getCashbackPeriod";
import { firstDayFormatted, lastDayFormatted } from "../../utils/formats";
import { getTotalExpenses } from "../../redux_services/thunk-functions/getTotalExpenses";
import { useAppDispatch } from "../../utils/hooks";

function MainPage() {
  const isAuthenticated = useAppSelector((state) => state.authInfo.loggedIn);

  const activeSubscriptions = useAppSelector(getActiceSubscriptionsList);

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCashbackPeriod(firstDayFormatted, lastDayFormatted));
    dispatch(getTotalExpenses(firstDayFormatted, lastDayFormatted));
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated ? (
        activeSubscriptions.length ? (
          <ActiveUserMainPage />
        ) : (
          <NewUserMainPage />
        )
      ) : null}
    </div>
  );
}

export default MainPage;
