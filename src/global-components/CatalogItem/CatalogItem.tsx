import React from "react";
import CatalogItemStyles from "./CatalogItem.module.scss";
import AddIcon from '@mui/icons-material/Add';

function CatalogItem() {
  return (
    <div className={CatalogItemStyles.catalogItemWrapper}>

        <div className={CatalogItemStyles.catalogLogoWrapper}>
            <img alt="logo"/>
        </div>

        <div className={CatalogItemStyles.catalogNamingWrapper}>
            <p className={CatalogItemStyles.catalogName}>
                Service Name
            </p>
            <p className={CatalogItemStyles.catalogCashback}>
                Cashback
            </p>
        </div>
        <span className={CatalogItemStyles.catalogItemButton}>
            <AddIcon />
        </span>
    </div>
  );
}

export default CatalogItem;
