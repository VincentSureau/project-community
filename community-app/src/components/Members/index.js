/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import ArrowDown from '../ArrowDown';
import SingleMember from '../../containers/SingleMember';

// Styles
import './members.scss';


/**
 * Code
 */
class Members extends React.Component {
  componentDidMount() {
    const { getMembers } = this.props;
    getMembers();
  }

  render() {
    const { listMembers } = this.props;
    // console.log(members);
    return (
      <div id="members">
        <section id="members-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-members">
          <h1>Étudiants</h1>
          <h3>Vous êtes prêts ? Eux oui !</h3>
          <div id="members-form" className="row w-100">
    
            <SelectInput />
            <SelectInput />
            <SelectInput />
            <TextInput />
    
          </div>
          <ArrowDown />
        </section>
        <section id="members-list" className="bg-members-darker justify-content-center row">
          {listMembers.map(member => (
            <SingleMember
              key={member.slug}
              id={member['@id']}
              firstname={member.firstname}
              lastname={member.lastname}
              promotion={member.promotion.name}
              specialisation={member.specialisation.name}
              profilePicture={member.profilePicture}
              slug={member.slug}
            />))}
        </section>
      </div>
    );
  }
}

Members.propTypes = {
  listMembers: PropTypes.array.isRequired,
  getMembers: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Members;
