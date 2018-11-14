/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Components

// Styles
import './navbar.scss';

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink activeClassName="" className="nav-link" exact to="/">Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="" className="nav-link" exact to="/projects">Projets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="" className="nav-link" exact to="/members">Etudiants</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://oclock.io">O'Clock</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

);

/**
 * Export
 */
export default Navbar;
