import { useGlobalContext } from '../context/GlobalContext';
import { useState, useCallback } from 'react';
import TaskRow from '../components/TaskRow';

export default function TaskList() {
  const { tasks } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function Debounce(callback, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }

  const debouncedSearch = useCallback(
    Debounce((term) => {
      setSearchTerm(term);
    }, 1000),
    []
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="mb-4">Cerca Task</h1>

        <div className="mb-4">
          <input
            type="search"
            className="form-control"
            placeholder="Cerca per nome..."
            onChange={handleSearchChange}
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
              {filteredTasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
