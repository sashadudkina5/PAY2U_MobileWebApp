import React from "react";
import Navigation from "../../../global-components/Navigation/Navigation";
import PageStyles from "../styles/new-user-styles.module.scss";
import cashbackIcon from "../images/cashbackIcon.svg";
import controlIcon from "../images/controlIcon.svg";
import manageIcon from "../images/manageIcon.svg";
import oneClickIcon from "../images/oneClickItem.svg";
import sectionImage from '../images/detailsMainPic.png';
import Faq from '../components/FAQ/Faq'

function DetailsPage() {
  return (
    <div className={PageStyles.detailsPagewrapper}>
      <div className={PageStyles.navWrapper}>
        <Navigation color="#FFFFFF" pageName={"Подробности"} path="/main"/>
      </div>
      <section className={PageStyles.detailsPluses}>
        <h1 className={PageStyles.detailsTitle}>Подпишись на любимые сервисы с выгодой</h1>
        <ul className={PageStyles.detailsList}>
          <li className={PageStyles.detailsItem}>
            <img src={oneClickIcon} alt="Подключай в один клик." />
            <p className={PageStyles.detailsDescription}>Подключай в один клик</p>
          </li>

          <li className={PageStyles.detailsItem}>
            <img src={controlIcon} alt="Контролируй расходы." />
            <p className={PageStyles.detailsDescription}>Контролируй расходы</p>
          </li>

          <li className={PageStyles.detailsItem}>
            <img src={manageIcon} alt="Управляй своими подписками." />
            <p className={PageStyles.detailsDescription}>Управляй своими подписками</p>
          </li>

          <li className={PageStyles.detailsItem}>
            <img src={cashbackIcon} alt="Зарабатывай кешбэк до 30%!." />
            <p className={PageStyles.detailsDescription}>Зарабатывай кешбэк до 30%!</p>
          </li>
        </ul>

        <div className={PageStyles.detailsPicWrapper}>
        <img src={sectionImage} alt="Изображение поп-корна." />
        </div>
      </section>
      <div className={PageStyles.detailsFAQWrapper}>
      <Faq showExtraQuestion = {true} />
      </div>
    </div>
  );
}

export default DetailsPage;
