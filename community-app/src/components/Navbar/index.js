/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ClassNames from 'classnames';
import AuthService from 'src/components/AuthService';
import {
  Collapse,
  Navbar,
  Nav,
  NavLink as ReactStrapLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

class ReactStrapNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate() {

  }

  disconnect() {
    this.Auth = new AuthService();
    this.Auth.logout();
    const { disconnectMember, isConnected } = this.props;
    disconnectMember();
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isConnected, page } = this.props;
    const classcolor = ClassNames(
      { 'home-navfoot': page === '/' },
      { 'members-navfoot': page === '/members' },
      { 'projects-navfoot': page === '/projects' },
      { 'login-navfoot': page === '/login' },
      { 'member-navfoot': page.includes('/members/') },
      { 'project-navfoot': page.includes('/projects/') },
    );

    const classNavBar = (classcolor !== '')
      ? `navbar fixed-top navbar-expand navbar-dark row bg-${classcolor}`
      : 'navbar fixed-top navbar-expand navbar-dark row bg-notfound-navfoot';

    const classNavBarColor = (classcolor !== '')
      ? `bg-${classcolor}`
      : 'bg-notfound-navfoot';

    const { isOpen } = this.state;
    this.Auth = new AuthService();
    const { connectMember } = this.props;
    if (this.Auth.getToken()) {
      connectMember();
    }
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
              {
                (isConnected)
                  ? <ReactStrapLink className="btn btn-outline-white mx-3 btn-border-radius" onClick={() => this.disconnect()}>Me déconnecter</ReactStrapLink>
                  : <NavLink activeClassName="" className="btn btn-outline-white mx-3 btn-border-radius" exact to="/login">Me connecter</NavLink>
              }
              { (isConnected)
              && (
              <Collapse isOpen={isOpen} navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="nav-item nav-link text-white">
                    Bonjour Charles
                  </DropdownToggle>
                  <DropdownMenu right className={classNavBarColor}>
                    <NavLink to="/" exact className="nav-item nav-link text-center text-white">
                      Mon profil
                    </NavLink>
                    <NavLink to="/" exact className="nav-item nav-link text-center text-white">
                      Modifier mon profil
                    </NavLink>
                    <NavLink to="/" exact className="nav-item nav-link text-center text-white">
                      Mon projet
                    </NavLink>
                    <NavLink to="/" exact className="nav-item nav-link text-center text-white">
                      Modifier mon projet
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Collapse>
              )}
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

ReactStrapNavbar.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  connectMember: PropTypes.func.isRequired,
  disconnectMember: PropTypes.func.isRequired,
};

export default ReactStrapNavbar;
