/**
 * NPM import
 */
import React from 'react';
import ClassNames from 'classnames';

/**
 * Local import
 */
// Components

// Styles
import './footer.scss';

/**
 * Code
 */

const classcolor = ClassNames(
  { 'bg-home-navfoot': window.location.pathname === '/' },
  { 'bg-members-navfoot': window.location.pathname === '/members' },
  { 'bg-projects-navfoot': window.location.pathname === '/projects' },
  { 'bg-login-navfoot': window.location.pathname === '/login' },
  { 'bg-member-navfoot': window.location.pathname.includes('/members/') },
  { 'bg-project-navfoot': window.location.pathname.includes('/projects/') },
);

const Footer = () => (
  <footer id="footer" className={classcolor}>
    <img id="footer-img" className="img-fluid w-10" src="src/images/logo_oclock_community.svg" alt="" />
    <p id="footer-copyright">2018 &copy; <a href="https://www.linkedin.com/in/elodiechiarani/">Elodie Chiarani</a> / <a href="https://www.linkedin.com/in/thibault-garnier/">Thibault Garnier</a> / <a href="https://www.linkedin.com/in/tristantouchain/">Tristan Touchain</a> / <a href="https://www.linkedin.com/in/vincentsureau/">Vincent Sureau</a></p>
  </footer>
);

/**
 * Export
 */
export default Footer;
