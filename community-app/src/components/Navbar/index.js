/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import ClassNames from 'classnames';
/**
 * Local import
 */
// Components

// Styles
import './navbar.scss';

/**
 * Code
 */
class Navbar extends React.Component {

  render() {
    const classcolor = ClassNames(
      { 'home-navbar': window.location.pathname === '/' },
      { 'members-navbar': window.location.pathname === '/members' },
      { 'projects-navbar': window.location.pathname === '/projects' },
      { 'login-navbar': window.location.pathname === '/login' },
      { 'member-navbar': window.location.pathname.includes('/members/') },
      { 'project-navbar': window.location.pathname.includes('/projects/') },
    );
    const classNavBar = ''.concat('navbar sticky-top navbar-expand navbar-dark bg-', classcolor, ' d-flex justify-content-between');
    return (
      <div id="navbar">
        <nav className={classNavBar}>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink activeClassName="" className="nav-link " exact to="/">Accueil</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="http://oclock.io">O'Clock</a>
              </li>
            </ul>
          </div>
          <div>
            <a className="navbar-brand" href="#">Community</a>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="" className="nav-link " exact to="/projects">Projets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="" className="nav-link " exact to="/members">Etudiants</NavLink>
              </li>
              <NavLink activeClassName="" className="btn btn-outline-white " exact to="/login">Me connecter</NavLink>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

/**
 * Export
 */
export default Navbar;
