/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaDesktop,
  FaMapMarkerAlt,
} from 'react-icons/fa';

/**
 * Local import
 */
// Components
import ArrowDown from 'src/components/ArrowDown';

// Styles
import './member.scss';

/**
 * Code
 */
const ContactBar = ({
  city,
  zipcode,
  email,
  phoneNumber,
  linkLinkedin,
  linkGithub,
  linkPersonal,
}) => (
  <div id="member-info-contactbar" className="row mx-auto">
    <div className="col-4 d-flex justify-content-end align-items-end pb-4">
      {/* On affiche les icones uniquement si les champs ont été renseignés par le membre */}
      {email !== null && <a href={`mailto:${email}`}><FaRegEnvelope className="text-white" /></a>}
      {phoneNumber !== '' && <a href={`tel:${phoneNumber}`}><FaPhone className="text-white" /></a>}
      {linkGithub !== '' && <a href={linkGithub}><FaGithub className="text-white" /></a>}
      {linkLinkedin !== '' && <a href={linkLinkedin}><FaLinkedinIn className="text-white" /></a>}
      {linkPersonal !== '' && <a href={linkPersonal}><FaDesktop className="text-white" /></a>}
    </div>
    <div className="col-4">
      <ArrowDown />
    </div>
    {(city != null || zipcode != null) && (
    <div className="d-flex justify-content-start col-4 align-items-end pb-4">
      <FaMapMarkerAlt className="text-white" />
      <span id="member-info-contactbar-localisation" className="text-white">{(city != null) && city}{(city != null && zipcode != null) && ', '}{(zipcode != null) && zipcode}</span>
    </div>)}
  </div>
);

ContactBar.propTypes = {
  city: PropTypes.string,
  zipcode: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  linkLinkedin: PropTypes.string,
  linkGithub: PropTypes.string,
  linkPersonal: PropTypes.string,
};

ContactBar.defaultProps = {
  city: '',
  zipcode: null,
  email: '',
  phoneNumber: '',
  linkLinkedin: '',
  linkGithub: '',
  linkPersonal: '',
};

/**
 * Export
 */
export default ContactBar;
