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
class SelectInput extends React.Component {
  render() {
    const { list, type } = this.props;
    console.log('list ', type,' received by SelectInput',list)
    return (
      <div id="selectinput" className="col">
        <select id="selectinput-select" className="w-100 text-white">
          <option defaultValue="" disabled selected>{type}</option>
          {list.map(item => <option key={item['@id']} defaultValue={item['@id']}>{item.name}</option>)}
        </select>
      </div>
    );
  }
}

/**
 * Export
 */
export default SelectInput;
