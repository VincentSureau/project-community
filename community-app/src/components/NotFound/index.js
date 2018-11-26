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
import './notfound.scss';

/**
 * Code
 */
const NotFound = () => (
  <section className="notfound bg-notfound d-flex flex-column justify-content-center align-items-center">
    <h1 className="notfound-title">Page 404</h1>
    <div className="d-flex">
      <article className="notfound-article d-flex flex-column align-items-center">
        <h2 className="notfound-article-title text-notfound-navfoot">Cette page n'existe pas</h2>
        <NavLink to="/" className="btn btn-outline-white m-3 btn-border-radius text-uppercase">
          Retour accueil
        </NavLink>
      </article>
    </div>
  </section>

);

/**
 * Export
 */
export default NotFound;
