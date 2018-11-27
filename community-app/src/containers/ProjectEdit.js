// npm import
import { connect } from 'react-redux';

// local import
import ProjectEdit from 'src/components/ProjectEdit';

// action creators
import { getProjectEdit, putProject } from 'src/store/actions/projectsActions';
import { getCompetences } from 'src/store/actions/competencesActions';
import { changeInputForm } from 'src/store/actions/formActions';

// == state ==
const mapStateToProps = state => ({
  project: state.project,
  value: state.value,
  competences: state.competences,
  editFormSend: state.editFormSend,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getProjectWithId: (id) => {
    dispatch(getProjectEdit(id));
  },

  onChangeInput: (name, value) => {
    dispatch(changeInputForm(name, value));
  },

  getCompetences: () => {
    dispatch(getCompetences());
  },

  postChangeProject: (data, id) => {
    dispatch(putProject(id, data));
  },

});


// Container
const ProjectEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectEdit);

// Export
export default ProjectEditContainer;
