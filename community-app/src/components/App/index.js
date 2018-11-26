/**
 * NPM import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import Navbar from 'src/containers/Navbar';
import Home from 'src/containers/Home';
import Login from 'src/components/Login';
import Member from 'src/containers/Member';
import MemberEdit from 'src/containers/MemberEdit';
import Members from 'src/containers/Members';
import Project from 'src/containers/Project';
import ProjectEdit from 'src/containers/ProjectEdit';
import Projects from 'src/containers/Projects';
import NotFound from 'src/components/NotFound';
// import Oclock from 'src/components/Oclock';
import Footer from 'src/components/Footer';
import decode from 'jwt-decode';

// Styles
import './app.scss';

/**
 * Code
 */


function allowedUser(slug) {
  console.log(localStorage);
  if (localStorage.connect_token !== undefined) {
    const tokenDecoded = decode(localStorage.connect_token);
    console.log(tokenDecoded);
    if ((tokenDecoded.slugProject === slug) || (tokenDecoded.slugProfile === slug)) {
      return true;
    }
  }
  return false;
}
class App extends React.Component {
  componentDidUpdate() {
    const { changePageLog } = this.props;
    changePageLog(window.location.pathname);
  }

  render() {
    return (
      <div className="bg-accueil" id="app">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/projects" exact render={() => <Projects />} />
          <Route path="/members" exact render={() => <Members />} />
          {/* <Route path="/oclock" exact render={() => <Oclock />} /> */}
          <Route
            path="/members/:slug/edit"
            exact
            render={matchData => (console.log(allowedUser(matchData.match.params.slug))
              ? <MemberEdit id={matchData.match.params.slug} />
              : <Redirect to="/login" />)}
          />
          <Route
            path="/members/:slug"
            exact
            render={(matchData) => {
              const { slug } = matchData.match.params;
              return <Member id={slug} />;
            }}
          />
          <Route
            path="/projects/:slug/edit"
            exact
            render={matchData => (console.log(allowedUser(matchData.match.params.slug))
              ? <ProjectEdit id={matchData.match.params.slug} />
              : <Redirect to="/login" />)}
          />
          <Route
            path="/projects/:slug"
            exact
            render={(matchData) => {
              const { slug } = matchData.match.params;
              return <Project id={slug} />;
            }}
          />
          <Route path="/projects/titre-1/edit" exact render={() => <ProjectEdit />} />

          {/* Page 404 */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  changePageLog: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default App;
