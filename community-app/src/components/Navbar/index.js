/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ClassNames from 'classnames';
import AuthService from 'src/components/AuthService';
import decode from 'jwt-decode';
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

  componentDidMount() {
    const { getConnectedMember } = this.props;
    if (this.Auth.getToken()) {
      getConnectedMember(this.Auth.getProfile().userId);
    }
  }

  // Fonction qui permet de récupérer un élément imbriqué dans un objet à plusieurs niveaux
  getNestedObject = (nestedObj, pathArr) => (
    pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
  );

  // Fonction qui permet de déconnecter le membre et de passer le isConnected à false
  disconnect() {
    this.Auth = new AuthService();
    this.Auth.logout();
    const { disconnectMember } = this.props;
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
    // Les classes sont modifiées en fonction de la page courante
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

    // On récupère les valeurs du state et des props dont on a besoin
    const { isOpen } = this.state;
    const { connectMember, disconnectMember } = this.props;
    const firstnameConnectedMember = localStorage.getItem('connectedMemberFirstName');
    const slugMemberConnectedMember = localStorage.getItem('connectedMemberSlugMember');
    const slugProjectConnectedMember = localStorage.getItem('connectedMemberSlugProject');

    // Si un token valide existe isConnected à true dans le state
    this.Auth = new AuthService();
    const token = this.Auth.getToken();
    if (token && !this.Auth.isTokenExpired(token)) {
      connectMember();
    }
    // Si le token n'est plus valide, on déconnecte l'utilisateur et on le redirige vers la page de connexion
    else if (this.Auth.isTokenExpired(token)) {
      disconnectMember();
      this.Auth.logout();
      window.location.replace('/login');
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
              {/* Si le membre est connecté un menu dropdown s'affiche */}
              { (isConnected)
              && (
              <Collapse isOpen={isOpen} navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="nav-item nav-link text-white">
                    {`Bonjour ${firstnameConnectedMember}`}
                  </DropdownToggle>
                  <DropdownMenu right className={classNavBarColor}>
                    <NavLink to={`/members/${slugMemberConnectedMember}`} exact className="nav-item nav-link text-center text-white">
                      Mon profil
                    </NavLink>
                    <NavLink to={`/members/${slugMemberConnectedMember}/edit`} exact className="nav-item nav-link text-center text-white">
                      Modifier mon profil
                    </NavLink>
                    {/* Si le membre n'a pas encore de projet, les liens pour y accéder ne s'affichent pas */}
                    { (slugProjectConnectedMember !== null)
                    && (
                      <div>
                        <NavLink to={`/projects/${slugProjectConnectedMember}`} exact className="nav-item nav-link text-center text-white">
                          Mon projet
                        </NavLink>
                        <NavLink to={`/projects/${slugProjectConnectedMember}/edit`} exact className="nav-item nav-link text-center text-white">
                          Modifier mon projet
                        </NavLink>
                      </div>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Collapse>
              )}
              {/* Si le membre est connecté "Me déconnecter" s'affiche, sinon "Me connecter" s'affiche */}
              {
                (isConnected)
                  ? <ReactStrapLink className="btn btn-outline-white mx-3 btn-border-radius" onClick={() => this.disconnect()}>Me déconnecter</ReactStrapLink>
                  : <NavLink activeClassName="" className="btn btn-outline-white mx-3 btn-border-radius" exact to="/login">Me connecter</NavLink>
              }
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
  getConnectedMember: PropTypes.func.isRequired,
};

export default ReactStrapNavbar;
