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
  <div id="singlemember" className="singlemember text-center">
    <img src="src/components/SingleMember/pict.jpg" className="singlemember-photo rounded-circle" alt="" />
    <p className="singlemember-name font-weight-bold">Marc</p>
    <p className="singlemember-name font-weight-bold">Dubois</p>
    <p className="singlemember-prom">#Krypton #React</p>
  </div>

);

/**
 * Export
 */
export default SingleMember;
