import React from "react";
import modalOverlayStyles from "./ModalOverlay.module.scss";

interface iModalOverlayProps {
  isVisible: boolean;
}


/**
 * Displays an overlay component used for modals. The visibility of the overlay 
 * is controlled by the `isVisible` prop.
 *
 * @param {boolean} props.isVisible Determines if the overlay is visible or hidden.
 * @returns {JSX.Element} A div that serves as an overlay, with visibility controlled by `isVisible`.
 */
const ModalOverlay = ({ isVisible }: iModalOverlayProps) => {
  const overlayClasses = `${modalOverlayStyles.overlay} ${
    !isVisible ? modalOverlayStyles.hidden : ""
  }`;

  return <div className={overlayClasses} id="modal_overlay"></div>;
};

export default ModalOverlay;
