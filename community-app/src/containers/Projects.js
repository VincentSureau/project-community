// npm import
import { connect } from 'react-redux';

// local import
import Projects from 'src/components/Projects';

// action creators
import { getProjects } from 'src/store/actions/projectsActions';
import { getFiltersProjects } from 'src/store/actions/filtersActions';

// == state ==
const mapStateToProps = state => ({
  listProjects: state.listProjects,
  filterSpeProjects: state.filterSpeProjects,
  filterPromoProjects: state.filterPromoProjects,
  filterTextProjects: state.filterTextProjects,
  listSpe: state.listSpe,
  listPromo: state.listPromo,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getProjects: () => {
    dispatch(getProjects());
  },
  getFilters: () => {
    dispatch(getFiltersProjects());
  },
});


// Container
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

// Export
export default ProjectsContainer;
