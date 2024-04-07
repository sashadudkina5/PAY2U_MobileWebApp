import React from "react";
import PopularItemStyles from "./PopularItem.module.scss";

interface IPopularItemProps {
  cashback:number;
  logo: string;
}

/**
 * Renders a component for a popular item, displaying its logo and the cashback percentage offered.
 * @param {number} props.cashback - The cashback percentage to display.
 * @param {string} props.logo - The source URL for the item's logo image.
 * @returns {JSX.Element} A styled component displaying a service's logo and its cashback offer.
 */
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
