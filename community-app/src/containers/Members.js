// npm import
import { connect } from 'react-redux';

// local import
import Members from 'src/components/Members';

// action creators
import { getMembers } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  members: state.members,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMembers: () => {
    dispatch(getMembers());
  },
});


// Container
const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);

// Export
export default MembersContainer;
