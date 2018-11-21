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
    const { getProjectWithId, id } = this.props;
    getProjectWithId(id);
  }

  // getNestedObject = (nestedObj, pathArr) => {
  //   return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  // };

  render() {
    const { project } = this.props;
    if (project != null && project.images != null) {
      const { images } = project;
      // const images = this.getNestedObject(project, ['images']);
      // const heroImage = images.filter(projectImage => projectImage.isHero === true);
      console.log(project.appUsers);
      return (
        <div id="project">
          <section id="project-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-project">
            <h1>{project.name}</h1>
            <div id="project-project-pc">
              <div id="project-project-pc-screen">
                <img src="/src/images/project1.png" alt="" />
              </div>
            </div>
            <ArrowDown />
          </section>
          <ProjectPresentation
            members={project.appUsers}
            promotion={project.promotion.name}
            competences={project.competences}
          />
          <ProjectDescript />
          <ProjectGallery />
          <ProjectLink />
        </div>
      );
    }
    return (
      <p>loading</p>
    );
  }
}

Project.propTypes = {
  id: PropTypes.string.isRequired,
  project: PropTypes.array.isRequired,
  getProjectWithId: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Project;
