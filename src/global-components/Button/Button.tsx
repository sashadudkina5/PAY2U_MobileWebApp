import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  buttonName?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function CustomButton({
  buttonName,
  backgroundColor,
  color,
  borderColor,
  onClick,
  style
}: CustomButtonProps) {

  const buttonCustomStyle = {
    backgroundColor,
    color,
    borderColor,
    border: borderColor ? `2px solid ${borderColor}` : undefined,
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
