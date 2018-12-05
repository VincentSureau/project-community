/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoOclockCommunity from 'src/images/logo_oclock_community.svg';
/**
 * Local import
 */
// Components
import Specialities from 'src/containers/Specialities';
import LastMembers from './LastMembers';
import ArrowDown from '../ArrowDown';
import RandomProjects from './RandomProjects';


// Styles
import './home.scss';


/**
 * Code
 */
class Home extends React.Component {
  componentDidMount() {
    const { getHomeData } = this.props;
    getHomeData();
  }

  render() {
    const { members, projects } = this.props;

    return (
      <div id="home">
        <section id="home-presentation" className="d-flex flex-column justify-content-center align-items-center bg-home full-height px-5">
          <img id="home-presentation-logo" className="" src={LogoOclockCommunity} alt="" />
          <p id="home-presentation-text">Retrouvez tous les <em className="font-weight-bold">étudiants</em> des différentes promotions <em className="font-weight-bold">O'clock</em>, consultez leur profil et admirez l'aboutissement de leurs 5 mois de dur labeur : leurs <em className="font-weight-bold">projets</em> de fin d'étude !</p>
          <NavLink
            className="btn btn-outline-white m-3 btn-border-radius text-uppercase"
            exact
            to="/login"
          >
            C'est parti !
          </NavLink>
          <ArrowDown />
        </section>
        <LastMembers members={members} />
        <RandomProjects projects={projects} />
        <Specialities />
      </div>
    );
  }
}

Home.propTypes = {
  members: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  getHomeData: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Home;
