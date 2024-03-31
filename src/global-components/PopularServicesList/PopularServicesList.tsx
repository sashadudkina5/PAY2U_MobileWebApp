import React from "react";

import PopularServicesListStyles from "./PopularServicesList.module.scss";
import PopularItem from "../PopularItem/PopularItem";
import { Link } from "react-router-dom";

interface IPopularListProps {
  linkNext: string;
}

function PopularServicesList({ linkNext }: IPopularListProps) {
  return (
    <ul className={PopularServicesListStyles.popularList}>
      <Link to={linkNext} style={{ textDecoration: "none", color: "inherit" }}>
        <li>
          {" "}
          <PopularItem />{" "}
        </li>
      </Link>
      <li>
        {" "}
        <PopularItem />{" "}
      </li>
      <li>
        {" "}
        <PopularItem />{" "}
      </li>
    </ul>
  );
}

export default PopularServicesList;
