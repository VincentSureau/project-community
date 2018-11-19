// npm import
import { connect } from 'react-redux';

// local import
import Members from 'src/components/Members';

// == state ==
const mapStateToProps = state => ({
  members: state.members,
});

// == dispacth ==
const mapDispatchToProps = {};


// Container
const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);

// Export
export default MembersContainer;
