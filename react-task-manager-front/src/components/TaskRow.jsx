import React from "react";
import { Link } from "react-router-dom";

function TaskRow({ task }) {
  const getStatusBadge = () => {
    if (task.status === "Done") {
      return <span className="badge bg-success">Completato</span>;
    }
    if (task.status === "To do") {
      return <span className="badge bg-danger">Da fare</span>;
    }
    if (task.status === "Doing") {
      return <span className="badge bg-warning text-dark">In corso</span>;
    }
    return <span className="badge bg-light text-dark">Sconosciuto</span>;
  };

  return (
    <tr>
      <td>
        <Link
          to={`/tasks/${task.id}`}
          className="link-primary text-decoration-none fw-bold hover-text-decoration-underline hover-text-primary text-dark"
        >
          {task.title}
        </Link>
      </td>
      <td>{task.description}</td>
      <td>{getStatusBadge()}</td>
    </tr>
  );
}

export default React.memo(TaskRow);
