/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
// Components

// Styles
import './singlemember.scss';

/**
 * Code
 */
const SingleMember = () => (
  <NavLink activeClassName="" className="col-2 no-blue-on-link" exact to="/members/marc-dubois-1234567890">
    <div id="singlemember" className="singlemember d-flex flex-column align-items-center justify-content-center text-center">
      <img src="src/components/SingleMember/pict.jpg" className="singlemember-photo rounded-circle" alt="" />
      <p className="singlemember-name">Marc</p>
      <p className="singlemember-name">Dubois</p>
      <p className="singlemember-prom">#Krypton #React</p>
    </div>
  </NavLink>

);

/**
 * Export
 */
export default SingleMember;
