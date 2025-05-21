import React, { memo } from "react";

function TaskRow({ task }) {
    const getStatusBadge = () => {
        if (task.status === "Done") {
            return <span className="badge bg-success">Completato</span>;
        }
        if (task.status === "To do") {
            return <span className="badge bg-warning">In Corso</span>;
        }
        if (task.status === "Doing") {
            return <span className="badge bg-danger">Non Iniziato</span>;
        }
      }; 
    return (
    <tr>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{getStatusBadge()}</td>
    </tr>
  );
}
export default React.memo(TaskRow);