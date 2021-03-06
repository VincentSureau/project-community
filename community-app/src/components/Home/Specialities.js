/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoWordpress from 'src/images/OClockCommunity-LogoWordPress.svg';
import LogoReact from 'src/images/OClockCommunity-LogoReact.svg';
import LogoSymfony from 'src/images/OClockCommunity-LogoSymfony.svg';
/**
 * Local import
 */
// Components

// Styles
import './home.scss';

/**
 * Code
 */
const Specialities = ({ getMembersSpe }) => (
  <section id="home-specialities" className="d-flex flex-column justify-content-center align-items-center bg-home-darker text-center">
    <h2 id="home-specialities-title">Les spécialités</h2>
    <h3 id="home-specialities-subtitle">Consultez les profils de nos étudiants selon leur spécialité</h3>
    <div id="home-specialities-list" className="d-flex flex-wrap col-12 col-md-9 col-xl-6 ">
      <Link
        exact="true"
        to="/members"
        onClick={() => getMembersSpe('Wordpress')}
        className="d-flex align-items-center flex-column col-12 col-sm-4 mt-2 mt-md-0"
      >
        <img src={LogoWordpress} className="specialitie" alt="" />
        <h4 className="my-1 my-md-2">WordPress</h4>
        <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-2">Consulter</button>
      </Link>
      <Link
        exact="true"
        to="/members"
        onClick={() => getMembersSpe('React')}
        className="d-flex align-items-center flex-column col-12 col-sm-4 mt-2 mt-md-0"
      >
        <img src={LogoReact} className="specialitie" alt="" />
        <h4 className="my-1 my-md-2">React</h4>
        <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-1 mt-md-2">Consulter</button>
      </Link>
      <Link
        exact="true"
        to="/members"
        onClick={() => getMembersSpe('Symfony')}
        className="d-flex align-items-center flex-column col-12 col-sm-4 mt-2 mt-md-0"
      >
        <img src={LogoSymfony} className="specialitie" alt="" />
        <h4 className="my-1 my-md-2">Symfony</h4>
        <button type="button" className="btn btn-outline-white mx-3 btn-border-radius text-uppercase mt-2">Consulter</button>
      </Link>
    </div>
  </section>
);

Specialities.propTypes = {
  getMembersSpe: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Specialities;
