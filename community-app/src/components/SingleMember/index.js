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
import { API_URL } from '../../configuration';

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
  contentUrl,
  slug,
}) => {
  const link = (window.location.href.includes('/members/')) ? '#' : `/members/${slug}`;
  return (
    <div id="singlemember" className="singlemember col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
      <NavLink activeClassName="" className="no-blue-on-link" exact to={link}>
        <img src={`${API_URL}/img/profils/${contentUrl}`} className="singlemember-photo" alt="" />
        <p className="singlemember-name">{firstname}</p>
        <p className="singlemember-name name-to-disapear">{lastname}</p>
        <p className="singlemember-prom">#{promotion} {specialisation !== '' ? `#${specialisation}` : ''}</p>
      </NavLink>
    </div>
  )
};

SingleMember.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  promotion: PropTypes.string,
  specialisation: PropTypes.string,
  contentUrl: PropTypes.string,
  slug: PropTypes.string,
};

SingleMember.defaultProps = {
  firstname: '',
  lastname: '',
  promotion: '',
  specialisation: '',
  contentUrl: '',
  slug: '',
};

/**
 * Export
 */
export default SingleMember;
