import React from "react";
import giftIcon from "../../images/priceGiftIcon.svg";
import CustomButton from "../../../../global-components/Button/Button";
import variables from "../../../../styles-utils/variables.scss";
import ServiceIncludesStyles from "./serviceIncludes.module.scss";

interface ServiceIncludesProps {
  includesDescription: string;
}

function ServiceIncludes({ includesDescription }: ServiceIncludesProps) {
  return (
    <section className={ServiceIncludesStyles.serviceIncludesWrapper}>
      <h2 className={ServiceIncludesStyles.includesTitle}>Сервис включает</h2>
      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Эксклюзивы</h3>
        <ul className={ServiceIncludesStyles.includesList}>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
        </ul>
      </div>

      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Популярное</h3>
        <ul className={ServiceIncludesStyles.includesList}>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
          <li className={ServiceIncludesStyles.includesItem}></li>
        </ul>
      </div>

      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Описание</h3>
        <p className={ServiceIncludesStyles.serviceInfo}>
          {includesDescription}
        </p>
        <button type="button" className={ServiceIncludesStyles.showMoreButton}>Развернуть полное описание</button>
      </div>
    </section>
  );
}

export default ServiceIncludes;
