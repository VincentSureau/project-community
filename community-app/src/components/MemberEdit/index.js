/**
 * NPM import
 */
import React from 'react';
import { Formik, Field } from 'formik';

/**
 * Local import
 */
// Components

// Styles
import './memberedit.scss';

/**
 * Code
 */


const MemberEdit = () => (
  <div id="memberedit">
    <form>
      <section id="memberedit-form" className="d-flex flex-column justify-content-center align-items-center bg-member">
        <div className="row justify-content-center align-items-center">
          <img src="/src/components/SingleMember/pict.jpg" className="singlemember-photo" alt="" />
          <input className="mx-2" type="file" name="profile_pic" accept=".jpg, .jpeg, .png" />
        </div>
        <p className="singlemember-name">Marc</p>
        <p className="singlemember-name name-to-disapear">Dubois</p>
        <p className="singlemember-prom">#Krypton #React</p>
        <div id="memberedit-form-info" className="row justify-content-center">
          <p className="label col-5">Ville: </p>
          <input className="col-5 input-text" type="text" name="city" placeholder="Nantes" />
          <p className="label col-5">Pays: </p>
          <input className="col-5 input-text" type="text" name="country" placeholder="France" />
          <p className="label col-5">Adresse mail: </p>
          <input className="col-5 input-text" type="email" name="email" placeholder="marc.dubois@duboiscorp.fr" />
          <p className="label col-5">Téléphone: </p>
          <input className="col-5 input-text" type="text" name="phone" placeholder="+33123456789" />
          <p className="label col-5">Lien Github: </p>
          <input className="col-5 input-text" type="text" name="github" placeholder="https://github.com/marcdub" />
          <p className="label col-5">Lien Linked'In: </p>
          <input className="col-5 input-text" type="text" name="linkedin" placeholder="https://linkedin.com/in/marcdubois/" />
          <p className="label col-5">Lien PortFolio: </p>
          <input className="col-5 input-text" type="text" name="linkedin" placeholder="https://www.duboiscorp.fr" />
          <p className="label col-2">Bio: </p>
          <textarea className="col-8 input-textarea" type="textarea" name="bio" row="" placeholder="Décrivez votre parcourt, votre but et tout ce qui fait qu'un recruteur veuille de vous." />
          <p className="label col-5">Compétences: </p>
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
    <form className="d-flex flex-column justify-content-center align-items-center bg-member">
      <button className="col-2 button-deleteProfile" type="button">Supprimer mon profil</button>
    </form>

  </div>

);

/**
 * Export
 */
export default MemberEdit;
