// npm import
import { connect } from 'react-redux';

// local import
import Specialities from 'src/components/Home/Specialities';

// action creators
import { getMembersSpe } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  listMembers: state.listMembers,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMembersSpe: (spe) => {
    dispatch(getMembersSpe(spe));
  },
});


// Container
const SpecialitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Specialities);

// Export
export default SpecialitiesContainer;
