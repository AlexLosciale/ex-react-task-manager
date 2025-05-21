import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <i className="bi bi-list-task me-2"></i> Task Manager
          </NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link d-flex align-items-center" to="/">
                  <i className="bi bi-card-checklist me-1"></i> Lista Task
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link d-flex align-items-center" to="/add">
                  <i className="bi bi-plus-circle me-1"></i> Aggiungi Task
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}