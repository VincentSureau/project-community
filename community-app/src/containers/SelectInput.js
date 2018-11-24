// npm import
import { connect } from 'react-redux';

// local import
import SelectInput from 'src/components/SelectInput';

// action creators
import { setFilter } from 'src/store/actions';

// == state ==
const mapStateToProps = state => ({
  filterSpeMembers: state.filterSpeMembers,
  filterPromoMembers: state.filterPromoMembers,
  filterStatusMembers: state.filterStatusMembers,
  filterSpeProjects: state.filterSpeProjects,
  filterPromoProjects: state.filterPromoProjects,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  setFilterWithType: (type, value) => {
    dispatch(setFilter(type, value));
  },
});


// Container
const SelectInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectInput);

// Export
export default SelectInputContainer;
