/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Components
import LastMembers from './LastMembers';
import ArrowDown from '../ArrowDown';

// Styles
import './home.scss';


/**
 * Code
 */
const Home = () => (
  <div id="home">
    <section id="home-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh">
      <img id="home-presentation-logo" className="w-25" src="src/images/logo_oclock_community.svg" alt="" />
      <p id="home-presentation-text">Retrouvez tous les <em className="font-weight-bold">étudiants</em> des différentes promotions <em className="font-weight-bold">O'clock</em>, consultez leur profil et admirez l'aboutissement de leur 5 mois de dur labeur : leurs <em className="font-weight-bold">projets</em> de fin d'étude !</p>
      <NavLink activeClassName="" className="btn btn-outline-white m-3 btn-border-radius text-uppercase" exact to="/login">C'est parti !</NavLink>
      <ArrowDown />
    </section>
    <LastMembers />
  </div>

);

/**
 * Export
 */
export default Home;
