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
import Biography from './Biography';
import ContactBar from './ContactBar';
import ProjectLink from './ProjectLink';

// Styles
import './member.scss';

/**
 * Code
 */

class Member extends React.Component {
  componentDidMount() {
    const { getMemberWithId, id } = this.props;
    // L'id est de type: capucine-bertin-650,
    getMemberWithId(id);
  }

  componentDidUpdate() {
    const { getMemberWithId, id, previousSlug } = this.props;
    // L'id est de type: capucine-bertin-650,
    if (id !== previousSlug) {
      getMemberWithId(id);
    }
  }

  // Fonction qui permet de récupérer un élément imbriqué dans un objet à plusieurs niveaux
  getNestedObject = (nestedObj, pathArr) => (
    pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
  );

  render() {
    const { member, member: { competences } } = this.props;
    const promoname = this.getNestedObject(member, ['promotion', 'name']);
    const promostart = this.getNestedObject(member, ['promotion', 'startDate']);
    const promoend = this.getNestedObject(member, ['promotion', 'endDate']);
    const professionalstatus = this.getNestedObject(member, ['professionalStatus', 'name']);
    const spename = this.getNestedObject(member, ['specialisation', 'name']);
    const projectname = this.getNestedObject(member, ['project', 'name']);
    const projectslug = this.getNestedObject(member, ['project', 'slug']);
    const projectid = this.getNestedObject(member, ['project', '@id']);
    const projectimages = this.getNestedObject(member, ['project', 'images']);
    const projectisactive = this.getNestedObject(member, ['project', 'isActive']);

    return (
      <div id="member">
        { (member != null)
          ? (
            <div>
              <section id="member-info" className="d-flex flex-column justify-content-center align-items-center bg-member">
                <SingleMember
                  firstname={member.firstname}
                  lastname={member.lastname}
                  promotion={promoname}
                  specialisation={spename}
                  profilePicture={member.profilePicture}
                />
                <ContactBar {...member} />
              </section>
              <Biography
                description={member.description}
                promotion={promoname}
                promoStartDate={promostart}
                promoEndDate={promoend}
                professionalStatus={professionalstatus}
                competences={competences}
              />
              {projectisactive
              && (
                <ProjectLink
                  projectName={projectname}
                  projectId={projectid}
                  projectImages={projectimages}
                  projectSlug={projectslug}
                />
              )
              }
            </div>
          )
          : <p>Loading</p>
        }
      </div>
    );
  }
}

Member.propTypes = {
  promotion: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ),
};

Member.defaultProps = {
  promotion: {},
};

/**
 * Export
 */
export default Member;
