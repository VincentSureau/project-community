/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

/**
 * Local import
 */
// Components

// Styles
import './projectEdit.scss';

/**
 * Code
 */
class ProjectEdit extends React.Component {
  componentDidMount() {
    const { getProjectWithId, id, getCompetences } = this.props;
    getProjectWithId(id);
    getCompetences();
  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  render() {
    const { project, competences } = this.props;
    const competencesProject = this.getNestedObject(project, ['competences']);

    if (project != null && project.images != null) {
      const heroImage = project.images.filter(projectImage => projectImage.isHero === true);

      return (
        <div id="projectEdit">
          <form>
            <section id="projectedit-form" className="d-flex flex-column justify-content-center align-items-center bg-project">
      
              <div id="project-project-pc">
                <div id="project-project-pc-screen">
                  <img src={heroImage[0].imageLink} alt="" />
                </div>
              </div>
              <h1>{project.name}</h1>
              <input className="mx-2" type="file" name="project-heroimage" accept=".jpg, .jpeg, .png" />
              <div id="projectedit-form-gallery" className="row">
                {project.images.map((image, i) => (
                  <div id="projectedit-form-gallery-imagechange" className="col-4" key={uuid()}>
                    <img src={image.imageLink} alt="" />
                    <input className="" type="file" name={`project-image${i+1}`} accept=".jpg, .jpeg, .png" />
                  </div>
                ))}
              </div>
              <div id="projectedit-form-info" className="row justify-content-center">
                <p className="label col-5">Lien site: </p>
                <input className="col-5 input-text" type="text" name="web" placeholder={project.linkProject} />
                <p className="label col-5">Lien vidéo YouTube: </p>
                <input className="col-5 input-text" type="text" name="youtube" placeholder={project.linkVideo} />
                <textarea className="col-12 input-textarea" type="textarea" name="bio" row="" placeholder={project.description} />
                <p className="label col-5">Technologies utilisées: </p>
                <div className="col-5 multiselection">
                  <div className="form-check">
                    {competences.map(competence => (
                      <div className="form-check-label" key={competence['@id']}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          defaultChecked={(competencesProject.map(competenceProject => (competenceProject['@id'] === this.getNestedObject(competence, ['@id']))).filter(response => response === true)[0])}
                        />
                        {competence.name}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="col-6 button-submit" type="button">Enregistrer</button>
              </div>
            </section>
          </form>
        </div>
      );
    }
    return (
      <p>loading</p>
    );
  }
} 

ProjectEdit.propTypes = {
  id: PropTypes.string.isRequired,
  getProjectWithId: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  competences: PropTypes.array,
  getCompetences: PropTypes.func.isRequired,
};

ProjectEdit.defaultProps = {
  competences: [],
};

/**
 * Export
 */
export default ProjectEdit;
