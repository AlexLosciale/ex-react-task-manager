import { useGlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

export default function TaskList() {
  const { tasks } = useGlobalContext();
  
    return (
      <div className="container mt-5">
        <div className=" p-4">
          <h1 className="mb-4">Cerca Task</h1>
    
          <div className="mb-4">
            <input
              type="search"
              className="form-control"
              placeholder="Cerca per nome..."
            />
          </div>
    
          <h2 className="mb-3">Lista dei Task</h2>
    
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
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
        </div>
      </div>
    );
}
    

