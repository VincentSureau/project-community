/**
 * NPM import
 */
import React from 'react';
import SingleMember from '../SingleMember';
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
    <div id="home-members-list" className="row justify-content-center">
      <div className="col-2"></div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
      <div className="col-2"></div>
      <div className="col-2"></div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
        <div className="col-2">
          <SingleMember />
        </div>
      <div className="col-2"></div>
    </div>
    <button type="button" className="btn btn-lg bg-custom-button text-uppercase">Voir tous les étudiants</button>
  </section>
);

/**
 * Export
 */
export default LastMembers;
