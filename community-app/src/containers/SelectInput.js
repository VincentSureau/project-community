// npm import
import { connect } from 'react-redux';

// local import
import SelectInput from 'src/components/SelectInput';

// action creators
import { setFilter } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({});

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
