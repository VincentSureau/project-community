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
  onChange(e) {
    console.log(e.target.value);
    const { setFilterWithType } = this.props;
    setFilterWithType(e.target.name, e.target.value);
  }
  
  render() {
    const { list, type, handleChange, page } = this.props;
    let nameSelect = type === 'Spécialisation' ? 'filterSpe' : 'Filt';
    switch (type) {
      case 'Spécialisation':
        nameSelect = 'filterSpe';
        break;
      case 'Promotion':
        nameSelect = 'filterPromo';
        break;
      case 'Status Professionnel':
        nameSelect = 'filterStatus';
        break;
      default:
        break;
    }
    nameSelect = ''.concat(nameSelect, page);
    return (
      <div id="selectinput" className="col">
        <select id="selectinput-select" className="w-100 text-white" name={nameSelect} onChange={e => this.onChange(e)}>
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
