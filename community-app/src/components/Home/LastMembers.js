/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
// Components
import SingleMember from '../SingleMember';

// Styles
import './home.scss';

/**
 * Code
 */
const LastMembers = () => (
  <section id="home-members" className="d-flex flex-column justify-content-center align-items-center bg-home-darker">
    <h2 id="home-members-title" className="text-uppercase">Nos derniers poulains</h2>
    <h3 id="home-members-subtitle" className="text-uppercase">Prêts à en découdre !</h3>
    <div id="home-members-list" className="row justify-content-center">
      <div className="col-2"></div>
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <div className="col-2"></div>
      <div className="col-2"></div>
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <div className="col-2"></div>
    </div>
    <NavLink activeClassName="" className="btn btn-outline-white m-5 btn-border-radius text-uppercase" exact to="/members">Voir tous les étudiants</NavLink>
  </section>
);

/**
 * Export
 */
export default LastMembers;