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
import ProjectDescription from './ProjectDescription';
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

  componentDidUpdate() {
    const { getProjectWithId, id, previousSlug } = this.props;
    if (id !== previousSlug) {
      getProjectWithId(id);
    }
  }

  render() {
    const { project } = this.props;
    if (project === undefined) {
      window.location.replace('/404');
    }

    if (project != null && project.images != null) {
      // Récupération de l'image principale du projet grâce à la fonction filtre
      const heroImage = project.images.filter(projectImage => projectImage.isHero === true);

      return (
        <div id="project">
          <section id="project-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-project">
            <h1>{project.name}</h1>
            <div id="project-project-pc">
              <div id="project-project-pc-screen">
                <img src={heroImage[0].imageLink} alt="" />
              </div>
            </div>
            <ArrowDown />
          </section>
          <ProjectPresentation
            members={project.appUsers}
            promotion={project.promotion.name}
            competences={project.competences}
          />
          <ProjectDescription description={project.description} />
          <ProjectGallery images={project.images} />
          {
            (project.linkVideo !== '' || project.linkProject !== '')
              ? <ProjectLink projectLink={project.linkProject} projectVideo={project.linkVideo} />
              : null
          }
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
  project: PropTypes.object.isRequired,
  getProjectWithId: PropTypes.func.isRequired,
  previousSlug: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Project;
