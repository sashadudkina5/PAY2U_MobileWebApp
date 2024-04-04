import React from "react";
import PopularItemStyles from "./PopularItem.module.scss";

interface IPopularItemProps {
  cashback:number;
  logo: string;
}

function PopularItem({cashback, logo}: IPopularItemProps) {

  return (
    <div className={PopularItemStyles.popularItemWrapper}>
      <div className={PopularItemStyles.popularImageWrapper}>
        <img src={logo} alt="Популярный сервис"/>
        <span className={PopularItemStyles.popularCashbackWrapper}><p className={PopularItemStyles.popularCashbackValue}>{cashback}%</p></span>
      </div>
    </div>
  );
}

export default PopularItem;
