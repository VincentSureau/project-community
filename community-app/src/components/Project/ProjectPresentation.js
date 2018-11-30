/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SingleMember from '../SingleMember';

// Styles
import './project.scss';

/**
 * Code
 */
const ProjectPresentation = ({ members, promotion, competences }) => (
  <div id="project-teamtech" className="bg-project-darker">
    <section id="project-team">
      <img id="project-team-logo" src="/src/images/user-astronaut-solid.png" alt="" />
      <h1 className="text-white">La team</h1>
      <div id="project-team-list" className="row">
        {members.map(member => (member.isActive)
        && (
          <SingleMember
            key={member.id}
            firstname={member.firstname}
            lastname={member.lastname}
            promotion={promotion}
            specialisation={member.specialisation !== null ? member.specialisation.name : ''}
            contentUrl={member.contentUrl}
            slug={member.slug}
          />
        ))}

      </div>
    </section>
    <section id="project-tech">
      <h3 id="project-tech-title">Technologies utilisées</h3>
      <div className="mt-3 d-flex flex-wrap justify-content-center">
        {competences.map(competence => <span key={competence['@id']} className="project-tech-tag">{competence.name}</span>)}
      </div>
    </section>
  </div>

);

ProjectPresentation.propTypes = {
  members: PropTypes.array.isRequired,
  promotion: PropTypes.string.isRequired,
  competences: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default ProjectPresentation;
