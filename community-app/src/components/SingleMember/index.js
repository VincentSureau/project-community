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
  <div id="singlemember" className="singlemember col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
    <NavLink activeClassName="" className="no-blue-on-link" exact to="/members/marc-dubois-1234567890">
      <img src="/src/components/SingleMember/pict.jpg" className="singlemember-photo" alt="" />
      <p className="singlemember-name">Marc</p>
      <p className="singlemember-name name-to-disapear">Dubois</p>
      <p className="singlemember-prom">#Krypton #React</p>
    </NavLink>
  </div>


);

/**
 * Export
 */
export default SingleMember;
