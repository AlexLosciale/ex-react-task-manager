import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
                <h1>Lista task</h1>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/add">
                <h1>Aggiungi task</h1>
            </NavLink>
        </div>
      </nav>
    </header>
  );
}