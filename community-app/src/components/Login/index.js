/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Form from './Form';

// Styles
import './login.scss';

/**
 * Code
 */
const Login = () => (
  <section className="login bg-login d-flex flex-column justify-content-center align-items-center">
    <h1 className="login-title">Welcome home</h1>
    <div className="d-flex">
      <article className="login-article w-50 d-flex flex-column align-items-center">
        <h2 className="login-article-title text-login-navfoot">Je suis inscrit</h2>
        <Form />
      </article>
      <article className="login-article w-50 d-flex flex-column align-items-center">
        <h2 className="login-article-title text-login-navfoot">Je ne suis pas inscrit</h2>
        <p className="login-article-text">Cet espoace est réservé aux étudiants O'Clock uniquement ... Oui, je sais c'est injuste ! <br /> Si tu en fais partie et que tu n'as pas eu tes identifiants, alors n'hésite pas à contacter le référent de ta promo.</p>
      </article>
    </div>
  </section>

);

/**
 * Export
 */
export default Login;
