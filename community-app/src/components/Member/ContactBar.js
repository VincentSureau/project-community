/**
 * NPM import
 */
import React from 'react';
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
const ContactBar = () => (
  <div id="member-info-contactbar" className="row mx-auto">
    <div className="col-4 d-flex justify-content-end align-items-end pb-4">
      <a href=""><FaRegEnvelope className="text-white" /></a>
      <a href=""><FaPhone className="text-white" /></a>
      <a href=""><FaGithub className="text-white" /></a>
      <a href=""><FaLinkedinIn className="text-white" /></a>
      <a href=""><FaDesktop className="text-white" /></a>
    </div>
    <div className="col-4">
      <ArrowDown />
    </div>
    <div className="d-flex justify-content-start col-4 align-items-end pb-4">
      <FaMapMarkerAlt className="text-white" />
      <span id="member-info-contactbar-localisation" className="text-white">Nantes, France</span>
    </div>
  </div>

);

/**
 * Export
 */
export default ContactBar;
