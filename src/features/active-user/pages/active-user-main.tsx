import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/active-user-styles.module.scss";
import { Link } from "react-router-dom";
import infoIcon from "../images/infoIcon.svg";
import PopularServicesList from "../../../global-components/PopularServicesList/PopularServicesList";
import MySubscriptionInfo from "../components/MySubscriptionInfo/MySubscriptionInfo";
import CatalogList from "../../../global-components/CatalogList/CatalogList";

function ActiveUserMainPage() {
  return (
    <div>
      <div className={PageStyles.navWrapper}>
        <Navigation color="#FFFFFF" pageName={"Подписки"} />
        <div className={PageStyles.infoLinkWrapper}>
          <Link
            to="/main/details"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={infoIcon}
              alt="Подробности и дополнительная информация."
            />
          </Link>
        </div>
      </div>

      <section className={PageStyles.cashbackActiveServiceWrapper}>
        <div className={PageStyles.gridContainer}>
          <div
            className={PageStyles.gridItem + " " + PageStyles.periodCashback}
          >
            <p className={PageStyles.cashBackText}>Кешбэк за весь период</p>
            <p className={PageStyles.cashbackTotal}>+ 1496 ₽</p>
          </div>
          <div className={PageStyles.gridItem + " " + PageStyles.monthCashback}>
            <p className={PageStyles.cashBackText}>Кешбэк в этом месяце</p>
            <p className={PageStyles.cashbackAmount}>+ 496 ₽</p>
          </div>
          <div className={PageStyles.gridItem + " " + PageStyles.monthExpenses}>
            <p className={PageStyles.cashBackText}>Расходы в этом месяце</p>
            <p className={PageStyles.cashbackAmount}>- 1296 ₽</p>
          </div>
        </div>

        <div className={PageStyles.myServicesWrapper}>
          <div className={PageStyles.myServicesNavWrapper}>
            <h2 className={PageStyles.myServicesTitle}>Мои подписки (4)</h2>

            <Link
              to="/active/main/subscriptions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className={PageStyles.myServicesAllLink}>Все</p>
            </Link>
          </div>
        </div>

        <ul className={PageStyles.mySubscriptionsList}>
          <li>
            <MySubscriptionInfo />
          </li>
          <li>
            <MySubscriptionInfo />
          </li>
          <li>
            <MySubscriptionInfo />
          </li>
          <li>
            <MySubscriptionInfo />
          </li>
        </ul>
      </section>

      <div className={PageStyles.allServicesWrapper}>
        <h1 className={PageStyles.serivecesListTitle}>Популярные сервисы</h1>
        <PopularServicesList linkNext="/main/card" />

        <div className={PageStyles.catalogWrapper}>
          <h1 className={PageStyles.serivecesListTitle}>Каталог подписок</h1>
          <CatalogList linkNext="/main/card" />
        </div>
      </div>
    </div>
  );
}

export default ActiveUserMainPage;
