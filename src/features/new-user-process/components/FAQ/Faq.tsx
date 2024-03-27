import React from "react";
import FaqCardStyles from "./Faq.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IFaqProps {
  showExtraQuestion?: boolean;
}

function Faq({ showExtraQuestion }: IFaqProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className={FaqCardStyles.faqWrapper}>
      <h2 className={FaqCardStyles.faqTitle}>Что нужно знать</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >

{showExtraQuestion && (
        <Accordion
          expanded={expanded === "extraPanel"}
          onChange={handleChange("extraPanel")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="extraPanel-content"
            id="extraPanel-header"
          >
            <p className={FaqCardStyles.questionTitle}>Зачем мне подключать подписку в УралСиб, а не в сервисе?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={FaqCardStyles.answer}>Мы сделали процесс подключения подписок простым и надежным: вам больше не нужно вводить данные своей банковской карты, у нас вы подключаете сервис напрямую. А после подключения всю информацию о подписке вы сможете видеть в соответствующем разделе. Мы хотим, чтобы подписки радовали вас выгодой, а не огорчали неожиданными списаниями.</p>
          </AccordionDetails>
        </Accordion>
      )}

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Как оформить подписку?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={FaqCardStyles.answer}>
            Выберите подходящий тариф и нажмите оплатить. В соответствующем поле
            введите номер телефона, к которому будет привязана подписка,
            выберите счет списание и подтвердите оплату
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Списания будут происходить автоматически?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>Да, если вы активируете опцию «привязать счёт» при оплате</p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Я оформил подписку. Что дальше?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>
            После успешной оплаты вы получите промокод. Зайдите на сайт сервиса,
            зарегистрируйтесь и активируйте промокод в личном кабинете. Обратите
            внимание, что у промокода ограничен срок действия.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>У меня есть действующая подписка. Что с ней будет?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>
            Если вы привязывали карту в личном кабинете сервиса, то подписка
            отключится автоматически. Если вы подписывались через приложение в
            iPhone, рекомендуем отключить подписку в учетной записи apple.com
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Где посмотреть информацию об активной подписке?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>
            В разделе Подключенные сервисы вы найдете все подписки, подключенные
            через наше приложение
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Если я захочу отменить подписку. Как это сделать?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>
            Зайдите в карточку активной подписки и нажмите «Отключить
            автопродление» Подписка будет активна до конца оплаченного периода
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <p className={FaqCardStyles.questionTitle}>Когда я получу кэшбэк?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className={FaqCardStyles.answer}>
            За каждую оплату вы получите кэшбэк не менее 10% рублями. Зачисление
            происходит до 25 числа следующего за оплатой месяца
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Faq;
