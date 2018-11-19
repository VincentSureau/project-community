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
import SingleMember from '../SingleMember';

// Styles
import './members.scss';


/**
 * Code
 */
class Members extends React.Component {
  componentDidMount() {
    const { getMembers, members } = this.props;
    getMembers(members);
  }

  render() {
    const { members } = this.props;
    return (
      <div id="members">
        <section id="members-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-members">
          <h1>Étudiants</h1>
          <h3>Vous êtes prêts ? Eux oui !</h3>
          {/* <div id="members-form" className="row w-100">
    
            <SelectInput />
            <SelectInput />
            <SelectInput />
            <TextInput />
    
          </div> */}
          <ArrowDown />
        </section>
        <section id="members-list" className="bg-members-darker justify-content-center row">
          {members.slice(0, 10).map(member => (<div key={member.lastname}><SingleMember /></div>))}
        </section>
      </div>
    );
  }
} 

Members.propTypes = {
  members: PropTypes.any.isRequired,
  getMembers: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Members;
