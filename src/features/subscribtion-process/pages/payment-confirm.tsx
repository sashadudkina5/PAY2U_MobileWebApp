import React, {useState} from "react";
import PageStyles from "../styles/global-styles.module.scss";
import Navigation from "../../../global-components/Navigation/Navigation";
import CustomButton from "../../../global-components/Button/Button";
import variables from "../../../styles-utils/variables.scss";
import { Link } from "react-router-dom";
import { paymentData } from "../../../utils/billing-data";
import Modal from "../../../global-components/Modal/Modal"

function PaymentConfirm() {
  const paymentItem = paymentData[0];

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formattedMessage = (
    <div>
      <h2 className={PageStyles.modalTitle}>
        Политика обработки персональных данных
      </h2>
      <div className={PageStyles.modalContentWrapper}>
        <p className={PageStyles.modalContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis ut lectus eu convallis. Ut eu vehicula risus. Nunc leo ligula,
          tempor et scelerisque sed, sollicitudin vel sapien. Sed vitae suscipit
          odio, sit amet mattis nunc. Praesent venenatis nisl eu lacus luctus,
          sit amet malesuada felis interdum. Sed eleifend elementum pharetra.
          Etiam varius malesuada leo, non dictum nulla sodales id. Integer
          suscipit enim sed pulvinar ultricies. Nam facilisis dui eleifend,
          sodales tortor at, dignissim tortor. Integer vel viverra velit, eget
          ultricies leo. Etiam pellentesque lacinia arcu, quis posuere nulla
          convallis nec. Vestibulum vel neque vitae dolor consectetur vulputate
          nec et erat. Sed et gravida risus, eget dictum ligula. Quisque
          ultricies leo ac tortor elementum pellentesque. Sed auctor nec purus
          quis condimentum. Curabitur eu arcu volutpat, bibendum dui ac,
          ultrices ipsum. Vestibulum massa eros, suscipit sit amet elit quis,
          aliquam porttitor lacus. Suspendisse lacinia neque nisi, a tincidunt
          nisl
        </p>
      </div>
      <CustomButton
        buttonName={"Понятно"}
        backgroundColor={variables.mainBackgroundColor}
        color={variables.mainTextFontColor}
        borderColor={variables.buttonBorderColor}
        onClick={() => {
          console.log("Closing modal...");
          setSnackbarOpen(false);
        }}
      />
    </div>
  );

  return (
    <div className={PageStyles.page_wrapper}>
      <Navigation color="primary" pageName={"Оформление"} />
      <div className={PageStyles.contentWrapper}>
        <div>
          <img src={"иконка логотипа"} alt={"название сервиса"} />
          <h1 className={PageStyles.serviceName}>{"название сервиса"}</h1>
          <span>
            <p className={PageStyles.priceInfo}>{"1 ₽"}</p>
            <p>за месяц</p>
          </span>
          <p className={PageStyles.planInfo}>
            первый месяц за 1 ₽, дальше — 399 ₽⁠/⁠месяц
          </p>
        </div>
        <div>
          <div>
            <p className={PageStyles.inputTitle}>Номер телефона</p>
            <p>+ 7 (900) 999-99-99</p>
          </div>

          <div className={PageStyles.billingWrapper}>
            <span>
              <img src={paymentItem.iconWithBackground} alt="Счет списания" />
            </span>
            <div>
              <p className={PageStyles.inputTitle}>Счёт списания</p>
              <p>{paymentItem.title}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/subscription/warning">
        <CustomButton
          buttonName={"К оплате 1 ₽"}
          backgroundColor={variables.mainButtonColor}
          color={variables.mainTextFontColor}
        />
      </Link>
      <div>
        <span className={PageStyles.policy}>
          Нажимая кнопку «К оплате» вы соглашаетесь
          <span onClick={() => setSnackbarOpen(true)}> с политикой обработки персональных данных
          <Modal
            open={snackbarOpen}
            onClose={() => setSnackbarOpen(false)}
            message={formattedMessage}
          />
          </span>и с правилами
          партнера
        </span>
      </div>
    </div>
  );
}

export default PaymentConfirm;
