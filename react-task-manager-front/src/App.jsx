import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDatail from './pages/TaskDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={TaskList} />
            <Route path="/add" Component={AddTask} />
            <Route path="/tasks/:id" Component={TaskDatail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;