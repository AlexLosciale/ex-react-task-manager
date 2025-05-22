import { useState, useRef } from "react";
import {useGlobalContext} from "../context/GlobalContext";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const {addTask} = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Il titolo non può essere vuoto");
      return;
    }

    if (!/^[a-zA-Z\sàèéìòùÀÈÉÌÒÙ]+$/.test(title)) {
      setError("Il titolo può contenere solo lettere, spazi e lettere accentate");
      return;
    }

    if (descriptionRef.current.value.trim() === "") {
      setError("La descrizione non può essere vuota");
      return;
    }

    if (!/^[a-zA-Z\sàèéìòùÀÈÉÌÒÙ]+$/.test(descriptionRef.current.value)) {
      setError("La descrizione non può contenere simboli speciali");
      return;
    }

    setError("");

    const newTask = {
      title,
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };

    try {
      const data = await addTask(newTask); 
      alert("Task salvato con successo");
  
      setTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "To do";
  
    } catch (error) {
      console.error("Errore nel salvataggio del task:", error.message);
      setError("Errore nel salvataggio del task");
    }
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
