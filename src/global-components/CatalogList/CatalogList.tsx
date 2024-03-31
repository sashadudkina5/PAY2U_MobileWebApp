import React from "react";

import CatalogListStyles from "./CatalogList.module.scss";

import { Link } from "react-router-dom";

import CatalogItem from "../CatalogItem/CatalogItem";

interface ICatalogListProps {
    linkNext: string;
}

function CatalogList({linkNext}: ICatalogListProps) {
  return (


        <ul className={CatalogListStyles.catalogList}>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to={linkNext}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={CatalogListStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
        </ul>
  );
}

export default CatalogList;
