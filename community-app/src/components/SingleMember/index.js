/**
 * NPM import
 */
import React from 'react';

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
  <div id="singlemember" className="singlemember d-flex flex-column align-items-center justify-content-center text-center col-2">
    <img src="src/components/SingleMember/pict.jpg" className="singlemember-photo rounded-circle" alt="" />
    <p className="singlemember-name">Marc</p>
    <p className="singlemember-name">Dubois</p>
    <p className="singlemember-prom">#Krypton #React</p>
  </div>

);

/**
 * Export
 */
export default SingleMember;
