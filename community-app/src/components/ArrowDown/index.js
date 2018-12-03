/**
 * NPM import
 */
import React from 'react';
import DoubleArrow from 'src/images/angle-double-down-solid.png';
/**
 * Local import
 */
// Components

// Styles
import './arrowdown.scss';

/**
 * Code
 */
const ArrowDown = () => (
  <div id="arrowdown">
    <div className="arrow bounce">
      <img className="" src={DoubleArrow} alt="arrow down" />
    </div>
  </div>

);

/**
 * Export
 */
export default ArrowDown;
