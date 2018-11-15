/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './home.scss';

/**
 * Code
 */
const Specialities = () => (
  <section id="home-specialities" className="d-flex flex-column justify-content-center align-items-center full-height bg-home-darker">
    <h2 id="home-specialities-title" className="text-uppercase">Les spécialités</h2>
    <h3 id="home-specialities-subtitle" className="text-uppercase">Consultez les profils de nos étudiants selon leur spécialité</h3>
    <div id="home-specialities-list" className="d-flex justify-content-around col-1 col-lg-6">
      <div className="d-flex flex-column">
        <img src="src/images/OClockCommunity-LogoWordPress.svg" alt="" />
        <h4>WordPress</h4>
        <button type="button" className="btn btn-lg bg-custom-button text-uppercase mt-2">Consulter</button>
      </div>
      <div className="d-flex flex-column">
        <img src="src/images/OClockCommunity-LogoReact.svg" alt="" />
        <h4>React</h4>
        <button type="button" className="btn btn-lg bg-custom-button text-uppercase mt-2">Consulter</button>
      </div>
      <div className="d-flex flex-column">
        <img src="src/images/OClockCommunity-LogoSymfony.svg" alt="" />
        <h4>Symfony</h4>
        <button type="button" className="btn btn-lg bg-custom-button text-uppercase mt-2">Consulter</button>
      </div>
    </div>
  </section>
);

/**
 * Export
 */
export default Specialities;
