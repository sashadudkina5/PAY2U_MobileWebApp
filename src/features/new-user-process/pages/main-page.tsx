import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";
import PopularItem from "../components/PopularItem/PopularItem";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import PlusLogo from "../images/bannerAnimation/Logo_Plus.svg";
import OkkoLogo from "../images/bannerAnimation/Logo_okko.svg";
import SpotifyLogo from "../images/bannerAnimation/Logo_spotify.svg";
import StorytelLogo from "../images/bannerAnimation/Logo_storytel.svg";
import WinkLogo from "../images/bannerAnimation/Logo_wink.svg";
import VKLogo from "../images/bannerAnimation/VK (2).svg";
import LitResLogo from "../images/bannerAnimation/Литрес.svg";

function NewUserMainPage() {
  return (
    <div className={PageStyles.page_wrapper}>
        <Navigation color="primary" pageName={"Подписки"} />
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
    className={PageStyles.iconAnimate} // Add this class to apply the animation
  />
  <img
    src={OkkoLogo}
    alt="Icon Okko"
    className={PageStyles.iconAnimate} // Repeat for each icon
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
  <img
    src={VKLogo}
    alt="Icon VK"
    className={PageStyles.iconAnimate}
  />
  <img
    src={LitResLogo}
    alt="Icon LitRes"
    className={PageStyles.iconAnimate}
  />
</div>
      </section>

      <section className={PageStyles.popularWrapper}>
        <h1 className={PageStyles.newUseTitle}>Популярные сервисы</h1>
        <ul className={PageStyles.popularList}>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              {" "}
              <PopularItem />{" "}
            </li>
          </Link>
          <li>
            {" "}
            <PopularItem />{" "}
          </li>
          <li>
            {" "}
            <PopularItem />{" "}
          </li>
        </ul>
      </section>

      <section className={PageStyles.catalogWrapper}>
        <h1 className={PageStyles.newUseTitle}>Каталог подписок</h1>

        <ul className={PageStyles.catalogList}>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
          <Link
            to="/main/card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className={PageStyles.catalogItem}>
              {" "}
              <CatalogItem />{" "}
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default NewUserMainPage;
