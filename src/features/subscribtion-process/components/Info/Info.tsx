import React, { ReactNode } from 'react';
import InfoStyles from './Info.module.scss';

interface InfoProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
}

function Info(props: InfoProps) {
  return (
    <div className={InfoStyles.info_wrapper}>
        <div className={InfoStyles.icon}>{props.icon}</div>
        <h1 className={InfoStyles.info_title}>{props.title}</h1>
        <p className={InfoStyles.info_description}>{props.description}</p>
    </div>
  );
}

export default Info;
