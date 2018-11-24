// npm import
import { connect } from 'react-redux';

// local import
import Member from 'src/components/Member';

// action creators
import { getMember } from 'src/store/actions';

// == state ==
const mapStateToProps = state => ({
  member: state.member,
  memberID: state.memberID,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMemberWithId: (id) => {
    dispatch(getMember(id));
  },
});


// Container
const MemberContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Member);

// Export
export default MemberContainer;
