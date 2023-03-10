import React from 'react';
import './modal.css';

const Modal = ({ isOpen = false, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal">
            <button className="modal-close-btn" onClick={onClose}>
              X
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
