import React from "react";
import FaqCardStyles from "./Faq.module.scss";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Faq() {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className={FaqCardStyles.faqWrapper}>

<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p>
          Как оформить подписку?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          Выберите подходящий тариф и нажмите оплатить. В соответствующем поле введите номер телефона, к которому будет привязана подписка, выберите счет списание и подтвердите оплату
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <p>Списания будут происходить автоматически?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          Да, если вы активируете опцию «привязать счёт» при оплате
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <p>
          Я оформил подписку. Что дальше?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          После успешной оплаты вы получите промокод. Зайдите на сайт сервиса, зарегистрируйтесь и активируйте промокод в личном кабинете. Обратите внимание, что у промокода ограничен срок действия.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <p>У меня есть действующая подписка. Что с ней будет?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Faq;