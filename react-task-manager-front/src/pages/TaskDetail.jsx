import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import Modal from '../components/Modal';

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { tasks, deleteTask } = useGlobalContext();

  useEffect(() => {
    const taskId = Number(id);
    const foundTask = tasks.find((t) => t.id === taskId);
    if (foundTask) {
      setTask(foundTask);
    } else {
      console.warn('Task non trovato con ID:', taskId);
    }
  }, [id, tasks]);

  const getStatusBadge = () => {
    if (!task) return null;
    if (task.status === 'Done') return <span className="badge bg-success">Completato</span>;
    if (task.status === 'To do') return <span className="badge bg-warning">In Corso</span>;
    if (task.status === 'Doing') return <span className="badge bg-danger">Non Iniziato</span>;
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setShowModal(false);
    navigate('/');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!task) {
    return (
      <div className="container">
        <h1>Dettagli del Task</h1>
        <p>Task non trovato.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dettagli del Task</h1>
      <div className="card mb-3 shadow border rounded bg-light text-dark" style={{ maxWidth: '50%' }}>
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">Stato: {getStatusBadge()}</p>
          <p className="card-text">
            Creato il: {new Date(task.createdAt).toLocaleDateString('it-IT')}
          </p>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Elimina Task
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          show={showModal}
          title="Conferma Eliminazione"
          content="Sei sicuro di voler eliminare questo task?"
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          confirmText="Sì, elimina"
        />
      )}
    </div>
  );
}

export default TaskDetail;
