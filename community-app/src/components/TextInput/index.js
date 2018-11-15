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
    <input id="textinput-input" placeholder="Prénom Nom" type="text" className="text-white w-100" />
  </div>
);

/**
 * Export
 */
export default TextInput;
