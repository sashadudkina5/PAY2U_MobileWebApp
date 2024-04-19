import React from "react";
import CatalogListStyles from "./CatalogList.module.scss";
import { Link } from "react-router-dom";
import CatalogItem from "../CatalogItem/CatalogItem";
import { getCatalogList } from "../../redux_services/selectors";
import { useAppSelector } from "../../utils/hooks";

/**
 * Displays a list of catalog items as links.
 * Each item in the list is a `CatalogItem` component, wrapped in a `Link` from `react-router-dom` to navigate
 * to a specified route (`linkNext`) upon click.
 *
 * The component takes a prop, `linkNext`, which specifies the navigation route for each catalog item.
 *
 * @param {string} props.linkNext - The route to navigate to when a catalog item is clicked.
 * @returns {JSX.Element} A list of linked catalog items for navigation within the application.
 */
function CatalogList() {
  const catalogList = useAppSelector(getCatalogList);
  return (
    <ul className={CatalogListStyles.catalogList}>
      {catalogList.map((service) => {
        return(
          <Link to={`/main/card/${service.id}`} style={{ textDecoration: "none", color: "inherit" }} key={service.id}>
          <li className={CatalogListStyles.catalogItem} key={service.id}>
            <CatalogItem title={service.name} cashback={service.cashback} logo={service.logo}/>
          </li>
        </Link>
        )
      })}
    </ul>
  );
}

export default CatalogList;
