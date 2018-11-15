/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './login.scss';

/**
 * Code
 */
const Form = () => (
  <form className="login-article-form d-flex flex-column align-self-center">
    <input type="email" className="form-control login-article-form-textinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adress email" />
    <input type="email" className="form-control login-article-form-textinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mot de passe" />
    <button type="submit" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase align-self-center mt-4">Connexion</button>

  </form>
);

/**
 * Export
 *     <NavLink activeClassName="" className="btn btn-outline-white mx-3 btn-border-radius" exact to="/login">Me connecter</NavLink>
 */
export default Form;
