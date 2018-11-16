/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import ArrowDown from '../ArrowDown';
import ProjectItem from './ProjectItem';
// Styles
import './projects.scss';

/**
 * Code
 */
const Projects = () => (
  <div id="projects">
    <section id="projects-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-projects">
      <h1 className="text-uppercase">Projets</h1>
      <h3 className="text-uppercase">Des exploits fait en un mois !</h3>
      <div id="projects-form" className="row w-100">

        <SelectInput />
        <SelectInput />
        <TextInput />

      </div>
      <ArrowDown />
    </section>
    <section id="projects-list" className="bg-projects-darker justify-content-center row">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </section>
  </div>

);

/**
 * Export
 */
export default Projects;
