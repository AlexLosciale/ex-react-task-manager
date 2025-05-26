//Creare il componente Modal.jsx, che deve:
//Accettare i seguenti props:
//title: il titolo della modale.
//content: il contenuto principale della modale.
//show: stato booleano per mostrare o nascondere la modale.
//onClose: funzione per chiudere la modale.
//onConfirm: funzione eseguita al click del bottone di conferma.
//confirmText (opzionale, default "Conferma"): testo del bottone di conferma.
//Utilizzare ReactDOM.createPortal per rendere la modale indipendente dal flusso di rendering.
//Implementare i pulsanti "Annulla" (chiude la modale) e "Conferma" (esegue onConfirm).

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      />
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1050 }}
        aria-modal="true"
      >
        <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Annulla
              </button>
              <button type="button" className="btn btn-danger" onClick={onConfirm}>
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;

