/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Navbar from 'src/components/Navbar';
import Home from 'src/containers/Home';
import Login from 'src/components/Login';
import Member from 'src/containers/Member';
import MemberEdit from 'src/components/MemberEdit';
import Members from 'src/containers/Members';
import Project from 'src/components/Project';
import ProjectEdit from 'src/components/ProjectEdit';
import Projects from 'src/components/Projects';
// import Oclock from 'src/components/Oclock';
import Footer from 'src/components/Footer';

// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div className="bg-accueil" id="app">
    <Navbar />
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/login" exact render={() => <Login />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/members" exact render={() => <Members />} />
      {/* <Route path="/oclock" exact render={() => <Oclock />} /> */}
      <Route
        path="/members/:slug"
        exact
        render={(matchData) => {
          const { slug } = matchData.match.params;
          // console.log(slug);
          return <Member id={slug} />;
        }}
      />
      <Route path="/projects/title-1234567890" exact render={() => <Project />} />
      <Route path="/members/marc-dubois-1234567890/edit" exact render={() => <MemberEdit />} />
      <Route path="/projects/titre-1/edit" exact render={() => <ProjectEdit />} />
    </Switch>
    <Footer />
  </div>

);

/**
 * Export
 */
export default App;
