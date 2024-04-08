import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  buttonName?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  onClick?: (() => void) | ((e: any) => void);
  style?: React.CSSProperties;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

/**
 * Renders a customizable button component using Material-UI's Button. 
 * Allows customization of the button's text, background color, text color, border color, and additional inline styles. 
 * An `onClick` handler can also be provided to specify the button's behavior when clicked.
 *
 * @param {string} [props.buttonName] - The text to be displayed on the button.
 * @param {string} [props.backgroundColor] - The background color of the button.
 * @param {string} [props.color] - The text color of the button.
 * @param {string} [props.borderColor] - The color of the button's border. If provided, adds a 2px solid border with this color.
 * @param {Function} [props.onClick] - The function to call when the button is clicked. Can accept an event as an argument.
 * @param {React.CSSProperties} [props.style] - Additional inline styles to be applied to the button.
 *
 * @returns {JSX.Element} A Button component with customized styling and functionality.
 */
function CustomButton({
  buttonName,
  backgroundColor,
  color,
  borderColor,
  onClick,
  style,
  paddingTop,
  paddingBottom
}: CustomButtonProps) {

  const buttonCustomStyle = {
    backgroundColor,
    color,
    borderColor,
    border: borderColor ? `2px solid ${borderColor}` : undefined,
    paddingTop,
    paddingBottom,
    ...style,
  };

  return (
    <Button
      style={buttonCustomStyle}
      variant="contained"
      disableElevation
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
}

export default CustomButton;
