import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalModify = ({ show, onClose, onConfirm, task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [error, setError] = useState(null);

  if (!show) return null;

  const handleSubmit = () => {
    if (!/^[a-zA-Z\sàèéìòùÀÈÉÌÒÙ]+$/.test(title)) {
      setError("Il titolo può contenere solo lettere, spazi e lettere accentate");
      return;
    }

    if (!/^[a-zA-Z\sàèéìòùÀÈÉÌÒÙ]+$/.test(description)) {
      setError("La descrizione non può contenere simboli speciali");
      return;
    }

    setError(null);
    onConfirm({ ...task, title, description, status });
  };

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
        <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modifica Task</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Titolo</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Inserisci il titolo del task"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descrizione</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Inserisci la descrizione del task"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Stato</label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="To do">Da fare</option>
                  <option value="Doing">In corso</option>
                  <option value="Done">Completato</option>
                </select>
              </div>

              {error && <div className="alert alert-danger mt-2">{error}</div>}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Annulla
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Salva Modifiche
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ModalModify;
