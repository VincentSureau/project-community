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

// Styles
import './members.scss';


/**
 * Code
 */
const Members = () => (
  <div id="members">
    <section id="members-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-members">
      <h1 className="text-uppercase">Étudiants</h1>
      <h3 className="text-uppercase">Vous êtes prêts ? Eux oui !</h3>

      <div id="members-form" className="row w-100">

        <SelectInput />
        <SelectInput />
        <TextInput />

      </div>
      <ArrowDown />
    </section>
  </div>

);

/**
 * Export
 */
export default Members;
