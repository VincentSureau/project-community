/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './textinput.scss';

/**
 * Code
 */
const TextInput = () => (
  <div id="textinput" className="col">
    <select id="textinput-select" className="w-100 text-white" value="" onChange="">
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>
);

/**
 * Export
 */
export default TextInput;
