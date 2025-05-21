import { useState, useRef } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };

    console.log("Task aggiunto:", newTask);

    setTitle("");
    descriptionRef.current.value = "";
    statusRef.current.value = "To do";
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Aggiungi un nuovo task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome del task</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Inserisci il nome del task"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrizione</label>
          <textarea
            className="form-control"
            ref={descriptionRef}
            placeholder="Descrizione del task"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Stato</label>
          <select className="form-select" ref={statusRef} defaultValue="To do">
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Aggiungi Task
        </button>
      </form>
    </div>
  );
}
