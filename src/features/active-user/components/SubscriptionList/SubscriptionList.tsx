import React, { useEffect } from "react";
import SubscriptionListStyles from "./SubscriptionList.module.scss";
import SubscriptionListItem from "../SubscriptionListItem/SubscriptionListItem";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { AppDispatch } from "../../../../redux_services/store";
import {
  getSuspendedSubscriptionsList,
  getActiceSubscriptionsList,
} from "../../../../redux_services/selectors";
import { getActiveSubscriptions } from "../../../../redux_services/thunk-functions/getActiveSubscriptions";
import { IActiveSubscriptionItem, ISuspendedSubscriptionItem } from "../../../../utils/types";
import { formatDate } from "../../../../utils/dates";
import { getSuspendedSubscriptions } from "../../../../redux_services/thunk-functions/getSuspendedSubscriptions";

interface ISubscriptionListProps {
  isActive: boolean;
}

function SubscriptionList({ isActive }: ISubscriptionListProps) {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if (isActive) {
      dispatch(getActiveSubscriptions(1));
    } else {
      dispatch(getSuspendedSubscriptions(0));
    }
  }, [dispatch, isActive]);

  const activeSubscriptions: any | IActiveSubscriptionItem[] = useAppSelector(
    getActiceSubscriptionsList
  );


  const suspendedSubscriptions: any | ISuspendedSubscriptionItem[] = useAppSelector(
    getSuspendedSubscriptionsList
  );

  const subscriptionsList = isActive ? activeSubscriptions : suspendedSubscriptions;
  const noSubscriptionsMessage = isActive
    ? 'Сейчас у вас нет активных подписок'
    : 'Сейчас у вас нет приостановленных подписок';

    return (
      <ul className={SubscriptionListStyles.mySubscriptionsListList}>
        {subscriptionsList.length > 0 ? (
          subscriptionsList.map((subscription: IActiveSubscriptionItem) => {
            const linkDestination = isActive 
              ? `/active/main/subscriptions/activated/${subscription.id}` 
              : `/active/main/subscriptions/suspended/${subscription.id}`;
  
            return (
              <Link
                to={linkDestination}
                style={{ textDecoration: "none", color: "inherit" }}
                key={subscription.id}
              >
                <li>
                  <SubscriptionListItem
                    isActive={isActive}
                    logo={subscription.logo}
                    serviceTitle={subscription.service_name}
                    period={subscription.period}
                    price={subscription.price}
                    tariffTitle={subscription.tariff_name}
                    paymentDate={formatDate(subscription.payment_date)}
                  />
                </li>
              </Link>
            );
          })
        ) : (
          <p>{noSubscriptionsMessage}</p>
        )}
      </ul>
    );
  }

  export default React.memo(SubscriptionList);
