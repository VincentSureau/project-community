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
class Footer extends React.Component {
  render() {
    const classcolor = ClassNames(
      { 'bg-home-navfoot': window.location.pathname === '/' },
      { 'bg-members-navfoot': window.location.pathname === '/members' },
      { 'bg-projects-navfoot': window.location.pathname === '/projects' },
      { 'bg-login-navfoot': window.location.pathname === '/login' },
      { 'bg-member-navfoot': window.location.pathname.includes('/members/') },
      { 'bg-project-navfoot': window.location.pathname.includes('/projects/') },
    );

    const classcolortext = ClassNames(
      { 'text-home-lighter': window.location.pathname === '/' },
      { 'text-members-lighter': window.location.pathname === '/members' },
      { 'text-projects-lighter': window.location.pathname === '/projects' },
      { 'text-login-lighter': window.location.pathname === '/login' },
      { 'text-member-lighter': window.location.pathname.includes('/members/') },
      { 'text-project-lighter': window.location.pathname.includes('/projects/') },
    );

    return (
      <footer id="footer" className={classcolor}>
        <img id="footer-img" className="img-fluid w-10" src="/src/images/logo_oclock_community.svg" alt="" />
        <p id="footer-copyright" className={classcolortext} >2018 &copy; <a className={classcolortext} href="https://www.linkedin.com/in/elodiechiarani/">Elodie Chiarani</a> / <a className={classcolortext} href="https://www.linkedin.com/in/thibault-garnier/">Thibault Garnier</a> / <a className={classcolortext} href="https://www.linkedin.com/in/tristantouchain/">Tristan Touchain</a> / <a className={classcolortext} href="https://www.linkedin.com/in/vincentsureau/">Vincent Sureau</a></p>
      </footer>
    );
  }
}

/**
 * Export
 */
export default Footer;
