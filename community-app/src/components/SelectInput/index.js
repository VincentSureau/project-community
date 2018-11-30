/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
      page,
      value,
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

    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div id="selectinput">
          <select id="selectinput-select" className="text-white w-100" name={nameSelect} onChange={e => this.onChange(e)} value={value}>
            <option defaultValue="" selected={window[nameSelect] === ''} disabled>{type}</option>
            <option value="">{selectEvery}</option>
            {list.map(item => <option key={item['@id']} defaultValue={item['@id']} selected={window[nameSelect] === item.name}>{item.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

SelectInput.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  filterSpeMembers: PropTypes.string.isRequired,
  filterPromoMembers: PropTypes.string.isRequired,
  filterStatusMembers: PropTypes.string.isRequired,
  filterSpeProjects: PropTypes.string.isRequired,
  filterPromoProjects: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  setFilterWithType: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SelectInput;
