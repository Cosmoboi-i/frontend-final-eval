import React from 'react';
import './modal.css';

export default function Modal({ isOpen = false, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close-btn" onClick={onClose}>
              Save & Close
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
