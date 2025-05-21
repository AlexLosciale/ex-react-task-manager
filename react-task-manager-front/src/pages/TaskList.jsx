import { useGlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

export default function TaskList() {
  const { tasks } = useGlobalContext();
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista dei Task</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrizione</th>
            <th scope="col">Stato</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

