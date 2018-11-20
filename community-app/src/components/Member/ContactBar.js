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
      <a href={`mailto:${email}`}><FaRegEnvelope className="text-white" /></a>
      <a href={`tel:${phoneNumber}`}><FaPhone className="text-white" /></a>
      <a href={linkGithub}><FaGithub className="text-white" /></a>
      <a href={linkLinkedin}><FaLinkedinIn className="text-white" /></a>
      <a href={linkPersonal}><FaDesktop className="text-white" /></a>
    </div>
    <div className="col-4">
      <ArrowDown />
    </div>
    <div className="d-flex justify-content-start col-4 align-items-end pb-4">
      <FaMapMarkerAlt className="text-white" />
      <span id="member-info-contactbar-localisation" className="text-white">{`${city}, ${zipcode}`}</span>
    </div>
  </div>

);

ContactBar.propTypes = {
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  linkLinkedin: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  linkPersonal: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ContactBar;
