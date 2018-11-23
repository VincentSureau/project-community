/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import ClassNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as ReactStrapLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class ReactStrapNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state,
    });
  }

  render() {
    const classcolor = ClassNames(
      { 'home-navfoot': window.location.pathname === '/' },
      { 'members-navfoot': window.location.pathname === '/members' },
      { 'projects-navfoot': window.location.pathname === '/projects' },
      { 'login-navfoot': window.location.pathname === '/login' },
      { 'member-navfoot': window.location.pathname.includes('/members/') },
      { 'project-navfoot': window.location.pathname.includes('/projects/') },
    );

    const classcolortext = ClassNames(
      { 'text-home-lighter': window.location.pathname === '/' },
      { 'text-members-lighter': window.location.pathname === '/members' },
      { 'text-projects-lighter': window.location.pathname === '/projects' },
      { 'text-login-lighter': window.location.pathname === '/login' },
      { 'text-member-lighter': window.location.pathname.includes('/members/') },
      { 'text-project-lighter': window.location.pathname.includes('/projects/') },
    );

    const classNavBar = (classcolor !== '')
      ? `navbar fixed-top navbar-expand navbar-dark row bg-${classcolor}`
      : 'navbar fixed-top navbar-expand navbar-dark row bg-notfound-navfoot';

    const classFooterText = (classcolortext !== '')
      ? `${classcolortext}`
      : 'text-notfound-lighter';
    
    const { isOpen } = this.state;
    return (
      <div id="navbar">
        <Navbar className={classNavBar} expand="md">
          <div className="col-4">
            <Nav className="navbar-nav" navbar>
              <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/">Accueil</NavLink>
              <ReactStrapLink className="nav-item nav-link text-white" href="http://oclock.io">O'Clock</ReactStrapLink>
            </Nav>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <NavLink activeClassName="" className="w-25 h-25" exact to="/"><img src="/src/images/logo_oclock_community_navbar.svg" alt="Logo Community" /></NavLink>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <Nav className="navbar-nav">
              <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/projects">Projets</NavLink>
              <NavLink activeClassName="" className="nav-item nav-link text-white" exact to="/members">Etudiants</NavLink>
              <NavLink activeClassName="" className="btn btn-outline-white mx-3 btn-border-radius" exact to="/login">Me connecter</NavLink>
              <Collapse isOpen={isOpen} navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="nav-item nav-link text-white">
                    Bonjour Charles
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavLink to="/" exact className={`nav-item nav-link text-center ${classFooterText}`}>
                      Mon profil
                    </NavLink>
                    <NavLink to="/" exact className={`nav-item nav-link text-center ${classFooterText}`}>
                      Modifier mon profil
                    </NavLink>
                    <NavLink to="/" exact className={`nav-item nav-link text-center ${classFooterText}`}>
                      Mon projet
                    </NavLink>
                    <NavLink to="/" exact className={`nav-item nav-link text-center ${classFooterText}`}>
                      Modifier mon projet
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Collapse>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default ReactStrapNavbar;
