/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components

// Styles
import './singlemember.scss';

/**
 * Code
 */
const SingleMember = ({
  firstname,
  lastname,
  promotion,
  specialisation,
  profilePicture,
  slug
}) => (
  <div id="singlemember" className="singlemember col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
    <NavLink activeClassName="" className="no-blue-on-link" exact to={"".concat('/members/', slug)}>
      <img src={profilePicture} className="singlemember-photo" alt="" />
      <p className="singlemember-name">{firstname}</p>
      <p className="singlemember-name name-to-disapear">{lastname}</p>
      <p className="singlemember-prom">#{promotion} #{specialisation}</p>
    </NavLink>
  </div>


);

SingleMember.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  promotion: PropTypes.string.isRequired,
  specialisation: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default SingleMember;
