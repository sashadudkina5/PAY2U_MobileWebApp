import React from 'react';
import modalOverlayStyles from './ModalOverlay.module.scss';

interface iModalOverlayProps {
    isVisible: boolean
}

const ModalOverlay = ({ isVisible }: iModalOverlayProps) => {

  const overlayClasses = `${modalOverlayStyles.overlay} ${!isVisible ? modalOverlayStyles.hidden : ''}`;
  
  return <div className={overlayClasses} id="modal_overlay"></div>;
};

export default ModalOverlay;
