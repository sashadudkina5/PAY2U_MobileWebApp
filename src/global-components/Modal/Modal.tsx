import React, { ReactNode, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import ModalOverlay from "../ModalOverlay/ModalOverlay"

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  message?: string | ReactNode;
}

/**
 * Renders a modal component utilizing Material-UI's Snackbar for displaying messages with a slide transition effect. 
 * It also includes a `ModalOverlay` component that provides a backdrop for the modal. The visibility of both 
 * the modal and the overlay is controlled by the `open` prop.
 *
 * @param {boolean} props.open Controls the visibility of the modal and its overlay.
 * @param {() => void} props.onClose A callback function that handles the modal's close action.
 * @param {string | ReactNode} [props.message] The content to be displayed within the modal, which can be either text or JSX.
 * @returns {JSX.Element} A modal with a sliding animation and an overlay backdrop.
 */
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
