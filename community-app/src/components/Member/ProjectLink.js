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
    <h2>Mon Projet <br />de fin d'étude</h2>
    <h3>Productimize</h3>
    <NavLink exact to="/projects/title-1234567890" className="no-blue-on-link d-flex flex-column align-items-center">
      <div id="member-project-pc">
        <div id="member-project-pc-screen">
          <img src="https://picsum.photos/500/300?image=861" alt="" />
        </div>
      </div>
      <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-7">C'est par ici</button>
    </NavLink>
  </section>

);

/**
 * Export
 */
export default ProjectLink;
