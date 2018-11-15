/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import LastMembers from './LastMembers';

// Styles
import './home.scss';

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <section id="home-presentation" className="d-flex flex-column justify-content-center align-items-center bg-home h-100vh">
      <img id="home-presentation-logo" className="w-25" src="src/images/logo_oclock_community.svg" alt="" />
      <p id="home-presentation-text">Retrouvez tous les <em className="font-weight-bold">étudiants</em> des différentes promotions <em className="font-weight-bold">O'clock</em>, consultez leur profil et admirez l'aboutissement de leur 5 mois de dur labeur : leurs <em className="font-weight-bold">projets</em> de fin d'étude !</p>
      <button type="button" className="btn btn-lg bg-custom-button text-uppercase">C'est parti !</button>
    </section>
    <LastMembers />
  </div>

);

/**
 * Export
 */
export default Home;
