// npm import
import { connect } from 'react-redux';

// local import
import SingleMember from 'src/components/SingleMember';

// action creators
import { setMemberID } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  setMemberIDfromSM: (id) => {
    dispatch(setMemberID(id));
  },
});


// Container
const SingleMemberContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleMember);

// Export
export default SingleMemberContainer;
