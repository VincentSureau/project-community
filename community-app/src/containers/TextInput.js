// npm import
import { connect } from 'react-redux';

// local import
import TextInput from 'src/components/TextInput';

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
const TextInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextInput);

// Export
export default TextInputContainer;
