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
    const { 
      list,
      type,
      filterSpeMembers,
      filterPromoMembers,
      filterStatusMembers,
      filterSpeProjects,
      filterPromoProjects,
      page
    } = this.props;
    let selectEvery = '';
    let nameSelect = type === 'Spécialisation' ? 'filterSpe' : 'Filt';
    switch (type) {
      case 'Spécialisation':
        nameSelect = 'filterSpe';
        selectEvery = 'Toutes les spécialisations';
        break;
      case 'Promotion':
        selectEvery = 'Toutes les promotions';
        nameSelect = 'filterPromo';
        break;
      case 'Status Professionnel':
        nameSelect = 'filterStatus';
        selectEvery = 'Tous les statuts';
        break;
      default:
        break;
    }
    nameSelect = ''.concat(nameSelect, page);
    console.log(nameSelect, ' - ', filterSpeMembers ,' -> ', eval(nameSelect));
    return (
      <div id="selectinput" className="col">
        <select id="selectinput-select" className="w-100 text-white" name={nameSelect} onChange={e => this.onChange(e)}>
          <option defaultValue="" selected={eval(nameSelect) === '' ? true : false} disabled>{type}</option>
          <option value="">{selectEvery}</option>
          {list.map(item => <option key={item['@id']} defaultValue={item['@id']} selected={eval(nameSelect) === item.name ? true : false}>{item.name}</option>)}
        </select>
      </div>
    );
  }
}

/**
 * Export
 */
export default SelectInput;
