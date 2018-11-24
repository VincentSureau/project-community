// npm import
import { connect } from 'react-redux';

// local import
import ProjectEdit from 'src/components/ProjectEdit';

// action creators
import {
  getProjectEdit,
  getCompetences,
  changeInputForm,
  putProject,
} from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  project: state.project,
  value: state.value,
  competences: state.competences,
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
