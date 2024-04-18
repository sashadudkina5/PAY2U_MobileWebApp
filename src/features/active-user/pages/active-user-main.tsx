import React from "react";
import PageStyles from "../styles/active-user-styles.module.scss";
import { Link } from "react-router-dom";
import infoIcon from "../images/infoIcon.svg";
import PopularServicesList from "../../../global-components/PopularServicesList/PopularServicesList";
import MySubscriptionInfo from "../components/MySubscriptionInfo/MySubscriptionInfo";
import CatalogList from "../../../global-components/CatalogList/CatalogList";
import LogoutButton from "../../../global-components/LogoutButton/LogoutButton";
import { getCashbackTotal } from "../../../redux_services/selectors";
import { useAppSelector } from "../../../utils/hooks";
import {
  getCashbackMonthly,
  getAllExpenses,
  getActiceSubscriptionsList,
} from "../../../redux_services/selectors";
import { IActiveSubscriptionItem } from "../../../utils/types";
import { getCurrentMonth } from "../../../utils/monthsStrings";
import { formatDate } from "../../../utils/formats";
function ActiveUserMainPage() {

  const totalCashback = useAppSelector(getCashbackTotal);
  const monthlyCashback = useAppSelector(getCashbackMonthly);
  const totalExpenses = useAppSelector(getAllExpenses);
  const activeSubscriptions: any | IActiveSubscriptionItem[] = useAppSelector(
    getActiceSubscriptionsList
  );


  return (
    <div>
      <section className={PageStyles.cashbackActiveServiceWrapper}>
        <div className={PageStyles.navWrapper}>
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

        <div className={PageStyles.gridContainer}>
          <Link
            to="/analytics/cashback"
            style={{ textDecoration: "none", color: "inherit" }}
            className={PageStyles.gridItem + " " + PageStyles.periodCashback}
          >
            <div>
              <p className={PageStyles.cashBackText}>Кешбэк за весь период</p>
              {totalCashback ? (
                <p className={PageStyles.cashbackTotal}>+ {totalCashback} ₽</p>
              ) : (
                <p className={PageStyles.cashbackTotal}>{totalCashback} ₽</p>
              )}
              {!totalCashback ? (
                <p className={PageStyles.cashBackText}>
                  Кешбэк ещё копится и придёт 25 {getCurrentMonth()}
                </p>
              ) : null}
            </div>
          </Link>

          <Link
            to="/analytics/cashback"
            style={{ textDecoration: "none", color: "inherit" }}
            className={PageStyles.gridItem + " " + PageStyles.monthCashback}
          >
            <div>
              <p className={PageStyles.cashBackText}>Кешбэк в этом месяце</p>
              {monthlyCashback ? (
                <p className={PageStyles.cashbackAmount}>
                  + {monthlyCashback} ₽
                </p>
              ) : (
                <p className={PageStyles.cashbackAmount}>0 ₽</p>
              )}
            </div>
          </Link>
          <Link
            to="/analytics/expenses"
            style={{ textDecoration: "none", color: "inherit" }}
            className={PageStyles.gridItem + " " + PageStyles.monthExpenses}
          >
            <div>
              <p className={PageStyles.cashBackText}>Расходы в этом месяце</p>
              {totalExpenses ? (
                <p className={PageStyles.cashbackAmount}>- {totalExpenses} ₽</p>
              ) : (
                <p className={PageStyles.cashbackAmount}>{totalExpenses} ₽</p>
              )}
            </div>
          </Link>
        </div>

        <div className={PageStyles.myServicesWrapper}>
          <div className={PageStyles.myServicesNavWrapper}>
            <h2 className={PageStyles.myServicesTitle}>
              Мои подписки ({activeSubscriptions.length})
            </h2>

            <Link
              to="/active/main/subscriptions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className={PageStyles.myServicesAllLink}>Все</p>
            </Link>
          </div>
        </div>

        <ul className={PageStyles.mySubscriptionsList}>
          {activeSubscriptions
            ? activeSubscriptions.map(
                (subscription: any | IActiveSubscriptionItem) => {
                  return (
                    <li key={subscription.id}>
                      <Link
                        to={`/active/main/subscriptions/activated/${subscription.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MySubscriptionInfo
                          logo={subscription.logo}
                          price={subscription.price}
                          period={subscription.period.toLowerCase()}
                          title={subscription.tariff_name}
                          paymentDate={formatDate(subscription.payment_date)}
                          trialEnd={formatDate(
                            subscription.trial_period_end_date
                          )}
                          tariffName={subscription.service_name}
                        />
                      </Link>
                    </li>
                  );
                }
              )
            : null}
        </ul>
      </section>

      <div className={PageStyles.allServicesWrapper}>
        <h1 className={PageStyles.serivecesListTitle}>Популярные сервисы</h1>
        <PopularServicesList />

        <div className={PageStyles.catalogWrapper}>
          <h1 className={PageStyles.serivecesListTitle}>Каталог подписок</h1>
          <CatalogList />
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}

export default ActiveUserMainPage;
