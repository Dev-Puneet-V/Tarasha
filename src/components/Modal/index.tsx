import React from 'react';
import './style.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicks on the modal content from closing the modal
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={handleClose}
        >
          <div className="modal" onClick={handleOverlayClick}>
            <div className="modal-header">
              <button className="close-icon" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
