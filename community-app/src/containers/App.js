// npm import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// local import
import App from 'src/components/App';

// == state ==
const mapStateToProps = state => ({});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  changePageLog: (pathname) => {
    dispatch({ type: 'CHANGE_PAGE', pathname });
  },
});


// Container
const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

// Export
export default AppContainer;
