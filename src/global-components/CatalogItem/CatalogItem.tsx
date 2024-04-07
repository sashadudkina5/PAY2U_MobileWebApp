import React from "react";
import CatalogItemStyles from "./CatalogItem.module.scss";
import AddIcon from "@mui/icons-material/Add";

interface CatalogItem {
  title: string | undefined,
  cashback: number | undefined,
  logo: string | undefined
}

/**
 * Renders a single catalog item with a logo, service name, cashback information, and an add button.
 * @returns {JSX.Element} The CatalogItem component structured as a catalog card.
 */
function CatalogItem({title, cashback, logo}: CatalogItem) {
  return (
    <div className={CatalogItemStyles.catalogItemWrapper}>
      <div className={CatalogItemStyles.catalogLogoWrapper}>
        <img alt={title} src={logo}/>
      </div>
      <div className={CatalogItemStyles.catalogNamingWrapper}>
        <p className={CatalogItemStyles.catalogName}>{title}</p>
        <p className={CatalogItemStyles.catalogCashback}>Кешбэк {cashback}%</p>
      </div>
      <span className={CatalogItemStyles.catalogItemButton}>
        <AddIcon />
      </span>
    </div>
  );
}

export default CatalogItem;
