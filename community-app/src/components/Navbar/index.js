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
const Navbar = () => {
  const classcolor = ClassNames(
    { 'home-navfoot': window.location.pathname === '/' },
    { 'members-navfoot': window.location.pathname === '/members' },
    { 'projects-navfoot': window.location.pathname === '/projects' },
    { 'login-navfoot': window.location.pathname === '/login' },
    { 'member-navfoot': window.location.pathname.includes('/members/') },
    { 'project-navfoot': window.location.pathname.includes('/projects/') },
  );

  const classNavBar = (classcolor !== '')
    ? `navbar fixed-top navbar-expand navbar-dark row bg-${classcolor}`
    : 'navbar fixed-top navbar-expand navbar-dark row bg-notfound-navfoot';

  return (
    <div id="navbar">
      <nav className={classNavBar}>
        <div className="col-4">
          <ul className="navbar-nav">
            <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/">Accueil</NavLink>
            <a className="nav-item nav-link text-white" href="http://oclock.io">O'Clock</a>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <NavLink activeClassName="" className="w-25 h-25" exact to="/"><img src="/src/images/logo_oclock_community_navbar.svg" alt="Logo Community" /></NavLink>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <ul className="navbar-nav">
            <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/projects">Projets</NavLink>
            <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/members">Etudiants</NavLink>
            <NavLink activeClassName="" className="btn btn-outline-white mx-3 btn-border-radius" exact to="/login">Me connecter</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

/**
 * Export
 */
export default Navbar;
