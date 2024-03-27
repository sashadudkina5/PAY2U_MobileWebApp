import React from "react";
import PopularItemStyles from "./PopularItem.module.scss";

function PopularItem() {
  return (
    <div className={PopularItemStyles.popularItemWrapper}>
      <div className={PopularItemStyles.popularImageWrapper}>
        <img alt="title" />
        <span className={PopularItemStyles.popularCashbackWrapper}><p className={PopularItemStyles.popularCashbackValue}>cash%</p></span>
      </div>
    </div>
  );
}

export default PopularItem;
