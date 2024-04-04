import React from "react";

import PopularServicesListStyles from "./PopularServicesList.module.scss";
import PopularItem from "../PopularItem/PopularItem";
import { Link } from "react-router-dom";
import { getPopularServicesList } from "../../redux_services/selectors";
import { useAppSelector } from "../../utils/hooks";
import {IPopularService} from "../../utils/types";

interface IPopularListProps {
  linkNext: string;
}

function PopularServicesList({ linkNext }: IPopularListProps) {
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
