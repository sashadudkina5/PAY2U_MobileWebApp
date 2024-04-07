import React from "react";

import PopularServicesListStyles from "./PopularServicesList.module.scss";
import PopularItem from "../PopularItem/PopularItem";
import { Link } from "react-router-dom";
import { getPopularServicesList } from "../../redux_services/selectors";
import { useAppSelector } from "../../utils/hooks";
import {IPopularService} from "../../utils/types";

/**
 * Renders a list of popular services, each represented by a `PopularItem` component.
 * The list items are sourced from a Redux selector `getPopularServicesList`, showcasing
 * each service's logo and cashback offer. Each `PopularItem` is wrapped in a `Link` to
 * navigate to detailed information about the service.
 *
 * @param {string} props.linkNext - The base path for the link to the detailed service page.
 * @returns {JSX.Element} A list of links containing popular services, each of which navigates to a service detail page.
 */
function PopularServicesList() {
  const popularServicesList = useAppSelector(getPopularServicesList);

  return (
    <ul className={PopularServicesListStyles.popularList}>
      {popularServicesList.map((service: IPopularService) => (
        <Link to={`/main/card/${service.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        key={service.id}
        >
        <li>
          <PopularItem
            logo={service.logo}
            cashback={service.cashback}
            key={service.id}
          />
        </li>
        </Link>
      ))}
    </ul>
  );
}

export default PopularServicesList;
