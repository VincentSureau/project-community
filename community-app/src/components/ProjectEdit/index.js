/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import serialize from 'form-serialize';

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

  onChangeInput(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.value);
  }

  onChangeCheckbox(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.checked);
  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (element.name === 'profile_pic') {
      if (element.value !== '') {
        data[element.name] = element.value;
      }
      else {
        data[''] = '';
      }
    }
    if (element.name.search('/competences/') >= 0) {
      data[element.name] = element.checked;
    }
    else {
      data[element.name] = element.value;
    }
    return data;
  }, {})

  handleSubmit(event) {
    event.preventDefault();
    // const data = this.formToJSON(event.target);
    const data = serialize(event.target, { hash: true, empty: true, disabled: false });
    console.log(data);
    console.log(event.target.id.value);
    const { postChangeProject } = this.props;
    postChangeProject(data, event.target.id.value);
  }

  render() {
    const { project, competences, value } = this.props;
    const competencesProject = this.getNestedObject(project, ['competences']);

    if (project != null && project.images != null) {
      const heroImage = project.images.filter(projectImage => projectImage.isHero === true);

      return (
        <div id="projectEdit">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input hidden type="text" name="id" value={project.id} />
            <section id="projectedit-form" className="d-flex flex-column justify-content-center align-items-center bg-project">

              <h1>{project.name}</h1>
              <div id="project-project-pc">
                <div id="project-project-pc-screen">
                  <img src={heroImage[0].imageLink} alt="" />
                </div>
              </div>
              <input className="mx-2" type="file" name="project-heroimage" accept=".jpg, .jpeg, .png" />
              <div id="projectedit-form-gallery" className="row">
                {project.images.map((image, i) => (
                  <div id="projectedit-form-gallery-imagechange" className="col-4" key={uuid()}>
                    <img src={image.imageLink} alt="" />
                    <input className="" type="file" name={`project-image${i + 1}`} accept=".jpg, .jpeg, .png" />
                  </div>
                ))}
              </div>
              <div id="projectedit-form-info" className="row justify-content-center">
                <p className="label col-5">Lien site: </p>
                <input className="col-5 input-text" type="text" name="web" placeholder={project.linkProject} defaultValue={value.linkProject} onChange={e => this.onChangeInput(e)} />
                <p className="label col-5">Lien vidéo YouTube: </p>
                <input className="col-5 input-text" type="text" name="youtube" placeholder={project.linkVideo} defaultValue={value.linkVideo} onChange={e => this.onChangeInput(e)} />
                <textarea className="col-12 input-textarea" type="textarea" name="bio" row="" placeholder={project.description} defaultValue={value.description} onChange={e => this.onChangeInput(e)} />
                <p className="label col-5">Technologies utilisées: </p>
                <div className="col-5 multiselection">
                  <div className="form-check">
                    {competences.map(competence => (
                      <div className="form-check-label" key={competence['@id']}>
                        <input
                          name={this.getNestedObject(competence, ['@id'])}
                          type="checkbox"
                          onChange={e => this.onChangeCheckbox(e)}
                          className="form-check-input"
                          defaultChecked={(competencesProject.map(competenceProject => (competenceProject['@id'] === this.getNestedObject(competence, ['@id']))).filter(response => response === true)[0])}
                        />
                        {competence.name}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="col-6 button-submit" type="submit">Enregistrer</button>
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
  onChangeInput: PropTypes.func.isRequired,
  postChangeProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  competences: PropTypes.array,
  getCompetences: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

ProjectEdit.defaultProps = {
  competences: [],
};

/**
 * Export
 */
export default ProjectEdit;
