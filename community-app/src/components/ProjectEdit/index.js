/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './projectEdit.scss';

/**
 * Code
 */
const ProjectEdit = () => (
  <div id="projectEdit">
    <form>
      <section id="projectedit-form" className="d-flex flex-column justify-content-center align-items-center bg-project">
        <h1>Productize</h1>
        <div id="project-project-pc">
          <div id="project-project-pc-screen">
            <img src="/src/images/project1.png" alt="" />
          </div>
        </div>
        <input className="mx-2" type="file" name="profile_pic" accept=".jpg, .jpeg, .png" />
        <div id="projectedit-form-info" className="row justify-content-center">
          <p className="label col-5">Lien site: </p>
          <input className="col-5 input-text" type="text" name="web" placeholder="http://productize.com" />
          <p className="label col-5">Lien vidéo YouTube: </p>
          <input className="col-5 input-text" type="text" name="youtube" placeholder="http://www.youtube.com" />
          <textarea className="col-12 input-textarea" type="textarea" name="bio" row="" placeholder="Décrivez ici votre projet" />
          <p className="label col-5">Technologies utilisées: </p>
          <div className="col-5 multiselection">
            <div className="form-check">
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
              <div className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                HTML
              </div>
            </div>
          </div>
          <button className="col-6 button-submit" type="button">Enregistrer</button>
        </div>
      </section>
    </form>
  </div>

);

/**
 * Export
 */
export default ProjectEdit;
