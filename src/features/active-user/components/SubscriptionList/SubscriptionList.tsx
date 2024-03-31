import React from "react";

import SubscriptionListStyles from "./SubscriptionList.module.scss";
import SubscriptionListItem from "../SubscriptionListItem/SubscriptionListItem"
import { Link } from "react-router-dom";

interface ISubscriptionListProps {
  linkNext: string;
}

function SubscriptionList({ linkNext }: ISubscriptionListProps) {
  return (
    <ul className={SubscriptionListStyles.mySubscriptionsListList}>
      <Link to={linkNext} style={{ textDecoration: "none", color: "inherit" }}>
        <li>
          {" "}
          <SubscriptionListItem />{" "}
        </li>
      </Link>
      <li>
        {" "}
        <SubscriptionListItem />{" "}
      </li>
      <li>
        {" "}
        <SubscriptionListItem />{" "}
      </li>
    </ul>
  );
}

export default SubscriptionList;
