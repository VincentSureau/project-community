/**
 * NPM import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import serialize from '../../functions/Serialize';


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
    // L'id est le slug de la barre d'adresse.
    getProjectWithId(id);
    getCompetences();
  }

  onChangeInput(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.value);
  }

  onChangeCheckbox(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.checked);
  }

  // Fonction qui permet de récupérer un élément imbriqué dans un objet à plusieurs niveaux
  getNestedObject = (nestedObj, pathArr) => (
    pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
  );

  // formToJSON = elements => [].reduce.call(elements, (data, element) => {
  //   if (element.name === 'profile_pic') {
  //     if (element.value !== '') {
  //       data[element.name] = element.value;
  //     }
  //     else {
  //       data[''] = '';
  //     }
  //   }
  //   if (element.name.search('/competences/') >= 0) {
  //     data[element.name] = element.checked;
  //   }
  //   else {
  //     data[element.name] = element.value;
  //   }
  //   return data;
  // }, {})

  handleSubmit(event) {
    event.preventDefault();
    // Serialize permet de formater l'envoi des données
    const data = serialize(event.target, { hash: true, empty: true, disabled: false });
    const { postChangeProject } = this.props;
    postChangeProject(data, event.target.id.value);
  }

  render() {
    const {
      project,
      competences,
      value,
      editFormSend,
      submitError,
    } = this.props;
    const competencesProject = this.getNestedObject(project, ['competences']);

    if (project != null && project.images != null) {
      const heroImage = project.images.filter(projectImage => projectImage.isHero === true);
      const images = project.images.filter(projectImage => projectImage.isHero !== true);

      return (
        <div id="projectEdit">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input hidden disabled name="id" defaultValue={project.id} />
            <section id="projectedit-form" className="d-flex flex-column justify-content-center align-items-center bg-project">

              <h1>{project.name}</h1>
              <div id="project-project-pc">
                <div id="project-project-pc-screen">
                  <img src={heroImage[0].imageLink} alt="" />
                </div>
              </div>
              <label className="label col-6 text-center" htmlFor={heroImage[0]['@id']}>
                Image principale du projet, insérer un lien :
                <input
                  className="mx-2 input-text ishero w-80 text-project-lighter"
                  type="text"
                  id={heroImage[0]['@id']}
                  name="images"
                  defaultValue={heroImage[0].imageLink}
                />
              </label>
              <div id="projectedit-form-gallery" className="row">
                {images.map(image => (
                  <div id="projectedit-form-gallery-imagechange" className="col-4" key={uuid()}>
                    <img src={image.imageLink} alt="" />
                    <label className="label col-12 images-label" htmlFor={image['@id']}>
                      Insérer un lien :
                      <input
                        className="input-text"
                        type="text"
                        id={image['@id']}
                        name="images"
                        defaultValue={image.imageLink}
                      />
                    </label>
                  </div>
                ))}
              </div>
              <div id="projectedit-form-info" className="row justify-content-center">
                <label className="label col-12" htmlFor="projectlink-input">
                  Lien site:
                  <input id="projectlink-input" className="col-12 input-text" type="text" name="linkProject" placeholder="https://www.monprojet.com" defaultValue={value.linkProject} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="projectvideo-input">
                  Lien vidéo YouTube:
                  <input id="projectvideo-input" className="col-12 input-text" type="text" name="linkVideo" placeholder="https://www.youtube.com/monprojet" defaultValue={value.linkVideo} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="projectDescription-input">
                  Description
                  <textarea id="projectDescription-input" className="col-12 input-textarea" type="textarea" name="description" row="" placeholder="Décrivez votre projet" defaultValue={value.description} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="projectDescription-input">
                  Technologies utilisées:
                  <div id="projectDescription-input" className="col-12 multiselection">
                    <div className="form-check">
                      {competences.map(competence => (
                        <div className="form-check-label" key={competence['@id']}>
                          <input
                            name="competences[]"
                            type="checkbox"
                            onChange={e => this.onChangeCheckbox(e)}
                            className="form-check-input"
                            defaultChecked={(competencesProject.map(competenceProject => (competenceProject['@id'] === this.getNestedObject(competence, ['@id']))).filter(response => response === true)[0])}
                            defaultValue={this.getNestedObject(competence, ['@id'])}
                          />
                          {competence.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </label>
                <label className="label col-12 mt-4 mb-4" htmlFor="isProjectActive-input">
                  Affichage du profil
                  <div className="text-white font-weight-normal">
                    <input id="isProjectActive-input" name="isActive" type="checkbox" defaultChecked={project.isActive} onChange={e => this.onChangeCheckbox(e)} defaultValue={project.isActive} />
                    Afficher le projet
                  </div>
                </label>
                {submitError !== undefined && submitError !== ''
                  && <p className="alert alert-danger">{submitError}</p>
                }
                <button className="col-6 button-submit" type="submit">Enregistrer</button>
              </div>
            </section>
          </form>
          {editFormSend && <Redirect to={''.concat('/projects/', project.slug)} />}
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
  onChangeInput: PropTypes.func.isRequired,
  postChangeProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  competences: PropTypes.array,
  getCompetences: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  submitError: PropTypes.string,
  editFormSend: PropTypes.bool.isRequired,
};

ProjectEdit.defaultProps = {
  competences: [],
  submitError: undefined,
};

/**
 * Export
 */
export default ProjectEdit;
