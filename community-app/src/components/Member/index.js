/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SingleMember from 'src/components/SingleMember';
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
    const { getMemberWithId, memberID } = this.props;
    getMemberWithId(memberID);
  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  };

  render() {
    const { member } = this.props;
    const promoname = this.getNestedObject(member, ['promotion', 'name']);
    const promostart = this.getNestedObject(member, ['promotion', 'startDate']);
    const promoend = this.getNestedObject(member, ['promotion', 'endDate']);
    const professionalstatus = this.getNestedObject(member, ['professionalStatus', 'name']);
    const spename = this.getNestedObject(member, ['specialisation', 'name']);
    const projectname = this.getNestedObject(member, ['project', 'name']);
    const projectid = this.getNestedObject(member, ['project', '@id']);
    const projectimages = this.getNestedObject(member, ['project', 'images']);
    const { member: { competences } } = this.props;

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
              <ProjectLink
                projectName={projectname}
                projectId={projectid}
                projectImages={projectimages}
              />
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
  ).isRequired,
};

/**
 * Export
 */
export default Member;
