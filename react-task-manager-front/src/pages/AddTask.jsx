import { useState, useRef } from "react";

const InvalidSimbol = ["#", "$", "%", "&", "/", "(", ")", "{", "}", "[", "]", "|", "\\", ";", ":", "'", '"', "<", ">", "?"];

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Il titolo non può essere vuoto");
      return;
    }

    if (InvalidSimbol.some((symbol) => title.includes(symbol))) {
      setError("Il titolo non può contenere simboli speciali");
      return;
    }

    if (descriptionRef.current.value.trim() === "") {
      setError("La descrizione non può essere vuota");
      return;
    }

    if (InvalidSimbol.some((symbol) => descriptionRef.current.value.includes(symbol))) {
      setError("La descrizione non può contenere simboli speciali");
      return;
    }

    setError("");

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
          />
          {error && <div className="text-danger mt-2">{error}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Descrizione</label>
          <textarea
            className="form-control"
            ref={descriptionRef}
            placeholder="Descrizione del task"
          ></textarea>
          {error && <div className="text-danger mt-2">{error}</div>}
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
