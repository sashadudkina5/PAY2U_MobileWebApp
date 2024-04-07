import React from "react";
import NavigationStyles from "./Navigation.module.scss";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  color: string;
  pageName: string;
  backgroundColor?: string;
  borderRadius?: string;
  path: string;
}

/**
 * Renders a navigation component with a back button and a label indicating the current page's name. 
 * The back button uses Material-UI's `East` icon rotated to point west, symbolizing a return action. 
 * The component's colors and styles can be customized via props. 
 *
 * @param {string} props.color The color of the back icon.
 * @param {string} props.pageName The name of the current page to display.
 * @param {string} [props.backgroundColor] The background color of the back icon. Defaults to 'transparent' if not provided.
 * @param {string} [props.borderRadius] The border radius of the back icon. Defaults to '0' if not provided.
 * @returns {JSX.Element} A navigation component with a stylized back button and page name label.
 */
function Navigation({ color, pageName, backgroundColor, borderRadius, path }: NavigationProps) {
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

  const handleBackButtonClick = () => {
    navigate(path); 
  };


  return (
    
    <div className={NavigationStyles.nav_wrapper}>
      <button type='button' aria-label="Назад" className={NavigationStyles.backButton} onClick={handleBackButtonClick}>
      <East style={iconStyle} />
      </button>
      <p className={NavigationStyles.pageName}>{pageName}</p>
    </div>
  );
}

export default Navigation;
