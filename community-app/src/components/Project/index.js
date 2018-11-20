/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import ArrowDown from '../ArrowDown';
import ProjectPresentation from './ProjectPresentation';
import ProjectGallery from './ProjectGallery';
import ProjectDescript from './ProjectDescript';
import ProjectLink from './ProjectLink';

// Styles
import './project.scss';

/**
 * Code
 */
class Project extends React.Component {
  componentDidMount() {
    const { getProject, id } = this.props;
    getProject(id);
  }

  render() {
    const { project } = this.props;
    return (
      <div id="project">
        <section id="project-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-project">
          <h1>Productize</h1>
          <div id="project-project-pc">
            <div id="project-project-pc-screen">
              <img src="/src/images/project1.png" alt="" />
            </div>
          </div>
          <ArrowDown />
        </section>
        <ProjectPresentation />
        <ProjectDescript />
        <ProjectGallery />
        <ProjectLink />
      </div>
    );
  }
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  project: PropTypes.array.isRequired,
  getProject: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Project;
