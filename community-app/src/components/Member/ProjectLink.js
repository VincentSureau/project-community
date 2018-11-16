/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Components

// Styles
import './member.scss';

/**
 * Code
 */
const ProjectLink = () => (
  <section id="member-projectlink" className="bg-member d-flex align-items-center flex-column">
    <h2 className="text-uppercase">Mon Projet <br />de fin d'étude</h2>
    <h3 className="text-uppercase">Productimize</h3>
    <NavLink exact to="/projects/title-1234567890" className="d-flex flex-column align-items-center">
      <img src="https://picsum.photos/500/300?image=861" alt="" />
      <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-7">C'est par ici</button>
    </NavLink>
  </section>

);

/**
 * Export
 */
export default ProjectLink;
