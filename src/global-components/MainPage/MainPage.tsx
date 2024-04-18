import React, { useEffect } from "react";
import ActiveUserMainPage from "../../features/active-user/pages/active-user-main";
import NewUserMainPage from "../../features/new-user-process/pages/main-page";
import { useAppSelector } from "../../utils/hooks";
import { getActiceSubscriptionsList } from "../../redux_services/selectors";
import { getTotalCashback } from "../../redux_services/thunk-functions/getCashbackTotal";
import { AppDispatch } from "../../redux_services/store";
import { getCashbackPeriod } from "../../redux_services/thunk-functions/getCashbackPeriod";
import { firstDayFormatted, lastDayFormatted } from "../../utils/formats";
import { getTotalExpenses } from "../../redux_services/thunk-functions/getTotalExpenses";
import { useAppDispatch } from "../../utils/hooks";
import { getFutureExpenses } from "../../redux_services/thunk-functions/getFutureExpenses";

function MainPage() {
  const isAuthenticated = useAppSelector((state) => state.authInfo.loggedIn);

  const activeSubscriptions = useAppSelector(getActiceSubscriptionsList);

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalCashback());
    dispatch(getCashbackPeriod(firstDayFormatted, lastDayFormatted));
    dispatch(getTotalExpenses(firstDayFormatted, lastDayFormatted));
    dispatch(getFutureExpenses());
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
