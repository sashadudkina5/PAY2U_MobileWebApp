import React from "react";
import NavigationStyles from "./Navigation.module.scss";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  color: string;
  pageName: string;
  backgroundColor?: string;
  borderRadius?: string;
}

function Navigation({ color, pageName, backgroundColor, borderRadius }: NavigationProps) {
    const navigate = useNavigate();

  const iconStyle: React.CSSProperties = {
    color: color,
    transform: 'translate(-50%, -50%) rotate(180deg)',
    position: 'absolute',
    top: '50%',
    left:'50%',
    width: '40px',
    height: '40px',
    backgroundColor: backgroundColor ? backgroundColor : 'transparent',
    borderRadius: backgroundColor ? borderRadius : '0'

  };

  return (
    <div className={NavigationStyles.nav_wrapper}>
      <button type='button' aria-label="Назад" className={NavigationStyles.backButton} onClick={() => navigate(-1)}>
      <East style={iconStyle} />
      </button>
      <p className={NavigationStyles.pageName}>{pageName}</p>
    </div>
  );
}

export default Navigation;
