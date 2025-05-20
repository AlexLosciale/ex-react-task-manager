import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={TaskList} />
            <Route path="/add" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;