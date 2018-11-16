/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './selectinput.scss';

/**
 * Code
 */
const SelectInput = () => (
  <div id="selectinput" className="col">
    <select id="selectinput-select" className="w-100 text-white" value="" onChange="">
      <option value="" disabled selected>Catégorie</option>
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
export default SelectInput;
