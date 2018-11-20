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
import ProjectsCarousel from './ProjectsCarousel';

/**
 * Code
 */
class RandomProjects extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section id="home-projects" className="d-flex flex-column justify-content-center align-items-center full-height bg-home">
      <h2 id="home-projects-title">Leurs projets <br /> de fin d'étude</h2>
      <h3 id="home-projects-subtitle">En un mois, on obtient cela !</h3>
      <div id="home-projects-pc">
        <ProjectsCarousel projects={projects} />
      </div>
  
      <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-7">Voir tous les projets</button>
    </section>
    );
  }
}

/**
 * Export
 */
export default RandomProjects;
