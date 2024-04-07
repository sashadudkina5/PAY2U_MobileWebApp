import React, { useEffect } from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link, useNavigate } from "react-router-dom";
import PlusLogo from "../images/bannerAnimation/Logo_Plus.svg";
import OkkoLogo from "../images/bannerAnimation/Logo_okko.svg";
import SpotifyLogo from "../images/bannerAnimation/Logo_spotify.svg";
import StorytelLogo from "../images/bannerAnimation/Logo_storytel.svg";
import WinkLogo from "../images/bannerAnimation/Logo_wink.svg";
import VKLogo from "../images/bannerAnimation/VK (2).svg";
import LitResLogo from "../images/bannerAnimation/Литрес.svg";
import CatalogList from "../../../global-components/CatalogList/CatalogList";
import PopularServicesList from "../../../global-components/PopularServicesList/PopularServicesList";
import LogoutButton from "../../../global-components/LogoutButton/LogoutButton";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import {
  getAllExpenses,
  getActiceSubscriptionsList,
} from "../../../redux_services/selectors";
import { AppDispatch } from "../../../redux_services/store";

function NewUserMainPage() {
  const totalExpenses = useAppSelector(getAllExpenses);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const activeSubscriptions = useAppSelector(getActiceSubscriptionsList);

  function displayHistoryButton() {
    let displayHistoty = false;
    if (!activeSubscriptions.length && totalExpenses > 0) {
      displayHistoty = true;
    }
    return displayHistoty;
  }

  useEffect(() => {
    if (activeSubscriptions.length) {
      navigate("/active/main", { replace: true });
    }
  }, [dispatch, activeSubscriptions, totalExpenses, navigate]);

  return (
    <div className={PageStyles.mainPage_wrapper}>
      <div className={PageStyles.navWrapper}>
      </div>
      <section className={PageStyles.newUserBannerWrapper}>
        <div className={PageStyles.newUserBannerWrapperAnimation}>
          <h1 className={PageStyles.newUseTitle}>Кешбэк до 30% за подписки</h1>
          <p className={PageStyles.bannerDescription}>
            Пользуйся новыми или старыми подписками с выгодой
          </p>
          <div>
            <div className={PageStyles.bannerButtonWrapper}>
              <Link to="/main/details">
                <CustomButton
                  buttonName={"Узнать подробнее"}
                  backgroundColor={variables.mainButtonColor}
                  color={variables.mainTextFontColor}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={PageStyles.iconContainer}>
          <img
            src={PlusLogo}
            alt="Icon Plus"
            className={PageStyles.iconAnimate}
          />
          <img
            src={OkkoLogo}
            alt="Icon Okko"
            className={PageStyles.iconAnimate}
          />
          <img
            src={SpotifyLogo}
            alt="Icon Spotify"
            className={PageStyles.iconAnimate}
          />
          <img
            src={StorytelLogo}
            alt="Icon Storytel"
            className={PageStyles.iconAnimate}
          />
          <img
            src={WinkLogo}
            alt="Icon Wink"
            className={PageStyles.iconAnimate}
          />
          <img src={VKLogo} alt="Icon VK" className={PageStyles.iconAnimate} />
          <img
            src={LitResLogo}
            alt="Icon LitRes"
            className={PageStyles.iconAnimate}
          />
        </div>
      </section>

      {displayHistoryButton() && (
        <Link
          to="/analytics/cashback"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={PageStyles.historyButton}>
            <p className={PageStyles.historyButtonTitle}>История</p>
            <p className={PageStyles.historyButtonDescription}>
              Аналитика списаний и зачислений
            </p>
          </div>
        </Link>
      )}
      <section className={PageStyles.popularWrapper}>
        <h1 className={PageStyles.newUseTitle}>Популярные сервисы</h1>
        <PopularServicesList />
      </section>

      <section className={PageStyles.catalogWrapper}>
        <h1 className={PageStyles.newUseTitle}>Каталог подписок</h1>

        <CatalogList />
      </section>

      <LogoutButton />
    </div>
  );
}

export default NewUserMainPage;
