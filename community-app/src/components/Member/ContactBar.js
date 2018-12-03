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
import Tooltips from 'src/components/Tooltips';

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
  <div id="member-info-contactbar" className="row w-100 mx-0 justify-content-center">
    <div className="col-12 col-md-4 d-flex float-right order-1 justify-content-md-end justify-content-center align-items-md-end align-items-center pb-3">
      {/* On utilise les tooltips de ReactStrap pour afficher le numéro de téléphone et le mail */}
      <Tooltips email={email} phoneNumber={phoneNumber} />
      {/* On affiche les icones uniquement si les champs ont été renseignés par le membre */}
      {/* {email !== null && <a href={`mailto:${email}`}><FaRegEnvelope className="text-white" /></a>}
      {phoneNumber !== '' && <a href={`tel:${phoneNumber}`}><FaPhone className="text-white" /></a>} */}
      {linkGithub !== '' && <a href={linkGithub}><FaGithub className="text-white" /></a>}
      {linkLinkedin !== '' && <a href={linkLinkedin}><FaLinkedinIn className="text-white" /></a>}
      {linkPersonal !== '' && <a href={linkPersonal}><FaDesktop className="text-white" /></a>}
    </div>
    <div className="col-4 col-md-4 order-3 order-md-2 align-self-center">
      <ArrowDown />
    </div>
    <div className="d-flex justify-content-start col-12 col-md-4 order-2 order-md-3 justify-content-md-start justify-content-center align-items-end pb-3">
      {(city != null || zipcode != null) && (
      <div>
        <FaMapMarkerAlt className="text-white" />
        <span id="member-info-contactbar-localisation" className="text-white">{(city != null) && city}{(city != null && zipcode != null) && ', '}{(zipcode != null) && zipcode}</span>
      </div>
      )}
    </div>
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
