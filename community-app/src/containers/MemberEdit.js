// npm import
import { connect } from 'react-redux';

// local import
import MemberEdit from 'src/components/MemberEdit';

// action creators
import { getMemberEdit, putMember, deleteMember } from 'src/store/actions/membersActions';
import { changeInputForm } from 'src/store/actions/formActions';
import { getCompetences } from 'src/store/actions/competencesActions';
import { getProStatus } from 'src/store/actions/prostatusActions';

// == state ==
const mapStateToProps = state => ({
  member: state.member,
  value: state.value,
  competences: state.competences,
  status: state.status,
  editFormSend: state.editFormSend,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMemberWithId: (slug) => {
    dispatch(getMemberEdit(slug));
  },

  onChangeInput: (name, value) => {
    dispatch(changeInputForm(name, value));
  },

  getCompetences: () => {
    dispatch(getCompetences());
  },

  getProStatus: () => {
    dispatch(getProStatus());
  },

  postChangeMember: (data, id) => {
    dispatch(putMember(id, data));
  },

  deleteMember: (id) => {
    dispatch(deleteMember(id));
  },

});


// Container
const MemberEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberEdit);

// Export
export default MemberEditContainer;
