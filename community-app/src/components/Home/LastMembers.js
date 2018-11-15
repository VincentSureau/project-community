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
const LastMembers = () => (
  <section id="home-members" className="d-flex flex-column justify-content-center align-items-center full-height bg-home-darker">
    <h2 id="home-members-title" className="text-uppercase">Nos derniers poulains</h2>
    <h3 id="home-members-subtitle" className="text-uppercase">Prêts à en découdre !</h3>
    <div id="home-members-list">

    </div>
    <button type="button" className="btn btn-lg bg-custom-button text-uppercase">Voir tous les étudiants</button>
  </section>
);

/**
 * Export
 */
export default LastMembers;
