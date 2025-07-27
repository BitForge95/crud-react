import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link className="navbar-brand" to="/read">Basic Crud App</Link>
          <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <div className={`navbar-collapse ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read" onClick={() => setMenuOpen(false)}>Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create" onClick={() => setMenuOpen(false)}>Add</Link>
            </li>
          </ul>
          <span className="navbar-text">A Basic CRUD App</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
