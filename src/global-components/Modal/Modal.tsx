import React, { ReactNode, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CustomButton from "../Button/Button";
import ModalOverlay from "../ModalOverlay/ModalOverlay"

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  message?: string | ReactNode;
}


const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  message
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);


  React.useEffect(() => {
    setIsOverlayVisible(open);
  }, [open]);

  function closeModal () {
    console.log("Attempting to close modal...");
    onClose();
    setIsOverlayVisible(false);
  }

  return (
    <div>
    <ModalOverlay isVisible={isOverlayVisible}/>
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={closeModal}
      TransitionComponent={SlideTransition}
      message={
        <React.Fragment>
            <div>{message}</div>
        </React.Fragment>
      }
    />
    </div>
  );
};

export default Modal;
