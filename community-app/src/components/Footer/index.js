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
import FooterImg from 'src/images/logo_oclock_community.svg';
/**
 * Code
 */
class Footer extends React.Component {
  componentDidMount() {

  }

  render() {
    // la variable classcolor varie en fonction de l'url de la page active
    const classcolor = ClassNames(
      { 'bg-home-navfoot': window.location.pathname === '/' },
      { 'bg-members-navfoot': window.location.pathname === '/members' },
      { 'bg-projects-navfoot': window.location.pathname === '/projects' },
      { 'bg-login-navfoot': window.location.pathname === '/login' },
      { 'bg-member-navfoot': window.location.pathname.includes('/members/') },
      { 'bg-project-navfoot': window.location.pathname.includes('/projects/') },
    );

    // la variable classcolortext varie en fonction de l'url de la page active
    const classcolortext = ClassNames(
      { 'text-home-lighter': window.location.pathname === '/' },
      { 'text-members-lighter': window.location.pathname === '/members' },
      { 'text-projects-lighter': window.location.pathname === '/projects' },
      { 'text-login-lighter': window.location.pathname === '/login' },
      { 'text-member-lighter': window.location.pathname.includes('/members/') },
      { 'text-project-lighter': window.location.pathname.includes('/projects/') },
    );

    // En cas d'erreur dans l'url, utiliser le style bg-notfound-navfoot
    const classFooter = (classcolor !== '')
      ? `${classcolor}`
      : 'bg-notfound-navfoot';

    // En cas d'erreur dans l'url, utiliser le style text-notfound-lighter
    const classFooterText = (classcolortext !== '')
      ? `${classcolortext}`
      : 'text-notfound-lighter';

    return (
      <footer id="footer" className={classFooter}>
        <img id="footer-img" className="img-fluid w-10" src={FooterImg} alt="" />
        <p id="footer-copyright" className={classFooterText}>2018 &copy; <a className={classFooterText} href="https://www.linkedin.com/in/elodiechiarani/">Elodie Chiarani</a> / <a className={classFooterText} href="https://www.linkedin.com/in/thibault-garnier/">Thibault Garnier</a> / <a className={classFooterText} href="https://www.linkedin.com/in/tristantouchain/">Tristan Touchain</a> / <a className={classFooterText} href="https://www.linkedin.com/in/vincentsureau/">Vincent Sureau</a></p>
      </footer>
    );
  }
}

/**
 * Export
 */
export default Footer;
